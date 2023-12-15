import { SidebarDashboard } from '@/layout';
import { useLocation } from 'react-router-dom';

const DeatilsContactFormDash = () => {
  const item = useLocation()?.state?.item
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
      <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>Deatils Contact Form</h2>
        </div>
        {/* <div className="crad">
          <div className="card-body">
            <p>{item?.name}</p>
            <p>{item?.email}</p>
            <p>{item?.address}</p>
            <p>{item?.phone}</p>
            <p>{item?.company}</p>
            <p>{item?.message}</p>
            <p>{item?.createdAt}</p>
          </div>
        </div> */}
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
                        <p className="mb-0">العنوان</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.address}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">اسم الشركه</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.company}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">محتوى الرساله</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.message}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الوقت</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.createdAt}</p>
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

export default DeatilsContactFormDash