import { SidebarDashboard } from '@/layout';
import axios from '@/api/axios';
import { useEffect, useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DetailsPlaylistDash = () => {
  const item = useLocation()?.state?.item
  const [loading, setLoading] = useState(false)
  const [videosPlaylist, setVideosPlaylist] = useState([])

  useEffect(() => {
    setLoading(true);
    axios.get(`playlists/videos/${item?._id}`)
      .then((response) => {
        setLoading(false)
        setVideosPlaylist(response.data)
        // console.log('setVideosPlaylist', response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });

  }, [])
  const handelDelete = async (id) => {
    setLoading(true);
    await axios
      .delete(`/videos/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        axios.get(`playlists/videos/${item?._id}`)
        // console.log('bb',response)
      })
    alert('deleted success')
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تفاصيل الكورس</h2>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <Link
            // to={{ pathname: "/dash/create-video-item", state: dataToPass }}
            to="/dash/create-video-item"
            state={{ item: item }}
          >
            <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافة فيديو جديد</button>
          </Link>
          <Link to={'/dash/playlists'} className='mb-3 d-flex flex-row-reverse'>
            <button type="butto" className="fw-bold fs-5 back-details-button"
            ><MdOutlineArrowBack size={30} /></button>
          </Link>
        </div>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <LazyLoadImage
                    src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                    className="card-img-top"
                    alt={item?.title}
                  />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">عنوان الفيديو</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.title}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">السعر </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.price}دينار كويتى</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الوصف </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="d-flex flex-wrap justify-content-evenly mt-5">
          {!loading && videosPlaylist?.videos?.map((item, index) => (
            <Link
              key={index}
              className="card mb-5"
              style={{ width: "18rem" }}
            >
              <ReactPlayer
                url={item?.url}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  },
                }}
                width='100%'
                height='100%'
              />
              <div className="card-body">
                <h5 className="card-title fw-bold ">{item?.title}</h5>
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-around mt-3">
                    <Link
                      to={`/dash/details-videos/${item._id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-primary px-4">تفاصيل</button>
                    </Link>
                    <Link
                      to={`/dash/update-videos/${item._id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-info px-4">تعديل</button>
                    </Link>
                  </div>
                  <div className="d-flex justify-content-around mt-3">
                    <button onClick={() => handelDelete(item._id)} className="btn btn-danger px-4">حذف</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailsPlaylistDash