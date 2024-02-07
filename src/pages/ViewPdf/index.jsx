import { Footer, Navbar } from "@/layout"
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const ViewPdf = () => {
  const item = useLocation().state?.item;
  console.log(item)
  // console.log(item)
  // const [Item, setItem] = useState();
  // useEffect(() => {
  //   setItem(item)
    
  // }, [item._id])
  // console.log(Item)

  
  return (
    <div style={{background:'var(--darkblue-color)'}}>
      <Navbar />
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
        <Viewer
          fileUrl={`${import.meta.env.VITE_FILE_URL}${item?.pdf}`}
        />
      </Worker>
      <Footer />
    </div>
  )
}

export default ViewPdf