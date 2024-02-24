import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navbar } from "@/layout"
import { ToastContainer, toast } from 'react-toastify';
import axios from '@/api/axios'

const ResetPasswordOtp = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [phone, setPhone] = useState('')

  const notify = () =>
    toast.error(' لم يتم العثور على الحساب, من فضلك تأكد من رقم الهاتف', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  // Submit the form data to the server
  const handelSubmit = async (e) => {
    e.preventDefault()
    setIsPending(true)
    try {
      await axios.post('/auth/forgotPassword', {
        phone: phone,
      },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          setIsPending(false)
          console.log(response);
          if (response.status === 200) {
            navigate('/auth/verifyCode')
          }
        })

    } catch (err) {
      setIsPending(false);
      console.log('response', err.message);
      <ToastContainer />
    }
  }

  return (
    <>
      {isPending && <div className="loading"></div>}
      <div className='login-page'>
        <Navbar />
        <div className="Container pt-5 login">
          <div className="container text-end d-flex flex-column justify-content-center m-auto body-card" >
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
              <h3 className='text-center pt-3 fs-2 fw-bold'> سوف يتم ارسال كود الي رقم الهاتف لتغيير كلمة المرور الخاصة بك</h3>
              <form className='pb-5 pt-2' onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputphone1"
                    className="form-label fs-5 fw-bold"
                  >  أدخل  رقم الهاتف*</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputphone1"
                    aria-describedby="phoneHelp"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2">
                  <ToastContainer />
                  <button onClick={notify} >ارسال كود</button>
                </div>
              </form>
              <p id="create-account" className="my-15 text-center fs-6 fw-bold"> هل لديك حساب بالفعل ؟
                <Link
                  to={"/auth/login"}
                  className="text-sabaek-gold fs-6 fw-bold"
                  style={{ cursor: "pointer" }}
                > قم بتسجيل الدخول</Link>
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default ResetPasswordOtp