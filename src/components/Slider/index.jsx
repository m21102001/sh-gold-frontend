import angelPhotoSh from '../../assets/img/angelPhotoSh.jpg'
import BitcoinSh from '../../assets/img/BitcoinSh.jpg'
import ContractAgreement from '../../assets/img/ContractAgreement.jpg'
import CouncilChannel from '../../assets/img/CouncilChannel .jpg'
import explainShAnd3Mans from '../../assets/img/explainShAnd3Mans.jpg'
import instractorBoard from '../../assets/img/instractorBoard.jpg'
import instructorKuwaitConference from '../../assets/img/instructorKuwaitConference.jpg'
import instructorSh from '../../assets/img/instructorSh.jpg'
import KuwaitConference from '../../assets/img/Kuwait Conference.jpg'
import papperPromiseSh from '../../assets/img/papperPromiseSh.jpg'
import personal4x6 from '../../assets/img/personal4x6.jpg'
import PersonalStudioSh from '../../assets/img/PersonalStudioSh.jpg'
import PeshawarBayda from '../../assets/img/PeshawarBayda.jpg'
import professionalPoto from '../../assets/img/professionalPoto.jpg'
import profilePhoto from '../../assets/img/profilePhoto.jpg'
import rezkCompany from '../../assets/img/rezkCompany.jpg'
import Signature from '../../assets/img/Signature.jpg'
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import "./slider.css"
const Slider = () => {
  const image = [
    {
      id: 1,
      img: angelPhotoSh,
      src: 'info',
    },
    {
      id: 2,
      img: BitcoinSh,
      src: 'info',
    },
    {
      id: 3,
      img: ContractAgreement,
      src: 'info',
    },
    {
      id: 4,
      img: CouncilChannel,
      src: 'info',
    },
    {
      id: 5,
      img: explainShAnd3Mans,
      src: 'info',
    },
    {
      id: 6,
      img: instractorBoard,
      src: 'info',
    },
    {
      id: 7,
      img: instructorKuwaitConference,
      src: 'info',
    },
    {
      id: 8,
      img: instructorSh,
      src: 'info',
    },
    {
      id: 9,
      img: KuwaitConference,
      src: 'info',
    },
    {
      id: 10,
      img: papperPromiseSh,
      src: 'info',
    },
    {
      id: 11,
      img: personal4x6,
      src: 'info',
    },
    {
      id: 12,
      img: PersonalStudioSh,
      src: 'info',
    },
    {
      id: 13,
      img: PeshawarBayda,
      src: 'info',
    },
    {
      id: 13,
      img: professionalPoto,
      src: 'info',
    },
    {
      id: 14,
      img: profilePhoto,
      src: 'info',
    },
    {
      id: 15,
      img: rezkCompany,
      src: 'info',
    },
    {
      id: 16,
      img: Signature,
      src: 'info',
    },
  ]
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {image?.map((item, index) => (
        <SwiperSlide key={index}><img src={item?.img} alt="" /> </SwiperSlide>
      ))}
    </Swiper>
  );
  // return (
  //   <Carousel
  //     responsive={responsive}
  //     swipeable={true}
  //     draggable={true}
  //     showDots={false}
  //     autoPlaySpeed={3000}
  //     autoPlay={true}
  //     customTransition="all .5"
  //     transitionDuration={500}
  //     dotListClass="custom-dot-list-style"
  //     itemClass="carousel-item-padding-40-px"
  //     containerClass="carousel-container"
  //     className='m-0'
  //   >
  //     {image?.map((item, index) => (
  //       <div key={index} className="m-0 bg-dark">
  //         <LazyLoadImage  className="image" src={item?.img} alt="" loading="lazy"/>
  //       </div>
  //     ))}
  //   </Carousel>
  // )
}

export default Slider