import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "@/context/Auth"
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { MdOutlineArrowBack } from "react-icons/md"

const DetailsConsultationsTicketDash = () => {
  const item = useLocation()?.state?.item
  const [loading, setLoading] = useState(false)
  const [consultation, setConsultation] = useState([])
  const { user } = useAuth();
  useEffect(() => {
    setLoading(true);
    if (user.role == 'manager') {
      axios.get(`/consultation/requests/${item?._id}`)
        .then((response) => {
          setLoading(false)
          setConsultation(response.data)
        })
        .catch((error) => {
          setLoading(false);
          // console.log(error);
        });
      }
  }, [])

  console.log('consultation',consultation.document);
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>  تفاصيل حجز التذكرة</h2>
        </div>
        <Link to={'/dash/consultations-ticket'} className='mb-3 d-flex flex-row-reverse'>
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
                        <p className="mb-0"> اسم المشتري</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation.document?.user?.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">البريد الالكترونى </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation.document?.user?.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">نوع الاستشارة  </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation.document?.type}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> نوع كارت الدفع </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation.document?.paymentMethod}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> تاريخ الدفع   </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation.document?.paidOn?.slice(11,16)} / {consultation.document?.paidOn?.slice(0,10)}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> المبلع المدفوع</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation.document?.amount} دينار كويتى</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> اسم التذكرة </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation.document?.ticket?.title}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">تاريخ التذكرة </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation.document?.ticket?.day?.slice(0,10)}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> موعد بداية التذكرة  </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation.document?.ticket?.startDate}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> مدة التذكرة  </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{consultation.document?.ticket?.duration} دقيقة</p>
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

export default DetailsConsultationsTicketDash