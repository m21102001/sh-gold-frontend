import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar } from "@/layout";
import axios from "@/api/axios";
const AddNewIdea = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('');
  const [cover, setCover] = useState('');
  const [description, setDescription] = useState('');
  const [pdf, setPdf] = useState('');

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true)
    try {
      await axios
        .post(
          `/invest/`,
          {
            name: name,
            email: email,
            phone: phone,
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
          console.log('created success', response.data);
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
      console.log('message', err.message);
    }
  }
  return (

    <div className='contactUs'>
      <Navbar />
      <div className='Container'>
        <div className='m-auto d-flex justify-content-center my-5'>
          <span></span>
          <h2 className='text-center comunation fs-1 fw-bold' style={{ color: 'var(--gold-color2)', background: "var(--darkblue-color)" }}>اضافه فكره جديده</h2>
          <span></span>
        </div>

        <div className='card-form form-control container rounded-4 text-end text-light my-4'>
          <form className="row g-3" onSubmit={handelSubmit}>
            <div className="col-md-6 col-sm-12">
              <label
                htmlFor="inputName"
                className="form-label"
              >الاسم بالكامل</label>
              <input
                name="inputName"
                type="text"
                className="form-control"
                id="inputName"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='الاسم بالكامل*'
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <label
                htmlFor="inputPhone"
                className="form-label"
              >الهاتف</label>
              <input
                name="inputPhone"
                type="number"
                className="form-control"
                id="inputPhone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='الهاتف*'
              />
            </div>
            <div className="col-12">
              <label
                htmlFor="inputEmail"
                className="form-label"
              >البريد الالكترونى</label>
              <input
                name="inputEmail"
                type="email"
                className="form-control"
                id="inputEmail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="البريد الالكترونى*"
              />
            </div>
            <div className="col-12">
              <label
                htmlFor="photoinput"
                className="form-label"
              > ارفع صور توضع المشروع</label>
              <input
                name="cover"
                type="file"
                className="form-control"
                id="cover"
                placeholder="ارفع غلاف للمشروع"
                onChange={(e) => setCover(e.target.files[0])}
                multiple
                // value={cover}
                required
              />
            </div>
            <div className="col-12">
              <label
                htmlFor="inputEmail"
                className="form-label"
              > ارفع ملف لتفاصيل المشروع</label>
              <input
                name="inputCname"
                type="file"
                className="form-control"
                id="pdf"
                placeholder="ارفع ملف لتفاصيل المشروع"
                onChange={(e) => setPdf(e.target.files[0])}
                // value={}
                required
              />
            </div>
            <div className="col-12">
              <label
                htmlFor="inputAddress2"
                className="form-label"
              >اكتب وصف مختصر للمشروع</label>
              <textarea
                type="text"
                name='description'
                className="form-control"
                id="description"
                placeholder="اكتب وصف مختصر للمشروع*"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                rows="3"
                required
              />
            </div>
            {!isPending && (
              <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
                اضافه
              </button>
            )}
            {isPending && (
              <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4"
                disabled
              >
                جاري الاضافه ...
              </button>
            )}
            <button
              onClick={() => navigate('/club')}
              className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
              الغاء
            </button>
          </form>
        </div>
      </div >
      <Footer />
    </div >
  )
}

export default AddNewIdea