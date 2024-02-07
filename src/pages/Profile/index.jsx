import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/context/Auth";
import { Footer, Navbar } from "@/layout"

const Profile = () => {
  const navigate = useNavigate()
  const { user } = useAuth();
  return (
    <div style={{ background: 'var(--darkblue-color' }}>
      <Navbar />
      <section style={{ backgroundColor: "var(--darkblue-color)" }} dir="ltr">
        <div className="container py-5 text-start">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    className="rounded-circle img-fluid" style={{ width: "150px" }} />
                  <h5 className="my-3">{user?.name ? user?.name : 'الاسم غير موجود'} </h5>
                  <p className="text-muted mb-4">الكويت</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary" onClick={() => navigate('/auth/update-password')}>تغير الرقم السري</button>
                    <button type="button" className="btn btn-outline-primary ms-1" onClick={() => navigate('/auth/edit-profile')} >تعديل البيانات</button>
                  </div>
                </div>
              </div>
            </div >
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">الاسم بالكامل</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.name ? user?.name : 'الاسم غير موجود'}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">البريد الالكترونى</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.email ? user?.email : 'البريد الالكترونى غير موجود'}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">رقم الهاتف</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.phone ? user?.phone : 'رقم الهاتف غير موجود'}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">العضويه </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.plan ? user?.plan == "basic" ? "لا يوجد عضويه " : user.plan : 'قم بتسجيل الدخول'}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">محفظتى</p>
                    </div>
                    <div className="col-sm-9">
                      <Link to={'/auth/my-wallet'} className="mb-0 text-primary fw-bold">محفظتى</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div >
        </div>
      </section >
      <Footer />
    </div >
  )
}

export default Profile