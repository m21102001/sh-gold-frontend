import { Footer, Navbar } from "@/layout"
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { useLocation } from 'react-router-dom';

const ViewPdf = () => {
  const item = useLocation().state?.item;
  // console.log(item)

  return (
    <div style={{ background: 'var(--darkblue-color)' }}>
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