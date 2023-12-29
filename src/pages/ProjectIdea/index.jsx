import { useLocation, useNavigate } from 'react-router-dom';
import { Footer, Navbar } from '@/layout';
import axios from "@/api/axios";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';

const ProjectIdea = () => {
  const item = useLocation()?.state?.item;
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [name, setName] = useState('');
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [profit, setProfit] = useState('')

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true)
    try {
      await axios
        .post(
          `/investorRequest/${item?._id}`,
          {
            name: name,
            address: address,
            phone: phone,
            title:'title',
            email: email,
            description: description,
            price: price,
            profit: profit
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log('created success', response.data);
          alert("Your request has been sent successfully")
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
      console.log('message', err.message);
    }
  }
  return (
    <div style={{ background: "var(--darkblue-color)" }}>
      <Navbar />
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
      <div className='contactUs'>
        <div className='Container'>
          <div className='m-auto d-flex justify-content-center my-5'>
            <span></span>
            <h2 className='text-center comunation fs-1 fw-bold' style={{ color: 'var(--gold-color2)', background: "var(--darkblue-color)" }}>قدم على الفكره  </h2>
            <span></span>
          </div>
          {/* ///////////////////////// contact us form ////////////////////////  */}
          <div className='card-form form-control container rounded-4 text-end text-light my-4'>
            <form className="row g-3" onSubmit={handelSubmit}>
              <div className="col-md-6 col-sm-12">
                <label
                  htmlFor="inputName"
                  className="form-label"
                >الاسم بالكامل</label>
                <input
                  name="inputName"
                  type="text"
                  className="form-control"
                  id="inputName"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='الاسم بالكامل*'
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label
                  htmlFor="inputEmail"
                  className="form-label"
                >البريد الالكترونى</label>
                <input
                  name="inputEmail"
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="البريد الالكترونى*"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label
                  htmlFor="inputPhone"
                  className="form-label"
                >الهاتف</label>
                <input
                  name="inputPhone"
                  type="number"
                  className="form-control"
                  id="inputPhone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='الهاتف*'
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label
                  htmlFor="inputAddress"
                  className="form-label"
                > العنوان </label>
                <input
                  name="inputAddress"
                  type="text"
                  className="form-control"
                  id="inputِAddress"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="العنوان *"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label
                  htmlFor="inputPrice"
                  className="form-label"
                > السعر بالدينار الكويتى</label>
                <input
                  name="inputPrice"
                  type="number"
                  className="form-control"
                  id="inputِPrice"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder=" السعر   *"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label
                  htmlFor="inputProfit"
                  className="form-label"
                >  النسبه  </label>
                <input
                  name="inputProfit"
                  type="number"
                  className="form-control"
                  id="inputِProfit"
                  required
                  value={profit}
                  onChange={(e) => setProfit(e.target.value)}
                  placeholder="مثال (10%) *"
                />
              </div>
              <div className="col-12">
                <label
                  htmlFor="inputAddress2"
                  className="form-label"
                >اكتب شرح مختصر للتنفيذ</label>
                <textarea
                  type="text"
                  name='description'
                  className="form-control"
                  id="description"
                  placeholder="اكتب شرح مختصر للتنفيذ*"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  rows="3"
                  required
                />
              </div>
              {!isPending && (
                <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
                  تقديم
                </button>
              )}
              {isPending && (
                <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4"
                  disabled
                >
                  جاري التقديم ...
                </button>
              )}
              <button
                onClick={() => navigate('/investment')}
                className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
                الغاء
              </button>
            </form>
          </div>
        </div >
      </div >
      <Footer />
    </div>
  )
}

export default ProjectIdea