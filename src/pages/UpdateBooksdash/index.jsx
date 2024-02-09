import { useState } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { MdOutlineArrowBack } from "react-icons/md";
import { Viewer, Worker } from "@react-pdf-viewer/core";
const UpdateBooksDash = () => {
  const item = useLocation()?.state?.item
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState(item?.title)
  const [image, setImage] = useState(item?.image)
  const [pdf, setpdf] = useState(item?.pdf)
  const [description, setDescription] = useState(item?.description)
  const [price, setPrice] = useState(item?.price)


  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .put(
          `/books/${item?._id}`,
          {
            title: title,
            image: image,
            pdf: pdf,
            description: description,
            price: price,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          console.log('created success', response);
          if (response?.status == 201) {
            alert('Updated successfully')
            return navigate('/dash/books')
          }
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.log('response' + err?.response?.data?.errors?.map((item) => item.msg));
      alert('error message: ' + err?.response?.data?.errors?.map((item) => item.msg));
    }
  };

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تعديل فى تفاصيل الكتاب</h2>
        </div>
        <Link to={'/dash/books'} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">تعديل اسم الكتاب*</div>
          <input
            type="text"
            name="title"
            className="form-control mb-3"
            id="title"
            required
            placeholder="تعديل اسم الكتاب*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          // defaultValue="Some initial value"
          />
          <div className="label-form">اكتب السعر*</div>
          <input
            type="number"
            name="price"
            className="form-control mb-3"
            id="price"
            required
            placeholder="اكتب السعر*"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="label-form">اضف ملف بصيغه (Choose PDF) <span className='text-danger'>اختياري</span></div>
          <input
            type="file"
            name="pdf"
            className="form-control mb-3"
            id="pdf"
            placeholder="اختر ملف pdf"
            onChange={(e) => setpdf(e.target.files[0])}
          />
          <div className="w-50" style={{height:"250px"}}>
          <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
            <Viewer
              fileUrl={`${import.meta.env.VITE_FILE_URL}${item?.pdf}`}
              />
          </Worker>
              </div>
          <div className="label-form">اضف صوره*(Choose image (.png, .jpg, ...)) <span className='text-danger'>اختياري</span></div>
          <input
            type="file"
            name="image"
            className="form-control mb-3"
            id="image"
            placeholder="اضف صوره*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <input
            id="image"
            type="image"
            width="320"
            height="250"
            alt="Login"
            disabled
            src={`${import.meta.env.VITE_IMAGE_URL}${item.image}`}
          />
          <div className="label-form">اكتب وصفا دقيقا الكتاب*</div>
          <textarea
            type="text"
            name="description"
            className="form-control mb-3"
            id="description"
            rows={5}
            placeholder="اكتب وصفا دقيقا الكتاب*"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mt-3">
              تعديل
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mt-3">
              جاري التعديل ...
            </button>
          )}
          <button onClick={() => navigate('/dash/books')} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mt-3">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateBooksDash