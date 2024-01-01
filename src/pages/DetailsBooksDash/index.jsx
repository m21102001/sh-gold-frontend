import { Link, useLocation } from 'react-router-dom'
import { SidebarDashboard } from '@/layout'
import { MdOutlineArrowBack } from "react-icons/md";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DetailsBooksDash = () => {
  const item = useLocation()?.state?.item
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>Deatils Book</h2>
        </div>
        <Link to={'/dash/books'} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        {/* "image": "image-1702293662396.PNG", */}
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <LazyLoadImage
                    src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                    alt={item?.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الاسم</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.title}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">السعر</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.price} kwd</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الوصف الكامل</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.description}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> محتوى الكتاب (PDF)</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          <Link
                          >
                            <button type="button" className="btn btn-success">عرض الكتاب</button>
                          </Link>
                          {/* {item?.pdf} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DetailsBooksDash