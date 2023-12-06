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
            title:title,
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
          <h1>Update Gold Item</h1>
          <form
            onSubmit={hanelSubmit}
            className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
          >
            <input
              type="text"
              name="title"
              className="form-control  mt-5"
              id="title"
              required
              placeholder="ادخل اسم المنتج*"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              name="size"
              className="form-control  mt-5"
              id="size"
              required
              placeholder="ادخل حجم المنتج*"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
            <input
              type="number"
              name="price"
              className="form-control  mt-5"
              id="price"
              required
              placeholder="اكتب السعر*"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <textarea
              type="text"
              name="description"
              className="form-control  mt-5"
              id="description"
              required
              placeholder="اكتب وصفا دقيقا للمنتج*"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {!isPending && (
              <button className="d-grid col-4  align-content-center mx-auto btn btn-outline-primary  mt-5">
                اضافه جديد
              </button>
            )}
            {isPending && (
              <button className="d-grid col-4  align-content-center mx-auto btn btn-outline-primary mt-5">
                جاري الاضافه ...
              </button>
            )}
            <button onClick={() => navigate('/dash/gold')} className="d-grid col-4  align-content-center mx-auto btn btn-outline-danger mt-5">
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
