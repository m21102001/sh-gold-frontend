import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ClubDash = () => {
  const [loading, setLoading] = useState(false)
  const [club, setClub] = useState([])

  useEffect(() => {
    setLoading(true);
    axios.get(`/club/`)
      .then((response) => {
        setLoading(false)
        setClub(response.data)
        console.log('club', response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });

  }, [])

  const handelDelete = async (id) => {
    setLoading(true);
    await axios
      .delete(`/club/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        axios.get(`/club/`).then((response) => {
          setClub(response.data);
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
          <h2 className='fs-1 fw-bold'>Club dash</h2>
        </div>
        <Link to="/dash/create-club">
          <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافه جديد</button>
        </Link>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">الرساله</th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && club?.messages?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.message}</td>
                <td>
                  <Link
                    to={`/dash/update-club/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                  </Link>
                  <button onClick={() => handelDelete(item?._id)} className="btn btn-outline-danger mx-2 px-4">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ClubDash