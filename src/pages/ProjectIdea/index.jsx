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
      <div>{item?.cover}</div>
      <div>{item?.name}</div>
      <div>{item?.description}</div>
      <div>{item?.images}</div>
    </>
  )
}

export default ProjectIdea