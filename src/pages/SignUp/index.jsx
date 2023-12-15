import { Link, useNavigate } from 'react-router-dom'
import './signUp.scss'
import { Navbar } from '@/layout'
import { useState } from 'react'
import axios from '@/api/axios'

const Signup = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [name, setName] = useState('mohamed')
  const [email, setEmail] = useState('test@gmail.com')
  const [password, setPassword] = useState('123456')
  const [passwordConfirm, setPasswordConfirm] = useState('123456')

  // Submit the form data to the server
  const handelSubmit = async (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      alert("Passwords do not match")
      return;
    }
    try {
      await axios.post('/auth/signup', {
        name: name,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm
      },
        {
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc1OGI1MzY4YTU3MjJhM2VjNjk0MDgiLCJpYXQiOjE3MDIzMjEzNjcsImV4cCI6MTcwMjQwNzc2N30.kMP-s1p1mzjuP1myqELORbONmW6KaPffb3BcbxTffyo'
          }
        })
        .then((response) => {
          console.log(response);
          navigate('/auth/login')
        })

    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
      console.log('message', err.message);
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
              <h3 className='text-center pt-3 fs-2 fw-bold'>اهلا بيك ف مجتمعنا الذهبي</h3>
              <form className='pb-5 pt-2' onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputName"
                    className="form-label fs-5 fw-bold"
                  >
                    الاسم بالكامل*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder='الاسم بالكامل*'
                    aria-describedby="nameHelp"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fs-5 fw-bold">البريد الالكترونى*</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder='البريد الالكترونى*'
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text fw-bold">لن نشارك بريدك الإلكتروني أبدًا مع أي شخص آخر. </div>
                </div>
                {/* <div className="mb-3">
                <label
                  htmlFor="exampleInputPhone"
                  className="form-label fs-5 fw-bold"
                >
                  رقم الجوال*
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPhone"
                  placeholder='رقم الجوال*'
                  aria-describedby="phoneHelp"
                />
              </div> */}
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label fs-5 fw-bold"
                  >كلمه المرور*</label>
                  <input
                    type="password"
                    className="form-control fw-bold"
                    id="exampleInputPassword1"
                    placeholder='كلمه المرور*'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword2"
                    className="form-label fs-5 fw-bold"
                  > تأكيد كلمه المرور*</label>
                  <input
                    type="password"
                    className="form-control fw-bold"
                    id="exampleInputPassword2"
                    placeholder='تأكيد كلمه المرور*'
                    value={passwordConfirm}
                    onChange={e => setPasswordConfirm(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2 pt-4">
                  <button >تسجيل الدخول</button>
                </div>
              </form>
              <p id="create-account" className="my-15 text-center fs-6 fw-bold"> هل لديك حساب بالفعل ؟
                <Link
                  to={"/auth/login"}
                  className="text-sabaek-gold fs-6 fw-bold"
                  style={{ cursor: "pointer" }}
                > تسجيل الدخول</Link>
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Signup
