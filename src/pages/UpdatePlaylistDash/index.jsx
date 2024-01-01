import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SidebarDashboard } from '@/layout';
import axios from '@/api/axios';

const UpdatePlaylistDash = () => {
  const item = useLocation()?.state?.item
  const navigate = useNavigate();

  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState(item?.title)
  const [price, setPrice] = useState(item?.price)
  const [image, setImage] = useState(item?.image)
  const [description, setDescription] = useState(item?.description)

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .put(
          `/playlists/${item?._id}`,
          {
            title: title,
            price: price,
            image: image,
            description: description
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          console.log('updated success', response.data);
          alert("updated successfully")
          navigate('/dash/playlists')
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
          <h2 className='fs-1 fw-bold'>update playlist Item</h2>
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
          <div className="label-form">اضف صوره*</div>
          <input
            type="file"
            name="image"
            className="form-control mb-3"
            id="image"
            required
            placeholder="اضف صوره*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {/* <label id="file-input-label" className="text-light" htmlFor='image'>
            {image}
            <FaImage size={30} />
          </label> */}
          <div className="label-form">تعديل الوصف *</div>
          <textarea
            rows={5}
            type="text"
            name="description"
            className="form-control mb-3"
            id="description"
            required
            placeholder="عدل فى الوصف *"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mt-3">
              اضافه جديد
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mt-3">
              جاري الاضافه ...
            </button>
          )}
          <button onClick={() => navigate('/dash/playlists')} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mt-3">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePlaylistDash