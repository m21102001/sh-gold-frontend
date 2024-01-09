import { Footer, Navbar } from "@/layout"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Notification = () => {
  return (
    <div style={{ background: 'var(--darkblue-color' }}>
      <Navbar />
      <div className='m-auto d-flex justify-content-center my-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: 'var(--bs-yellow)' }}> الاشعارات  </h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className="container text-center pt-5">
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
      </div>
      <Footer />
    </div>
  )
}

export default Notification