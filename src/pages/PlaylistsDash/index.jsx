import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getCookie } from "cookies-next";

const PlaylistsDash = () => {
  const [loading, setLoading] = useState(false)
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    setLoading(true);
    if (getCookie('token')) {
      axios.get('/playlists')
        .then((response) => {
          setLoading(false)
          setPlaylists(response.data)
          console.log('playlist', response.data);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  }, [])

  const handelDelete = async (id) => {
    setLoading(true);
    await axios
      .delete(`/playlists/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        axios.get('/playlists/').then((response) => {
          setPlaylists(response.data);
          setLoading(false);
          console.log(response.data);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  //////////////////pagination///////////////////
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(10)

  const handelprev = () => {
    setPrev(count => count - 10)
    setNext(count => count - 10)
    if (prev <= 0) {
      setPrev(0);
      setNext(10)
    }
  }
  const handelNext = () => {
    setNext(count => count + 10);
    setPrev(count => count + 10)
    if (next < 10) {
      setPrev(0);
      setNext(10)

    }
  }
  return (
    <div className="dashboard d-flex flex-row">
      {getCookie('role') == 'user' && <div className="loading"></div>}
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>Playlist Dash</h2>
        </div>
        <Link to="/dash/create-playlist-item">
          <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافه قائمه جديد</button>
        </Link>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">العنوان</th>
              <th scope="col">السعر</th>
              <th scope="col" colSpan={2}>الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && playlists?.document?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.title}</td>
                <td>{item?.price}دينار كويتى</td>
                {/* <LazyLoadImage src={`${import.meta.env.VITE_IMAGE_URL}${item.image}`} alt={item?.title}
                  style={{ width: "50px" }} /> */}
                <td>
                  <Link
                    to={`/dash/update-playlist/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                  </Link>
                  <Link
                    to={`/dash/details-playlist/${item._id}`}
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
        {!getCookie('token') ? (
          <h3 className="text-light"> YOU ARE NOT PROVIDE </h3>
        ) : null
        }
        <div className="d-flex justify-content-around">
          <button className={`btn btn-outline-info ${next >= playlists?.results ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
          <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
        </div>
      </div>
    </div>
  )
}

export default PlaylistsDash