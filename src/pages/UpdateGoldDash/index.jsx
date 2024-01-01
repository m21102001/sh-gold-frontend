import { useNavigate } from 'react-router-dom';
import { SidebarDashboard } from '@/layout';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "@/api/axios"

const UpdateGoldDash = () => {
  const item = useLocation()?.state?.item
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState(item?.title)
  const [size, setSize] = useState(item?.size)
  const [price, setPrice] = useState(item?.price)
  const [description, setDescription] = useState(item?.description)
  const [image, setImage] = useState(item?.image)
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
        .put(
          `/gold-bars/${item._id}`,
          {
            title: title,
            size: size,
            price: price,
            description: description,
            category: value,
            image: image
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
      console.log('response' + err.response.data.errors?.map((item) => item.msg));
      alert('error message: ' + err?.response?.data?.errors?.map((item) => item.msg));

    }
  };
  useEffect

  return (
    <>
      <div className="dashboard d-flex flex-row">
        <SidebarDashboard />
        <div className="container text-center">
          <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
            <h2 className='fs-1 fw-bold'>Update Gold Item</h2>
          </div>
          <form
            onSubmit={hanelSubmit}
            className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
          >
            <div className="label-form">تعديل اسم المنتج*</div>
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
            <div className="label-form">تعديل حجم المنتج*</div>
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
            <div className="label-form">تعديل السعر*</div>
            <input
              // type="number"
              // name="price"
              className="form-control  mb-3"
              // id="price"
              required
              placeholder="اكتب السعر*"
              // ref={price.current.value}
              value={price}
              // defaultValue={item?.price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="label-form">تعديل  القائمه *</div>
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
            <div className="label-form">تعديل صوره المنتج</div>
            <input
              // hidden
              type="file"
              className="form-control  mb-3"
              required
              id='image'
              onChange={(e) => setImage(e.target.files[0])}
            />
            {/* <label id="file-input-label" className="text-light" htmlFor='image'>
              {image}
              <FaImage size={30} />
            </label> */}
            <div className="label-form">تعديل الوصف للمنتج*</div>
            <textarea
              type="text"
              name="description"
              className="form-control  mb-3"
              id="description"
              required
              placeholder="اكتب وصفا دقيقا للمنتج*"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {!isPending && (
              <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mt-3">
                تعديل
              </button>
            )}
            {isPending && (
              <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mt-3">
                جاري التعديل ...
              </button>
            )}
            <button onClick={() => navigate('/dash/gold')} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mt-3">
              cancel
            </button>
          </form>
        </div>
        {/* <div className="container text-center">
          <h1>Update Gold Item</h1>
          <div>{item?.price}</div>
          <div>{item?.title}</div>
          <div>{item?._id}</div>
        </div> */}
      </div>
    </>
  )
}

export default UpdateGoldDash
