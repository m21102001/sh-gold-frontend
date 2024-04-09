import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/context/Auth";
import { Footer, Navbar } from "@/layout"
import { RxAvatar } from "react-icons/rx";

const Profile = () => {
  const navigate = useNavigate()
  const { user } = useAuth(); 
  console.log(user);
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
                  <RxAvatar size={128} round={"true"} color="#000" />
                  <h5 className="my-3">{user?.name ? user?.name : 'الاسم غير موجود'} </h5>
                  {/* <p className="text-muted mb-4">الكويت</p> */}
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
                      <p className="mb-0">عضوية توصيات التداول</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.recommendationPlan}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">العضوية </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.plan ? user?.plan == "basic" ? "لا يوجد عضوية " : user.plan : 'قم بتسجيل الدخول'}</p>
                    </div>
                  </div>
                  <hr />
                  {user?.plan != "basic" ? (
                    <>
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">الاستشارات الحضورية المتاحة مجانا </p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{user?.freeOflineConsultations}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">الاستشارات الهاتفية المتاحة مجانا  </p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{user?.freeOnlineConsultations}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">تاريخ بداية الاشتراك  </p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{user?.planStartDate?.slice(0,10)}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">تاريخ نهاية الاشتراك </p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{user?.planEndDate?.slice(0,10)}</p>
                        </div>
                      </div>
                      <hr />
                    </>
                  ) : null}
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