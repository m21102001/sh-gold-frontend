import { Footer, Navbar } from '@/layout'
import './contactUs.scss'
import { useState } from 'react'
import axios from '@/api/axios'

const ContactUs = () => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')


  const hanelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios
        .post(`/contact/`, {
          name: name,
          email: email,
          address: address,
          phone: phone,
          message: message,
          company: company,
        })
        .then((response) => {
          console.log('created successful', response.data);
        });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('message', err.message);
    }
  };
  return (
    <>
      {/* {loading && <div className="loading"></div>} */}
      <div className='contactUs'>
        <Navbar />
        <div className='Container'>
          <div className='m-auto d-flex justify-content-center my-5'>
            <span></span>
            <h2 className='text-center comunation fs-1 fw-bold'>اتصل بنا</h2>
            <span></span>
          </div>
          <div className='card-form form-control container rounded-4 text-end text-light my-4'>
            <p className="pt-3 fw-bold fs-5 ">إليك مطلق الحرية لإرسال مقترحاتك وشكوتك</p>
            <form className="row g-3" onSubmit={hanelSubmit}>
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
                  htmlFor="inputEmail"
                  className="form-label"
                > العنوان</label>
                <input
                  name="inputAddrss"
                  type="text"
                  className="form-control"
                  id="inputAddrss"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder=" العنوان*"
                />
              </div>
              <div className="col-12">
                <label
                  htmlFor="inputEmail"
                  className="form-label"
                > اسم الشركه</label>
                <input
                  name="inputCname"
                  type="text"
                  className="form-control"
                  id="inputCname"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder=" اسم الشركه*"
                />
              </div>
              <div className="col-12">
                <label
                  htmlFor="inputAddress2"
                  className="form-label"
                >محتوى الرساله</label>
                <textarea
                  name='exampleFormControlTextarea1'
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder='اكتب مقترحاتك وشكوتك'></textarea>
              </div>
              <div className="col-12">
                {!loading && (
                  <button className='d-flex m-auto send'>
                    ارسال
                  </button>
                )}
                {loading && (
                  <button className='d-flex m-auto send'>
                    جاري الارسال ...
                  </button>
                )}

              </div>
            </form>
          </div>
          <div className="text-center">
            <div className="row my-5">
              <div className="col">
                <a href="https://wa.me/201011497266">
                  <div className="card card-form text-light">
                    <div className="card-body">
                      <h5 className="card-title text-end">إتصل بنا مباشرة على :</h5>
                      <p className="card-text">+201011497266</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://wa.me/201011497266">
                  <div className="card card-form text-light">
                    <div className="card-body">
                      <h5 className="card-title text-end">التواصل عن طريق الواتساب :</h5>
                      <p className='card-text text-light'>+201011497266</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="mailto:mohaedelfayoumy@gmail.com">
                  <div className="card card-form text-light">
                    <div className="card-body">
                      <h5 className="card-title text-end">التواصل عن طريق البريد الإلكتروني :</h5>
                      <p className="card-text">mohaedelfayoumy@gmail.com</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default ContactUs