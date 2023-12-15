import { useNavigate } from 'react-router-dom';
import { SidebarDashboard } from '@/layout';
import { useLocation } from 'react-router-dom';
import { useState } from "react"
import axios from "@/api/axios"

const UpdateGoldDash = () => {
  const item = useLocation()?.state?.item
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

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
            description: description
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          console.log('created success', response.data);
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
      console.log('message', err.message);
    }
  };


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
            <div className="label-form">اكتب وصفا دقيقا للمنتج*</div>
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
