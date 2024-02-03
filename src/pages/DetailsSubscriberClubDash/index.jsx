import { SidebarDashboard } from '@/layout';
import { MdOutlineArrowBack } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom'

const DetailsSubscriberClubDash = () => {
  const item = useLocation()?.state?.item
  console.log(item);
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard /> 
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>  Details Subscriber Club Dash</h2>
        </div>
        <Link to={'/dash/subscriber-club'} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الاسم بالكامل</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">البريدالالكترونى</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">رقم الهاتف</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.phone}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">عدد الاستشارات المحجوزه (online)</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.freeOnlineConsultations}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> عدد الاستشارات المحجوزه (offline)</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.freeOflineConsultations}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">بدايه معاد الاشتراك</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.planStartDate?.slice(0,10)}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">نهايه معاد الاشتراك</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.planEndDate?.slice(0,10)}</p>
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

export default DetailsSubscriberClubDash