import { LazyLoadImage } from 'react-lazy-load-image-component';
import './header.scss';
import { image } from '@/db/data';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
const Header = () => {
  return (
    <div className="header">
      <MDBCarousel showControls >
        {image?.map((item, index) => (
          <MDBCarouselItem key={index} itemId={index}>
            <LazyLoadImage
              src={item?.img}
              alt={item?.src}
              className='d-block w-100'
            />
          </MDBCarouselItem>
        ))}
      </MDBCarousel>
    </div >
  );
};

export default Header;
