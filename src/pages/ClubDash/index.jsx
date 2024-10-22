import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "@/context/Auth"
import { DownloadTableExcel } from 'react-export-table-to-excel';

const ClubDash = () => {
  const [loading, setLoading] = useState(false)
  const [club, setClub] = useState([])
  const { user } = useAuth();
  const tableRef = useRef(null);
  // console.log(user.role);
  useEffect(() => {
    setLoading(true);
    if (user.role =='manager') {
      axios.get(`/club/`)
        .then((response) => {
          setLoading(false)
          setClub(response.data)
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
      .delete(`/club/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        axios.get(`/club/`).then((response) => {
          setClub(response.data);
          setLoading(false);
          // console.log(response.data);
          alert(' تم مسح العنصر بنجاح')
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
      {user.role !='manager' && <div className="loading"></div>}
      <SidebarDashboard />

      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>التوصيات </h2>
        </div>
        <div className="d-flex flex-row justify-content-between">
        <Link to="/dash/create-club">
          <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافة جديد</button>
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
            <tr className="text-end">
              <th scope="col">#</th>
              <th scope="col">عنوان الرسالة</th>
              <th scope="col">وصف الرسالة</th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && club?.messages?.map((item, index) => (
              index >= prev && index <= next ? (
                <tr key={index} className="text-end">
                  <td>{index + 1}</td>
                  <td>{item?.title}</td>
                  <td>{item?.description}</td>
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
              ) : null
            ))}
          </tbody>
        </table>
        {user.role !='manager' ? (
          <h3 className="text-light"> YOU ARE NOT PROVIDE </h3>
        ) : null
        }
        <div className="d-flex justify-content-around">
          <button className={`btn btn-outline-info ${next >= club?.length ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
          <h3 className="text-light"> {club?.length}/ {prev} </h3> 
          <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
        </div>
      </div>
    </div>
  )
}

export default ClubDash