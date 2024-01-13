import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SidebarDashboard } from '@/layout';
import axios from '@/api/axios';

const UpdateVideosDash = () => {
  const item = useLocation()?.state?.item
  const navigate = useNavigate();

  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState(item?.title)
  const [description, setDescription] = useState(item?.description)
  const [url, setUrl] = useState(item?.url)
  const [image, setImage] = useState(item?.image)


  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .put(
          `/videos/${item?._id}`,
          {
            playlist: item?.playlist,
            title: title,
            url: url,
            description: description,
            // image: image ? URL.createObjectURL(image) : null,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log('updated success', response.data);
          alert("updated success")
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
          <h2 className='fs-1 fw-bold'>update video Item</h2>
        </div>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">عنوان الفيديو</div>
          <input
            type="text"
            name="title"
            className="form-control mb-3"
            id="title"
            required
            placeholder=" عنوان الفيديو*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* <div className="label-form">تعديل صوره الغلاف*</div>
          <input
            type="file"
            name="image"
            className="form-control mb-3"
            id="image"
            required
            placeholder="تعديل صوره الغلاف*"
            // value={url}
            onChange={(e) => setImage(e.target.files[0])}
          /> */}
          <div className="label-form">عنوان(url)*</div>
          <input
            type="text"
            name="url"
            className="form-control mb-3"
            id="url"
            required
            placeholder="عنوان(url)*"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="label-form">الوصف *</div>
          <textarea
            rows={5}
            type="text"
            name="description"
            className="form-control mb-3"
            id="description"
            required
            placeholder="عدل ف الوصف *"
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
          <button onClick={() => navigate(`/dash/details-playlist/${item?._id}`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mt-3">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateVideosDash