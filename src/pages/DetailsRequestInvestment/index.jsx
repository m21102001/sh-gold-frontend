import { SidebarDashboard } from "@/layout"
import { MdOutlineArrowBack } from "react-icons/md"
import { Link, useLocation } from "react-router-dom"

const DetailsRequestInvestment = () => {
  const item = useLocation()?.state?.item
  // const investmentId = item?.investment
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>Deatils Requests Investment</h2>
        </div>
        <div className="d-flex justify-content-between">
          <Link
            to={`/dash/details-idea-requests-investment/${item?.investment}`}
            state={{ item: item }}
            className='mb-3 d-flex flex-row'
          >
            <button type="butto" className="fw-bold fs-5 back-details-button"
            >الفكره</button>
          </Link>

          <Link to={'/dash/requests-investment'} className='mb-3 d-flex flex-row-reverse'>
            <button type="butto" className="fw-bold fs-5 back-details-button"
            ><MdOutlineArrowBack size={30} /></button>
          </Link>
        </div>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> اسم المستثمر</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">عنوان المستثمر</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.address}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">رقم الهاتف </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.phone}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> البريد الالكترونى</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> تاريخ التقديم   </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.createdAt?.split('T', '1')}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">  وصف الفكره</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.description}</p>
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

export default DetailsRequestInvestment