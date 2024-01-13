import { Footer, Navbar } from "@/layout"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link, useNavigate } from "react-router-dom"

const Profile = () => {
  const navigate = useNavigate()
  return (
    <div style={{ background: 'var(--darkblue-color' }}>
      <Navbar />
      {/* <div className='m-auto d-flex justify-content-center my-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: 'var(--bs-yellow)' }}></h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div> */}
      {/* <div className="container text-center pt-5">
        <div
          className="row row-striped shadow-lg p-3 mb-5 bg-body rounded">
          <div className="col-2 text-right">
            <LazyLoadImage
              src={`${import.meta.env.VITE_IMAGE_URL}1704405089363-Cambridge-logo-_pages-to-jpg-0001.jpg`}
              alt={`nklmlkl`}
              style={{
                width: '100px',
                height: '100px'
              }}
            />
          </div>
          <div className="col-10 fs-4 text-end" >
            <h3 className="text-uppercase"><strong>تم شراء سلسله دهب عيار 21 بنجاح</strong></h3>
            <ul className="list-inline">
              <li className="list-inline-item mx-3"> 21-02-2024</li>
            </ul>
          </div>
        </div>
      </div> */}

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
                  <h5 className="my-3">محمد طارق</h5>
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
                      <p className="text-muted mb-0"> محمد طارق</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">البريد الالكترونى</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">رقم الهاتف</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">محفظتى</p>
                    </div>
                    <div className="col-sm-9">
                      <Link to={'/auth/my-wallet'} className="text-muted mb-0">محفظتى</Link>
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