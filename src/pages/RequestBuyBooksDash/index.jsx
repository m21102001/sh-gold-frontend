import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios";
import { useAuth } from "@/context/Auth";
import { DownloadTableExcel } from 'react-export-table-to-excel';

const RequestBuyBooksDash = () => {
  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState([])
  const { user } = useAuth();
  const tableRef = useRef(null);

  let fetchBook = {
    method: 'get',
    url: '/books/requests',
  };
  useEffect(() => {
    setLoading(true);
    if (user.role == 'manager') {
      axios
        .request(fetchBook)
        .then((response) => {
          setBookData(response.data);
          setLoading(false);
          // console.log("bookData", response.data);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  }, []);

  const handelDelete = async (id) => {
    let config = {
      method: 'delete',
      url: `/books/requests/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    setLoading(true);
    await axios
      .request(config, {
      })
      .then((response) => {
        alert('Deleted Success');
        axios.request(fetchBook).then((response) => {
          setBookData(response.data);
          setLoading(false);
          // console.log(response.data);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  //////////////////////////////////////
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
      {user.role != 'manager' && <div className="loading"></div>}
      <SidebarDashboard />

      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>طلبات شراء الكتب</h2>
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
              <th scope="col">رقم عمليه الدفع</th>
              <th scope="col">اسم الكتاب</th>
              <th scope="col">التوصيل</th>
              <th scope="col" colSpan={2}>الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && bookData?.data?.map((item, index) => (
              index >= prev && index <= next ? (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.paymentId}</td>
                  <td>{item?.book?.title}</td>
                  <td>{item?.type}</td>
                  <td>
                    <Link
                      to={`/dash/books/requests/details/${item._id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-outline-info mx-2 px-4">التفاصيل</button>
                    </Link>
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
          <button className={`btn btn-outline-info ${next >= bookData?.length ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
         <h3 className="text-light"> {bookData?.length}/ {prev} </h3> 
          <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
        </div>
      </div>
    </div>
  )
}

export default RequestBuyBooksDash