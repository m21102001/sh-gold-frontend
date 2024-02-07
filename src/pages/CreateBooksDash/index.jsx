import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { SidebarDashboard } from "@/layout"
import './createBookDash.scss'
import axios from "@/api/axios"
import { MdOutlineArrowBack } from "react-icons/md";
const CreateBookDash = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState([])
  const [pdf, setpdf] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')


  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `/books/`,
          {
            title: title,
            image: image,
            pdf: pdf,
            description: description,
            price: price,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          // console.log('created success', response);
          if (response?.status == 201) {
            alert('created successfully')
            return navigate('/dash/books')
          }
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
      alert('error message: ' + err?.response?.data?.errors?.map((item) => item.msg));
    }
  };

  // const handleImageChange = (event) => {
  //   const files = event.target.files;
  //   const imageArray = [];

  //   for (let i = 0; i < files.length; i++) {
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       imageArray.push(e.target.result);
  //       if (imageArray.length === files.length) {
  //         setImage(imageArray);
  //       }
  //     };

  //     reader.readAsDataURL(files[i]);
  //   }
  // };

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>اضافة كتاب جديد</h2>
        </div>
        <Link to={'/dash/books'} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">ادخل اسم المنتج</div>
          <input
            type="text"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="ادخل اسم المنتج*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="label-form">اكتب السعر</div>
          <input
            type="number"
            name="price"
            className="form-control  mb-4"
            id="price"
            required
            placeholder="اكتب السعر*"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="label-form">اضف ملف (Choose PDF)*</div>
          <input
            type="file"
            name="pdf"
            className="form-control  mb-4"
            id="pdf"
            required
            placeholder="اكتب السعر*"
            onChange={(e) => setpdf(e.target.files[0])}
          />
          <div className="label-form">اضف صورة* (Choose image (.png, .jpg, ...))</div>
          <input
            type="file"
            name="image"
            className="form-control  mb-4"
            id="image"
            accept="image/*"
            multiple
            required
            placeholder="اضف صورة*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="label-form">اكتب وصفا دقيقا للمنتج*</div>
          <textarea
            type="text"
            name="description"
            className="form-control  mb-4"
            id="description"
            required
            placeholder="اكتب وصفا دقيقا للمنتج*"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              اضافة جديد
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري الاضافة ...
            </button>
          )}
          <button onClick={() => navigate('/dash/books')} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateBookDash