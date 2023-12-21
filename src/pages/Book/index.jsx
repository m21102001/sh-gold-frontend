import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./book.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Footer, Navbar } from "@/layout";
import { courses } from "@/db/data";


const Book = () => {
  return (
    <div className="book-landing">
      <Navbar />
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
        className="mySwiper my-5"
      >
        {courses.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={item?.img} className="card-img-top" alt="book" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      <Footer />
    </div>
  )
}

export default Book