import { useLocation } from "react-router-dom"
import { SidebarDashboard } from "@/layout"
import { useEffect, useState } from "react"
import axios from "@/api/axios"

const DetailsIdeaRequestInvestment = () => {
  const item = useLocation()?.state?.item
  const [loading, setLoading] = useState(false);
  const [ideaData, setIdeaData] = useState([])

  let fetchidea = {
    method: 'get',
    url: `invest/${item?.investment}`,
  };
  useEffect(() => {
    setLoading(true);
    axios
      .request(fetchidea)
      .then((response) => {
        setIdeaData(response.data);
        setLoading(false);
        console.log("ideaData", response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>Deatils Idea Active</h2>
        </div>
        {/* <Link to={`/dash/details-requests-investment/${item?._id}`} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link> */}
        <section style={{ backgroundColor: "#eee" }}>
          {!loading &&
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card mb-4">
                    <img src={`${import.meta.env.VITE_FILE_URL}${ideaData?.document?.images}`}
                     className="card-img-top" 
                     alt={ideaData?.document?.title} />
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0"> اسم صاحب الفكره</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{ideaData?.document?.name}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">   البريد الالكترونى</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{ideaData?.document?.email}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">    رقم الهاتف</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{ideaData?.document?.phone}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">عنوان الفكره</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{ideaData?.document?.title}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">وصف الفكره</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{ideaData?.document?.description}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0"> السعر المقترح </p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{ideaData?.document?.price}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0"> الربح  </p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{ideaData?.document?.profit}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0"> ملف شرح الفكره  </p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            <a href={`${import.meta.env.VITE_FILE_URL}${ideaData?.document?.pdf}`}>
                              <button type="button">الفكره</button>
                            </a>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">  تاريخ الاضافه</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{ideaData?.document?.createdAt?.split('T', '1')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </section>
      </div>
    </div>
  )
}

export default DetailsIdeaRequestInvestment



// "images": [
//   "1703874090659-Cambridge-logo-_pages-to-jpg-0001.jpg"
// ],