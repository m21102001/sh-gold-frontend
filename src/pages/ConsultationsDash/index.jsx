import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { useAuth } from "@/context/Auth";
import { DownloadTableExcel } from 'react-export-table-to-excel';
const ConsultationsDash = () => {
  const [loading, setLoading] = useState(false)
  const [consultation, setConsultation] = useState([])
  const { user } = useAuth();
  const tableRef = useRef(null);
  useEffect(() => {
    setLoading(true);
    if (user.role == 'manager') {
      axios.get('/consultation/tickets/available')
        .then((response) => {
          setLoading(false)
          setConsultation(response.data)
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
      {user?.role == 'user' && <div className="loading"></div>}
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>الاسشتارات المتاحة</h2>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <Link to="/dash/create-consultation-item">
            <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافة تذكرة</button>
          </Link>
          <DownloadTableExcel
            filename="users table"
            sheet="users"
            currentTableRef={tableRef.current}
          >
            <button type="button" className="btn btn-info d-block m-3 ">  تحميل ملف اكسيل </button>
          </DownloadTableExcel>
        </div>
        <table ref={tableRef} className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">العنوان</th>
              <th scope="col"> الوقت</th>
              <th scope="col">السعر </th>
              <th scope="col">اليوم</th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && consultation?.data?.map((item, index) => (
              index >= prev && index <= next ? (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.title}</td>
                  <td>{item?.startDate}</td>
                  <td>{item?.price}</td>
                  <td>{item?.day?.split('T', 1)}</td>
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
              ) : null
            ))}
          </tbody>
        </table>
        {user.role != 'manager' ? (
          <h3 className="text-light"> YOU ARE NOT PROVIDE </h3>
        ) : null
        }
        <div className="d-flex justify-content-around">
          <button className={`btn btn-outline-info ${next >= consultation?.length ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
          <h3 className="text-light"> {consultation?.length}/ {prev} </h3>
          <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
        </div>
      </div>
    </div>
  )
}

export default ConsultationsDash