import { useEffect, useRef, useState } from "react"
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { useAuth } from "@/context/Auth";
import { DownloadTableExcel } from 'react-export-table-to-excel';
const ConsaltationSubscriberClubDash = () => {
  const [loading, setLoading] = useState(false)
  const [consultation, setConsultation] = useState([])
  const { user } = useAuth();
  const tableRef = useRef(null);
  useEffect(() => {
    setLoading(true);
    if (user.role == 'manager') {
      axios.get('/consultation/free')
        .then((response) => {
          setLoading(false)
          setConsultation(response.data)
        })
        .catch((error) => {
          setLoading(false);
          // console.log(error);
        });
    }
  }, [])

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
      {/* {!getCookie('role') && <div className="loading"></div>} */}
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'> استشارات اعضاء النادى</h2>
        </div>
        <DownloadTableExcel
          filename="users table"
          sheet="users"
          currentTableRef={tableRef.current}
        >
          <button type="button" className="btn btn-info d-block m-3 ">  تحميل ملف اكسيل </button>
        </DownloadTableExcel>
        <table ref={tableRef} className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">الاسم</th>
              <th scope="col">النوع</th>
            </tr>
          </thead>
          <tbody>
            {!loading && consultation?.data?.map((item, index) => (
              index >= prev && index <= next ? (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.user?.name}</td>
                  <td>{item?.type}</td>
                </tr>
              ) : null
            ))}
          </tbody>
        </table>
        {user?.role != 'manager' ? (
          <h3 className="text-light"> YOU ARE NOT PROVIDE </h3>
        ) : null
        }
        <div className="d-flex justify-content-around">
          <button className={`btn btn-outline-info ${next >= consultation?.data?.length ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
          <h3 className="text-light"> {consultation?.length}/ {prev} </h3>
          <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
        </div>
      </div>
    </div>
  )
}

export default ConsaltationSubscriberClubDash