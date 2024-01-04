import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
const ConsultationsDash = () => {
  const [loading, setLoading] = useState(false)
  const [consultation, setConsultation] = useState([])

  useEffect(() => {
    setLoading(true);
    axios.get('/consultation/tickets/available')
      .then((response) => {
        setLoading(false)
        setConsultation(response.data)
        console.log('consultation', response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });

  }, [])

  const handelDelete = async (id) => {
    setLoading(true);
    await axios
      .delete(`/consultation/tickets/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        axios.get('/consultation/tickets/available')
          .then((response) => {
            setConsultation(response.data);
            setLoading(false);
            console.log(response.data);
          });
          console.log(response);
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
          <h2 className='fs-1 fw-bold'>Consultation Dash</h2>
        </div>
        <Link to="/dash/create-consultation-item">
          <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافه تذكره</button>
        </Link>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">العنوان</th>
              <th scope="col">تاريخ البدء</th>
              <th scope="col">السعر </th>
              <th scope="col">اليوم</th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && consultation?.data?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.title}</td>
                <td>{item?.startDate}</td>
                <td>{item?.price}</td>
                <td>{item?.day?.split('T',1)}</td>
                <td>
                  {/* <Link
                    to={`/dash/details-playlist/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-info mx-2 px-4">التفاصيل</button>
                  </Link> */}
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

export default ConsultationsDash