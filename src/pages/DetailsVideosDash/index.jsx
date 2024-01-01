import { SidebarDashboard } from '@/layout';
import { MdOutlineArrowBack } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy'

const DetailsVideosDash = () => {
  const item = useLocation()?.state?.item
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>Deatils Video playlist</h2>
        </div>
        <Link to={`/dash/details-playlist/${item?._id}`} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <ReactPlayer
                    url={item?.url}
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1 }
                      },
                    }}
                    width='100%'
                    height='70vh'
                  // style={{
                  //   position: "absolute",
                  //   top: "0",
                  //   left: "0",
                  // }}
                  />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">عنوان الفيديو</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.title}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">وصف الفيديو</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.description}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">تاريخ الاضافه </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.createdAt.split('T',1)}</p>
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

export default DetailsVideosDash