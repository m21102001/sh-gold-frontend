import { Navbar } from "@/layout"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import axios from '@/api/axios'
const ResetPassword = () => {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handelSubmit = async (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      alert("Passwords do not match")
      return;
    }
    try {
      setPending(true)
      await axios.put('/auth/resetPassword',
        {
          password: password,
          passwordConfirm: passwordConfirm
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then(response => {
        if (response?.status) {
          navigate('./')
        }
      })
    } catch (err) {
      console.log(err)
      setPending(false)
    }
  }
  return (
    <>
      {pending && <div className="loading"></div>}
      <div className='login-page'>
        <Navbar />
        <div className="Container pt-5 login">
          <div className="container text-end d-flex flex-column justify-content-center m-auto body-card" >
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
              <h3 className='text-center pt-3 fs-2 fw-bold'>       اعادة تعيين كلمة المرور</h3>
              <form className='pb-5 pt-2' onSubmit={handelSubmit}>
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
                    htmlFor="exampleInputPassword1"
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
                <div className="d-grid gap-2">
                  <button >اعاده تعيين كلمه المرور</button>
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

export default ResetPassword