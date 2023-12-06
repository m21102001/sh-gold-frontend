import { Link } from 'react-router-dom'
import './signUp.scss'
import { Navbar } from '@/layout'

const Signup = () => {
  return (
    <div className='login-page'>
      <Navbar />
      <div className="Container pt-5 login">
        <div className="container text-end d-flex flex-column justify-content-center m-auto body-card" >
          <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <h3 className='text-center pt-3 fs-2 fw-bold'>اهلا بيك ف مجتمعنا الذهبي</h3>
            <form className='pb-5 pt-2'>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label fs-5 fw-bold">الاسم بالكامل*</label>
                <input type="text" className="form-control" id="exampleInputName" placeholder='الاسم بالكامل*' aria-describedby="nameHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fs-5 fw-bold">البريد الالكترونى*</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='البريد الالكترونى*' aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text fw-bold">لن نشارك بريدك الإلكتروني أبدًا مع أي شخص آخر. </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label fs-5 fw-bold">رقم الجوال*</label>
                <input type="number" className="form-control" id="exampleInputPhone" placeholder='رقم الجوال*' aria-describedby="phoneHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label fs-5 fw-bold">كلمه المرور*</label>
                <input type="password" className="form-control fw-bold" id="exampleInputPassword1" placeholder='كلمه المرور*' />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label fs-5 fw-bold"> تأكيد كلمه المرور*</label>
                <input type="password" className="form-control fw-bold" id="exampleInputPassword1" placeholder='تأكيد كلمه المرور*' />
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
  )
}

export default Signup
