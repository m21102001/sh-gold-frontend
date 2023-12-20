import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { courses } from "@/db/data";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <>
      <div className='m-auto d-flex justify-content-center mt-5 pt-5'>
        <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}> قسم الكتب</h2>
        <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper book-component my-5"
      >
        {courses.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card text-end">
              <img src={item?.img} className="card-img-top" alt="book" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <Link>
                <button  className="btn btn-primary">Go somewhere</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}

export default Book