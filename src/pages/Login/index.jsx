import { useEffect, useState } from 'react';
import { Navbar } from '@/layout'
import { Link, useNavigate } from 'react-router-dom'
import axios from '@/api/axios'
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
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc4NWUwMzMxYTgxMWI4OTE2ZTkyYmMiLCJpYXQiOjE3MDIzODcyMDgsImV4cCI6MTcwMjQ3MzYwOH0.ugeg_sTcPcYosYpGwstlvpOKRYgkeMiRgfqZKFRFTL8', 
            // 'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc3OTNkZmZhNzczMzNkMDgxZjc3OGEiLCJpYXQiOjE3MDIzMzU0NTcsImV4cCI6MTcwMjQyMTg1N30.d6A7jWj5_VpBXgtxs_s5SEzvIndwzWDeQs2qURe4efU'
          }
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role" ,response?.data?.data?.role );
          setIsPending(false)
          if (localStorage.getItem('token')) {
            if (response?.data?.data?.role === "manager" || response?.data?.data?.role === 'admin') {
              navigate('/dash/dashboard')
            }
            if (response?.data?.data?.role === "user") {
              navigate('/')
            }

          } else {
            navigate('/auth/login')
            if (response.status === 200) {
              if (response?.data?.data?.role === "manager" || response?.data?.data?.role === 'admin') {
                navigate('/dash/dashboard')
              }
              if (response?.data?.data?.role === "user") {
                navigate('/')
              }
            }
            const { token } = response.data;
            localStorage.setItem('token', token);
          }
          console.log(response?.data?.data?.role)
        })

    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
      console.log('message', err.message);
    }

  }
  useEffect(() => {
    if (localStorage.getItem('userInfo') && localStorage.getItem('token')) {

      navigate(
        `/dash/home/${JSON.parse(localStorage.getItem('userInfo'))?.id}`
      );
    }
  }, []);
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
