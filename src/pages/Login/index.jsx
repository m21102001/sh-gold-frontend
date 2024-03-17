import { useState } from 'react';
import { Navbar } from '@/layout';
import { Link, useNavigate } from 'react-router-dom';
import axios from '@/api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.scss';
import { useAuth } from '@/context/Auth';

const Login = () => {
  const { user, setuser } = useAuth();
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  // const notify = () =>
  //   toast.error('من فضلك تأكد من رقم الهاتف او الرقم السري', {
  //     position: 'top-right',
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: 'colored',
  //   });

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const { data } = await axios.post(
        '/auth/login',
        {
          phone: phone,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      toast.success('تم تسجيل الدخول بنجاح')
      setuser(data.data);
      // console.log(data);
      setIsPending(false);

    } catch (err) {
      setIsPending(false);
      toast.error('من فضلك تأكد من رقم الهاتف او الرقم السري')
      // < ToastContainer />
      console.log('response', err);
    } finally {
      if (
        user?.role == 'admin' ||
        user?.role == 'godAdmin' ||
        user?.role == 'manager'
      ) {
        navigate('/dash/dashboard');
      }
    }
  };
  return (
    <>
      {isPending && <div className="loading"></div>}
      <div className="login-page">
        <Navbar />
        <div className="Container pt-5 login">
          <div className="container text-end d-flex flex-column justify-content-center m-auto body-card">
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
              <h3 className="text-center pt-3 fs-2 fw-bold">
                مرحبًا بعودتك, لقد اشتقنا اليك
              </h3>
              <form className="pb-5 pt-2" onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPhone1"
                    className="form-label fs-4 fw-bold"
                  >
                    رقم الهاتف*
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="exampleInputPhone1"
                    aria-describedby="PhoneHelp"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <div id="phoneHelp" className="form-text fw-bold">
                    لن نشارك رقم هاتفك أبدًا مع أي شخص آخر.{' '}
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label fs-4 fw-bold"
                  >
                    كلمه المرور*
                  </label>
                  <input
                    required
                    type="password"
                    className="form-control fw-bold"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Link to="/auth/resetPasswordOtp">
                  <p
                    id="create-account"
                    className="my-15 fs-4 fw-bold text-sabaek-gold"
                  >
                    {' '}
                    نسيت كلمه المرور؟
                  </p>
                </Link>
                <div className="d-grid gap-2">
                  <ToastContainer />
                  <button >تسجيل الدخول</button>
                </div>
              </form>
              <p id="create-account" className="my-15 text-center fs-6 fw-bold">
                {' '}
                ليس لديك حساب ؟
                <Link
                  to={'/auth/sign-up'}
                  className="text-sabaek-gold fs-6 fw-bold"
                  style={{ cursor: 'pointer' }}
                >
                  {' '}
                  قم بإنشاء حساب الآن
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
