import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Footer, Navbar } from '@/layout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from "@/api/axios";
// import required modules
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

import './projectIdea.scss'
import { MdOutlineArrowBack } from 'react-icons/md';
const ProjectIdea = () => {
  const navigate = useNavigate()
  const item = useLocation()?.state?.item;
  const [isPending, setIsPending] = useState(false)
  const [name, setName] = useState('');
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

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
            title: 'title',
            email: email,
            description: description,
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
          setName('')
          setAddress('')
          setDescription('')
          setEmail('')
          setPhone('')
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
      <Link to={'/investment'} className='mb-3 d-flex flex-row-reverse'>
        <button type="button" className="fw-bold text-light bacground-color-darkblue fs-5 mt-3 ms-3 back-details-button"
        ><MdOutlineArrowBack size={30} /></button>
      </Link>
      <div className="text-center shadow-lg p-3 mx-3 mb-5 rounded" >

        <div className="row align-items-center mt-5">
          <h2 className='text-center text-light fs-1 fw-bold'>{item?.title}</h2>
          <div className="col-md-10 col-sm-12 m-auto full-filed">
            {item?.images.map((item, index) => (
              <>
                <LazyLoadImage
                  key={index}
                  className='img-bb my-5 imgbb-consulation'
                  src={`${import.meta.env.VITE_IMAGE_URL}${item}`}
                  alt={item?.title}
                  loading="lazy"
                  style={{ height: '60vh', borderRadius: '10px', margin: "auto", border: '3px solid white' }}
                />
              </>
            ))}
          </div>
          <div className="col-md-12 col-sm-12 m-0 p-0">
            <section className='text-light'>
              <div className="container pb-5">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card mb-4">
                      <div className="card-body" >
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="fs-4 mb-0 fw-bold">نظرة عامة على الفكرة  </p>
                          </div>
                          <div className="col-sm-9">
                            <p className="fs-4 m-auto mb-0" style={{ width: '306px', height: '420px', overflow: "auto" }}>
                              <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
                                <Viewer
                                  fileUrl={`${import.meta.env.VITE_FILE_URL}${item?.pdf}`}
                                />
                              </Worker>
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="fs-4 mb-0 fw-bold">لتفاصيل اكثر</p>
                          </div>
                          <div className="col-sm-9">
                            <Link
                              to={`/view-more-details/${item?._id}`}
                              state={{ item }}
                            >
                              <button className="fs-4 fw-bold mb-0">قراءة التفاصيل</button>
                            </Link>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="fs-4 mb-0 fw-bold">تاريخ الاضافة</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="fs-4 fw-bold mb-0">{item?.createdAt?.split('T', '1')}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="fs-4 mb-0 fw-bold">وصف فكرة المشروع </p>
                          </div>
                          <div className="col-sm-9 overflow-auto" style={{ height: '5rem' }}>
                            <p className="fs-4 fw-bold mb-0">{item?.description}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="fs-4 mb-0 fw-bold">المبلغ المطلوب للاستثمار</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="fs-4 fw-bold mb-0">{item?.price} دينار كويتى</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="fs-4 mb-0 fw-bold">العائد المتوقع من الاستثمار </p>
                          </div>
                          <div className="col-sm-9 ">
                            <p className="fs-4 fw-bold mb-0">{item?.profit}%</p>
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
            <h2 className='text-center comunation fs-1 fw-bold' style={{ color: 'var(--gold-color2)', background: "var(--darkblue-color)" }}>قدم على الفكرة  </h2>
            <span></span>
          </div>
          {/* ///////////////////////// contact us form ////////////////////////  */}
          <div className='card-form form-control container rounded-4 text-end text-light my-4'>
            <form className="row g-3" onSubmit={handelSubmit} >
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
            </form>
          </div>
        </div >
      </div >
      <Footer />
    </div >
  )
}

export default ProjectIdea