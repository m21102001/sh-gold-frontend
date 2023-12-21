import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const VideosDash = () => {
  const [loading, setLoading] = useState(false)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    setLoading(true);
    axios.get('/playlists/')
      .then((response) => {
        setLoading(false)
        setVideos(response.data)
        console.log('playlist', response.data);
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
        axios.get('/playlists/').then((response) => {
          setVideos(response.data);
          setLoading(false);
          console.log(response.data);
        });
      })
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
          <h2 className='fs-1 fw-bold'>Videos Dash</h2>
        </div>
        <Link to="/dash/create-video-item">
          <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافه جديد</button>
        </Link>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">العنوان</th>
              <th scope="col">السعر</th>
              <th scope="col">الصوره</th>
              <th scope="col" colSpan={2}>الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && videos?.document?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.title}</td>
                <td>{item?.price}كويتى</td>
                <td>
                  {/* item.image */}
                  <a href={`${import.meta.env.VITE_IMAGE_URL}/uploads/${item.image}`} target="_blank" rel="noopener noreferrer">صوره المنتج</a>
                  <img src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${item.image}`} alt=""
                    style={{ width: "50px" }} />

                </td>
                <td>
                  <Link
                    to={`/dash/update-videos/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                  </Link>
                  <Link
                    to={`/dash/details-videos/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-info mx-2 px-4">التفاصيل</button>
                  </Link>
                  <button onClick={() => handelDelete(item._id)} className="btn btn-outline-danger mx-2 px-4">حذف</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default VideosDash