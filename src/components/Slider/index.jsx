import sliderbook from "../../assets/img/kenzbook.png";
import slider1 from "../../assets/img/slider1.png";
import kinz from "../../assets/img/kinz.jpeg";
import creative from "../../assets/img/creative.jpeg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./slider.css"
const Slider = () => {
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
      autoPlaySpeed={5000}
      autoPlay={true}
      customTransition="all .5"
      transitionDuration={500}
      dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      <div className="m-0 bg-dark"><img className="image" src={kinz} alt="" srcset="" /></div>
      <div className="m-0 bg-dark"><img className="image" src={slider1} alt="" srcset="" /></div>
      <div className="m-0 bg-dark"><img className="image" src={sliderbook} alt="" srcset="" /></div>
      <div className="m-0 bg-dark"><img className="image" src={creative} alt="" srcset="" /></div>
    </Carousel>
  )
}

export default Slider