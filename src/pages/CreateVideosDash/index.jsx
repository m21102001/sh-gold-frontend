import { useState } from "react"
import { useLocation } from 'react-router-dom';
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"

const CreateVideosDash = () => {
  const item = useLocation()?.state?.item
  // const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')


  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `/videos/`,
          {
            title: title,
            playlist: item?._id,
            description: description,
            url: url,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          // console.log('created success', response);
          alert("Video created successfully")
          setTitle('')
          setDescription('')
          setUrl('')
          // navigate(`/dash/details-playlist/${item?._id}`)
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
      console.log('message', err.message);
    }
  };

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>اضافة فيديو داخل الكورس</h2>
        </div>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">ادخل  عنوان الفيديو</div>
          <input
            type="text"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="ادخل عنوان الفيديو*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="label-form">اضف عنوان الفيديو(Url)</div>
          <input
            type="text"
            name="url"
            className="form-control  mb-4"
            id="url"
            required
            placeholder="اضف لينك الفيديو*"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="label-form">اكتب وصفا دقيقا للمنتج*</div>
          <textarea
            type="text"
            rows={5}
            name="description"
            className="form-control  mb-4"
            id="description"
            required
            placeholder="اكتب وصفا دقيقا للمنتج*"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              اضافة فيديو جديد
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري الاضافة ...
            </button>
          )}
          {/* <button onClick={() => navigate(`/dash/details-playlist/${item?._id}`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button> */}
        </form>
      </div>
    </div>
  )
}

export default CreateVideosDash