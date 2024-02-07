import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "@/context/Auth"
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { MdOutlineArrowBack } from "react-icons/md"

const DetailsGoldBarsSell = () => {
  const item = useLocation()?.state?.item
  const [loading, setLoading] = useState(false)
  const [consultation, setConsultation] = useState([])
  const { user } = useAuth();
  useEffect(() => {
    setLoading(true);
    if (user.role == 'manager') {
      axios.get(`gold-bars/sell/${item?._id}`)
        .then((response) => {
          setLoading(false)
          setConsultation(response.data)
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  }, [])

  const handelDelete = async (id) => {
    setLoading(true);
    await axios
      .delete(`gold-bars/sell/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        axios.get('gold-bars/sell/')
          .then((response) => {
            setConsultation(response.data);
            setLoading(false);
            console.log(response.data);
          });
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handelSell = async (id) => {
    setLoading(true);
    await axios
      .post(`/users/update-wallet/${user?._id}/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        axios.get('gold-bars/sell/')
          .then((response) => {
            setConsultation(response.data);
            setLoading(false);
            console.log(response.data);
          });
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تفاصيل طلب بيع الذهب</h2>
        </div>
        <Link to={'/dash/gold-bars/sell'} className='mb-3 d-flex flex-row-reverse'>
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
                      <LazyLoadImage
                        src={`${import.meta.env.VITE_IMAGE_URL}${consultation?.document?.goldbar?.image}`}
                        alt={consultation?.document?.goldbar?.title}
                        loading="lazy"
                        style={{ width: 'web' }}
                      />
                    </div>
                    <div className="row pt-5">
                      <div className="col-sm-3">
                        <p className="mb-0"> اسم القطعة الذهبيه</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation?.document?.goldbar?.title}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> اسم المشتري</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation?.document?.user?.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> البريد الالكترونى</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation?.document?.user?.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> رقم الهاتف </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation?.document?.user?.phone}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">  المبلغ</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation?.document?.goldbar?.price}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">  تأكيد الشراء</p>
                      </div>
                      <div className="col-sm-9">
                        <button type="button" onClick={() => handelSell(item._id)} className="btn btn-outline-success">تاكيد الشراء</button>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الغاء الطلب</p>
                      </div>
                      <div className="col-sm-9">
                        <button onClick={() => handelDelete(item._id)} className="btn btn-outline-danger mx-2 px-4">حذف</button>
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

export default DetailsGoldBarsSell