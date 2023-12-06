import { useState } from "react"
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfToText = () => {
  const [pdfFile, setPdfFile] = useState(null)
  const [viewPdf, setViewpdf] = useState(null)

  const fileType = ["application/pdf"]
  const handelChange = (e) => {
    e.preventDefault()
    let selectedFile = e.target.files[0]
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onload = (e) => {
          setPdfFile(e.target.result)
        }
      }
      else {
        setPdfFile(null)

      }
    } else {
      alert("Please select a pdf file")
    }

  }

  const handelSubmit = (e) => {
    e.preventDefault()
    if (pdfFile !== null) {
      setViewpdf(pdfFile)
    } else {
      setViewpdf(null)
    }
  }
  // const newplugin = defaultLayoutPlugin()
  return (
    <div className="container">
      <form onChange={handelChange}>
        <input type="file" className="form-control" />
        <button type="submit" className="btn btn-success" onChange={handelSubmit}> view</button>
      </form>
      <h2>view pdf</h2>
      <div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
          {viewPdf && <>
            <Viewer fileUrl={viewPdf}  />
            {/* <Viewer fileUrl={viewPdf} plugins={[newplugin]} /> */}
          </>}
          {!viewPdf && <>no PDF</>}
        </Worker>;
      </div>
    </div>
  )
}

export default PdfToText