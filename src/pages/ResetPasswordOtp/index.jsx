import { Navbar } from "@/layout"
import { Link } from "react-router-dom"

const ResetPasswordOtp = () => {

  return (
    <div className='login-page'>
      <Navbar />
      <div className="Container pt-5 login">
        <div className="container text-end d-flex flex-column justify-content-center m-auto body-card" >
          <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <h3 className='text-center pt-3 fs-2 fw-bold'> سوف يتم ارسال كود الي بريدك الالكتروني لتغيير كلمة المرور الخاصة بك</h3>
            <form className='pb-5 pt-2'>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fs-5 fw-bold">  أدخل بريدك الإلكتروني*</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="d-grid gap-2">
                <button >ارسال كود</button>
              </div>
              <Link to="/auth/resetpassword">
                <div className="d-grid gap-2 pt-3">
                  <button >اذهب لتعين كلمه مرور جديده</button>
                </div>
              </Link>
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

export default ResetPasswordOtp