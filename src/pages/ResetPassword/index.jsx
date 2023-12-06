import { Navbar } from "@/layout"
import { Link } from "react-router-dom"

const ResetPassword = () => {
  return (
    <div className='login-page'>
      <Navbar />
      <div className="Container pt-5 login">
        <div className="container text-end d-flex flex-column justify-content-center m-auto body-card" >
          <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <h3 className='text-center pt-3 fs-2 fw-bold'>       اعادة تعيين كلمة المرور</h3>
            <form className='pb-5 pt-2'>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fs-5 fw-bold">  أدخل بريدك الإلكتروني*</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputOtp" className="form-label fs-5 fw-bold"> أدخل الكود المرسل الي بريدك الإلكتروني*</label>
                <input type="text" className="form-control" id="exampleInputOtp" aria-describedby="otpHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label fs-5 fw-bold">كلمه المرور*</label>
                <input type="password" className="form-control fw-bold" id="exampleInputPassword1" placeholder='كلمه المرور*' />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label fs-5 fw-bold"> تأكيد كلمه المرور*</label>
                <input type="password" className="form-control fw-bold" id="exampleInputPassword1" placeholder='تأكيد كلمه المرور*' />
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
  )
}

export default ResetPassword