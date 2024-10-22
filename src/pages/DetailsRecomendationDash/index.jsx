import { SidebarDashboard } from '@/layout'
import { useEffect, useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from "@/context/Auth";
import axios from "@/api/axios";
const DetailsRecomendationDash = () => {
  const item = useLocation()?.state?.item
  const [loading, setLoading] = useState(false);
  const [allUser, setAlluser] = useState([])
  const { user } = useAuth();
  useEffect(() => {
    setLoading(true);
    if (user.role == 'manager') {
      axios.get(`recommend/${item?._id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          setLoading(false);
          setAlluser(response.data);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="dashboard d-flex flex-row">
      {loading && <div className='loadimg'> </div>}
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تفاصيل المشترك </h2>
        </div>
        <Link to={'/dash/recomendation'} className='mb-3 d-flex flex-row-reverse'>
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
                        <p className="text-muted mb-0">{allUser?.document?.user?.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">البريدالالكترونى</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{allUser?.document?.user?.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">رقم الهاتف</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{allUser?.document?.user?.phone}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">العضوية</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{allUser?.document?.plan}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">تمن الباقة</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{allUser?.document?.amount}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">وقت الدفع</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{allUser?.document?.paidOn?.split('T', 1)}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">تاريخ بداية الاشتراك</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{allUser?.document?.startDate?.split('T', 1)}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">تاريخ نهاية الاشتراك</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{allUser?.document?.endDate?.split('T', 1)}</p>
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

export default DetailsRecomendationDash