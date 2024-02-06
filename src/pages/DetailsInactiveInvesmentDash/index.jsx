import { Link, useLocation } from "react-router-dom"
import { SidebarDashboard } from "@/layout"
import { MdOutlineArrowBack } from "react-icons/md"
import { LazyLoadImage } from "react-lazy-load-image-component"

const DetailsInactiveInvesmentDash = () => {
  const item = useLocation()?.state?.item
  // console.log(item)
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تفاصيل الفكرة</h2>
        </div>
        <Link to={'/dash/investment'} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <LazyLoadImage
                    src={`${import.meta.env.VITE_IMAGE_URL}${item?.images?.[0]}`}
                    className="card-img-top"
                    alt={item?.title}
                  />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">عنوان الفكره</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.title}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">  محتوى الفكره  (PDF)</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          <Link
                            to={`/view-more-details/${item?._id}`}
                            state={{ item }}
                          >
                            <button type="button" className="btn btn-success">عرض الفكره</button>
                          </Link>
                          {/* {item?.pdf} */}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">وصف الفكره</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.description}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> اسم صاحب الفكره</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">   البريد الالكترونى</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> رقم الهاتف</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.phone}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">  تاريخ الاضافة</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.createdAt?.split('T', 1)}</p>
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

export default DetailsInactiveInvesmentDash
