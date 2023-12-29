import { Footer, Navbar } from "@/layout"
import axios from "@/api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const InvestmentContactUs = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [name, setName] = useState('');
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [profit, setProfit] = useState('')

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true)
    try {
      await axios
        .post(
          `/investorRequest/`,
          {
            name: name,
            address: address,
            phone: phone,
            email: email,
            description: description,
            price: price,
            profit: profit
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
    <>
      <div className='contactUs'>
        <Navbar />
        <div className='Container'>
          <div className='m-auto d-flex justify-content-center my-5'>
            <span></span>
            <h2 className='text-center comunation fs-1 fw-bold' style={{ color: 'var(--gold-color2)', background: "var(--darkblue-color)" }}>تواصل مع صاحب الفكره  </h2>
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
              <div className="col-md-6 col-sm-12">
                <label
                  htmlFor="inputAddress"
                  className="form-label"
                > العنوان </label>
                <input
                  name="inputAddress"
                  type="text"
                  className="form-control"
                  id="inputِAddress"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="العنوان *"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label
                  htmlFor="inputPrice"
                  className="form-label"
                > السعر بالدينار الكويتى</label>
                <input
                  name="inputPrice"
                  type="number"
                  className="form-control"
                  id="inputِPrice"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder=" السعر   *"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label
                  htmlFor="inputProfit"
                  className="form-label"
                >  النسبه  </label>
                <input
                  name="inputProfit"
                  type="text"
                  className="form-control"
                  id="inputِProfit"
                  required
                  value={profit}
                  onChange={(e) => setProfit(e.target.value)}
                  placeholder="مثال (10%) *"
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
                  تقديم
                </button>
              )}
              {isPending && (
                <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4"
                  disabled
                >
                  جاري التقديم ...
                </button>
              )}
              <button
                onClick={() => navigate('/investment')}
                className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
                الغاء
              </button>
            </form>
          </div>
        </div >
        <Footer />
      </div >
    </>
  )
}

export default InvestmentContactUs
