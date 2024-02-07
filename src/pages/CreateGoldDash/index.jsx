import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { MdOutlineArrowBack } from "react-icons/md";
const CreateGoldDahs = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const getInitialState = () => {
    const value = "Premium Products";
    return value;
  };
  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };


  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `/gold-bars`,
          {
            title: title,
            size: size,
            price: price,
            description: description,
            image: image,
            category: value
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          console.log('created success', response);
          if (response?.status == 201) {
            alert('created successfully')
            return navigate('/dash/gold')
          }
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.log('response' + err?.response.json);
      alert('error message: ' + err?.response?.data?.errors?.map((item) => item.msg));
    }
  };

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>  اضافة منتج جديد</h2>
        </div>
        <Link to={'/dash/gold'} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">ادخل اسم المنتج*</div>
          <input
            type="text"
            name="title"
            className="form-control  mb-3"
            id="title"
            required
            placeholder="ادخل اسم المنتج*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="label-form">ادخل حجم المنتج*</div>
          <input
            type="number"
            name="size"
            className="form-control  mb-3"
            id="size"
            required
            placeholder="ادخل حجم المنتج*"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <div className="label-form">اكتب السعر*</div>
          <input
            type="number"
            name="price"
            className="form-control  mb-3"
            id="price"
            required
            placeholder="اكتب السعر*"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="label-form">اضافة االى قائمة *</div>
          <select
            className="form-select"
            aria-label="Default select example"
            value={value}
            onChange={handleChange}
          >
            <option defaultValue selected value="Premium Products">Premium Products</option>
            <option value="Othmani Lera and Georgian">Othmani Lera and Georgian</option>
            <option value="Mother Day">Mother Day</option>
            <option value="Silver">Silver</option>
            <option value="Platinum">Platinum</option>
            <option value="PAMP Bullion">PAMP Bullion</option>
            <option value="Swiss Bar">Swiss Bar</option>
            <option value="White Gold">White Gold</option>
            <option value="Sabhat">Sabhat</option>
            <option value="Islamic">Islamic</option>
            <option value="Bracelet">Bracelet</option>
            <option value="Sets">Sets</option>
            <option value="Rremium products">Rremium products</option>
          </select>
          <div className="label-form mt-3">اضف صورة للذةب (Choose image (.png, .jpg, ...))</div>
          <input
            type="file"
            name="image"
            className="form-control  mb-3"
            id="image"
            required
            // placeholder="اكتب السعر*"
            // value={price}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="label-form">اكتب وصفا دقيقا للمنتج*</div>
          <textarea
            type="text"
            name="description"
            className="form-control  mb-3"
            id="description"
            required
            placeholder="اكتب وصفا دقيقا للمنتج*"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mt-3">
              اضافة جديد
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mt-3">
              جاري الاضافة ...
            </button>
          )}
          <button onClick={() => navigate('/dash/gold')} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mt-3">
            الغاء
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateGoldDahs
