import { Link, useLocation } from 'react-router-dom';
import { Footer, Navbar } from '@/layout';
import { MdTipsAndUpdates } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectIdea = () => {
  const item = useLocation()?.state?.item;

  //     "_id": "658053b6ea5ea99339a9e08d",
  //     "name": "mohamed",
  //     "phone": "010010000",
  //     "email": "mo@gmail.com",
  //     "description": "simple desh",
  //     "cover": "Class-Diagram.PNG-1702908854254.PNG",
  //     "images": [
  //       "Class-Diagram-2.PNG-1702908854302.PNG",
  //       "code3.png-1702908854303.PNG",
  //       "R.png-1702908854302.PNG"
  //     ],
  //     "active": true,
  //     "createdAt": "2023-12-18T14:14:15.001Z",

  return (
    <div style={{ background: "var(--darkblue-color)" }}>
      <Navbar />
      <Link to='/investment-contact-us' style={{ position: 'fixed', bottom: '15px', left: "11px", zIndex: "1" }}>
        <button type="button" className="btn btn-warning fw-bold">
          <MdTipsAndUpdates size={40} />
          تواصل مع صاحب الفكره
        </button>
      </Link>
      <div className="text-center shadow-lg p-3 mx-3 mt-3 mb-5 rounded" style={{ background: "var(--main-color)" }}>
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              freeMode={true}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[FreeMode, Pagination]}
              className="mySwiper my-5"
            >
              <SwiperSlide>
                <LazyLoadImage
                  src={`https://5.imimg.com/data5/SELLER/Default/2020/12/FJ/BD/OR/33493776/trendy-fancy-gold-plated-plated-brass-chain-250x250.jpg`}
                  alt=""
                  loading="lazy"
                  style={{ width: '-webkit-fill-available', height: '80vh', borderRadius: '10px' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <LazyLoadImage
                  src={`https://5.imimg.com/data5/SELLER/Default/2020/12/FJ/BD/OR/33493776/trendy-fancy-gold-plated-plated-brass-chain-250x250.jpg`}
                  alt=""
                  loading="lazy"
                  style={{ width: '-webkit-fill-available', height: '80vh', borderRadius: '10px' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <LazyLoadImage
                  src={`https://5.imimg.com/data5/SELLER/Default/2020/12/FJ/BD/OR/33493776/trendy-fancy-gold-plated-plated-brass-chain-250x250.jpg`}
                  alt=""
                  loading="lazy"
                  style={{ width: '-webkit-fill-available', height: '80vh', borderRadius: '10px' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <LazyLoadImage
                  src={`https://5.imimg.com/data5/SELLER/Default/2020/12/FJ/BD/OR/33493776/trendy-fancy-gold-plated-plated-brass-chain-250x250.jpg`}
                  alt=""
                  loading="lazy"
                  style={{ width: '-webkit-fill-available', height: '80vh', borderRadius: '10px' }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-6 col-sm-12 m-0 p-0">
            <section style={{ backgroundColor: 'var(--darkblue-color)' }}>
              <div className="container py-5">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card mb-4">
                      <div className="card-body" style={{ color: 'var(--main-color)' }}>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0 fw-bold">العنوان  </p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted fw-bold mb-0">{item?.title}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0 fw-bold">الوصف الكامل</p>
                          </div>
                          <div className="col-sm-9 overflow-auto" style={{ height: '20rem' }}>
                            <p className="text-muted fw-bold mb-0">{item?.description}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0 fw-bold">تاريخ الاضافه</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted fw-bold mb-0">{item?.createdAt?.split('T', '1')}</p>
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
      </div>


      <div className={`d-flex`}>
        <h3>انشاء مصنع البان</h3>
        <div>{item?.name}</div>
        <div>{item?.description}</div>

      </div>
      <Footer />
    </div>
  )
}

export default ProjectIdea