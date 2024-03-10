import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Footer, Navbar } from '@/layout'
import './detailsGoldNewsClub.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import axios from '@/api/axios'
import { MdOutlineArrowBack } from 'react-icons/md'
const DetailsGoldNewsClub = () => {
  const item = useLocation()?.state?.item
  const [loading, setLoading] = useState(false)
  const [report, setReport] = useState([])

  useEffect(() => {
    setLoading(true)
    axios.get(
      `${import.meta.env.VITE_GOLD_NEWS}news`,
      {
        withCredentials: false
      }
    )
      .then((response) => {
        setReport(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      });
  }, [])


  return (
    <div style={{ background: 'var(--darkblue-color)' }}>
      <Navbar />
      <div className="">
        <Link to={'/club'} className='mb-3 d-flex flex-row-reverse'>
          <button type="button" className="fw-bold text-light bacground-color-darkblue fs-5 mt-3 ms-3 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
      </div>
      <div className='container'>
        <div className=' p-3 mb-5 '>
          <div className="row">
            <div className="col-lg-5 col-sm-12 shadow p-3 mb-5 bg-body-tertiary rounded">
              <h2 className="fw-bold text-center text-uppercase mb-4" style={{ color: 'var(--main-color)' }}> أخبار ذات صلة</h2>
              {!loading && report?.result?.homeNewsModel.map((item, index) => (
                <Link
                  key={index}
                  to={`/club/details-news/${item?.id}`}
                  state={{ item }}
                  className="card mb-3"
                >
                  <div className="row g-0 container">
                    <div className="col-md-4 container m-auto">
                      <img
                        src={`https://stgaccountdals.blob.core.windows.net/prdcont/${item?.imageUrl?.url}`}
                        alt="Trendy Pants and Shoes"
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-end">
                        <h5 className="card-title" style={{ color: 'var(--main-color)', fontWeight: "700" }}>{item?.titleAr}</h5>

                        <p className="card-text">
                          التاريخ : <span>{item?.createdOn?.split("T", 1)}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="col-lg-1 col-sm-12"></div>
            <div className="col-lg-6 col-sm-12  p-3 mb-5  rounded">
              <section className=''>
                <div className="card rounded">
                  <div className="bg-image hover-overlay ripple rounded" >
                    <div className='details-news position-relative'>
                      <LazyLoadImage src={`https://stgaccountdals.blob.core.windows.net/prdcont/${item?.imageUrl?.url}`} className="w-100" />
                      <div className="news-date">
                        <label className="news-date-time mx-2"> {item?.createdOn?.slice(11, 16)}</label>
                        /
                        <label className="mx-2"> {item?.createdOn?.split('T', 1)}  </label>
                      </div>
                    </div>
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                    </a>
                  </div>
                  <div className="card-body text-end">
                    <h4 className="card-title fw-bold" style={{ color: 'var(--main-color)' }}>{item?.titleAr}</h4>
                    <div>
                      <p className=' lh-lg fw-bold'>
                        مواصلاً خسائر الجلسة السابقة، مع ارتفاع عوائد الدولار وسندات الخزانة بفعل بيانات تجارة التجزئة الأمريكية الأقوى من المتوقع والتصريحات المتشددة من محافظي البنوك المركزية. ارتفعت مبيعات التجزئة الأمريكية بنسبة 0.6% على أساس شهري في ديسمبر 2023، متجاوزة توقعات النمو بنسبة 0.4% ومضرة بفكرة التيسير النقدي في وقت سابق. في السابق، قال محافظ الاحتياطي الفيدرالي كريستوفر والر إنه لا يرى سببًا لخفض أسعار الفائدة بالسرعة التي كان عليها في الماضي، مما يعكس اللهجة المتشددة لمسؤولي البنك المركزي الأوروبي ويؤدي إلى إعادة معايرة توقعات خفض أسعار الفائدة. ترى الأسواق الآن فرصة أقل من 60% لخفض سعر الفائدة الفيدرالي في مارس، بانخفاض ملحوظ من 76.9% في الجلسة السابقة، وفقًا لأداة FedWatch التابعة لمجموعة CME. يتطلع المستثمرون الآن إلى المزيد من تعليقات بنك الاحتياطي الفيدرالي هذا الأسبوع للحصول على إرشادات.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DetailsGoldNewsClub