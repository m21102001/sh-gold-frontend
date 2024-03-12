import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "@/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import axios from '@/api/axios'
import "./book.scss";
import styles from '../../components/GoldCard/GoldCard.module.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Book = () => {
  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState([])

  useEffect(() => {
    setLoading(true);
    axios.get(`/books`)
      .then((response) => {
        setBookData(response.data);
        setLoading(false);
        // console.log("bookData", response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  return (
    <div className="book-landing">
      <Navbar />
      <div className='m-auto d-flex justify-content-center mb-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: 'var(--gold-color)' }}> كل الكتب </h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          320: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        navigation={true}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper my-5"
      >
        <div className={styles['container home-grid']}>
          {!loading && bookData?.document?.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                to={`/book/detalis-book/${item._id}`}
                state={{ item: item }}
              >
                <div className={styles['gold-div']}>
                  <div className='title-card'>
                    <LazyLoadImage
                      src={`${import.meta.env.VITE_IMAGE_URL}${item.image}`}
                      alt={item?.title}
                      loading="lazy"
                    />
                    <div className="news-date">
                      <label className="mx-2"> {item?.createdAt?.slice(0, 10)} </label>/
                      <label className="news-date-time mx-2">{item?.createdAt?.slice(11, 16)}</label>
                    </div>
                  </div>
                  <div>
                    <h3 className='text-center fs-4 fw-bold'>{item?.title}</h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <Footer />
    </div>
  )
}

export default Book