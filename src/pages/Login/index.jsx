import { useState } from 'react';
import { Navbar } from '@/layout'
import { Link, useNavigate } from 'react-router-dom'
import axios from '@/api/axios'
import { getCookie, setCookie } from 'cookies-next';
import './login.scss'

const Login = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handelSubmit = async (e) => {
    e.preventDefault()
    setIsPending(true)
    try {
      await axios.post('/auth/login', {
        email: email,
        password: password,
      },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          console.log(response);
          setCookie("token", response.data.token);
          setCookie("role", response?.data?.data?.role);
          setIsPending(false)
          if (getCookie('token') !== null) {
            if (response?.data?.data?.role === "manager" || response?.data?.data?.role === 'admin') {
              navigate('/dash/dashboard')
            }
            if (response?.data?.data?.role === "user") {
              navigate('/')
            }
          }
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
              <h3 className='text-center pt-3 fs-2 fw-bold'>مرحبًا بعودتك, لقد اشتقنا اليك</h3>
              <form className='pb-5 pt-2' onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fs-4 fw-bold"
                  >
                    البريد الالكترونى*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text fw-bold">لن نشارك بريدك الإلكتروني أبدًا مع أي شخص آخر. </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label fs-4 fw-bold"
                  >
                    كلمه المرور*
                  </label>
                  <input
                    type="password"
                    className="form-control fw-bold"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <Link
                  to="/auth/resetPasswordOtp"
                >
                  <p id="create-account" className="my-15 fs-4 fw-bold text-sabaek-gold"> نسيت كلمه المرور؟
                  </p>
                </Link>
                <div className="d-grid gap-2">
                  <button >تسجيل الدخول</button>
                </div>
              </form>
              <p id="create-account" className="my-15 text-center fs-6 fw-bold"> ليس لديك حساب ؟
                <Link
                  to={"/auth/sign-up"}
                  className="text-sabaek-gold fs-6 fw-bold"
                  style={{ cursor: "pointer" }}
                > قم بإنشاء حساب الآن</Link>
              </p>
            </div>

          </div>

        </div>
      </div>
    </>

  )
}

export default Login
