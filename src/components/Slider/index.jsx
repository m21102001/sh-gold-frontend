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
import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./slider.css"
const Slider = () => {
  const image = [
    {
      id: 1,
      img: angelPhotoSh
    },
    {
      id: 2,
      img: BitcoinSh
    },
    {
      id: 3,
      img: ContractAgreement
    },
    {
      id: 4,
      img: CouncilChannel
    },
    {
      id: 5,
      img: explainShAnd3Mans
    },
    {
      id: 6,
      img: instractorBoard
    },
    {
      id: 7,
      img: instructorKuwaitConference
    },
    {
      id: 8,
      img: instructorSh
    },
    {
      id: 9,
      img: KuwaitConference
    },
    {
      id: 10,
      img: papperPromiseSh
    },
    {
      id: 11,
      img: personal4x6
    },
    {
      id: 12,
      img: PersonalStudioSh
    },
    {
      id: 13,
      img: PeshawarBayda
    },
    {
      id: 13,
      img: professionalPoto
    },
    {
      id: 14,
      img: profilePhoto
    },
    {
      id: 15,
      img: rezkCompany
    },
    {
      id: 16,
      img: Signature
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
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      autoPlaySpeed={3000}
      autoPlay={true}
      customTransition="all .5"
      transitionDuration={500}
      dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {image?.map((item, index) => (
        <div key={index} className="m-0 bg-dark">
          <LazyLoadImage  className="image" src={item?.img} alt="" srcSet="kenz book" loading="lazy" PlaceholderSrc={item?.image}/>
        </div>
      ))}
    </Carousel>
  )
}

export default Slider