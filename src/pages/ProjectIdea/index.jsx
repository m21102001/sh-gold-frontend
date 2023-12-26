import { useLocation } from 'react-router-dom';
import { Navbar } from '@/layout';
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
    <>
      <Navbar />
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>{item?.cover}</div>
      <div>{item?.name}</div>
      <div>{item?.description}</div>
      <div>{item?.images}</div>
    </>
  )
}

export default ProjectIdea