import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"

const UpdateInactiveInvesmentDash = () => {
  const item = useLocation()?.state?.item
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [name, setName] = useState(item?.name);
  const [email, setEmail] = useState(item?.email)
  const [phone, setPhone] = useState(item?.phone);
  const [title, setTitle] = useState(item?.title);
  const [price, setPrice] = useState(item?.price);
  const [profit, setProfit] = useState(item?.profit);
  const [cover, setCover] = useState(item?.cover);
  const [description, setDescription] = useState(item?.description);
  const [pdf, setPdf] = useState(item?.pdf);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true)
    try {
      await axios
        .put(
          `/invest/${item?._id}`,
          {
            name: name,
            email: email,
            phone: phone,
            title: title,
            price: price,
            profit: profit,
            images: cover,
            description: description,
            pdf: pdf
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
            return navigate('/dash/investment')
          }
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
      console.log('message', err.message);
    }
  }

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>Update New Item</h2>
        </div>
        <form
          onSubmit={handelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">ادخل الاسم بالكامل</div>
          <input
            type="text"
            name="name"
            className="form-control  mb-4"
            id="name"
            required
            placeholder="ادخل الاسم بالكامل*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="label-form">الهاتف </div>
          <input
            type="number"
            name="phone"
            className="form-control  mb-4"
            id="phone"
            required
            placeholder=" الهاتف*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="label-form">البريد الالكترونى </div>
          <input
            type="email"
            name="email"
            className="form-control mb-4"
            id="email"
            required
            placeholder=" الايميل*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="label-form"> العنوان </div>
          <input
            type="text"
            name="title"
            className="form-control mb-4"
            id="title"
            required
            placeholder=" العنوان*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="label-form"> السعر </div>
          <input
            type="number"
            name="price"
            className="form-control mb-4"
            id="price"
            required
            placeholder=" السعر*"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="label-form"> الربح </div>
          <input
            type="text"
            name="profit"
            className="form-control mb-4"
            id="profit"
            required
            placeholder=" الربح*"
            value={profit}
            onChange={(e) => setProfit(e.target.value)}
          />
          <div className="label-form"> ارفع غلاف للمشروع </div>
          <input
            name="cover"
            type="file"
            className="form-control mb-4"
            id="cover"
            placeholder="ارفع غلاف للمشروع"
            onChange={(e) => setCover(e.target.files[0])}
            multiple
            // value={cover}
            required
          />
          <div className="label-form"> ارفع ملف لتفاصيل المشروع (pdf)</div>
          <input
            name="inputCname"
            type="file"
            className="form-control mb-4"
            id="pdf"
            placeholder="ارفع ملف لتفاصيل المشروع"
            onChange={(e) => setPdf(e.target.files[0])}
            // value={}
            required
          />
          <div className="label-form">اكتب وصف مختصر للمشروع</div>
          <textarea
            type="text"
            name='description'
            className="form-control mb-4"
            id="description"
            placeholder="اكتب وصف مختصر للمشروع*"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows="3"
            required
          />

          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              تعديل 
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري التعديل ...
            </button>
          )}
          <button onClick={() => navigate('/dash/investment')} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateInactiveInvesmentDash