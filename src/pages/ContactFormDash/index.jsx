import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios";
import { useAuth } from "@/context/Auth";
import { DownloadTableExcel } from 'react-export-table-to-excel';
const ContactFormDash = () => {
  const [loading, setLoading] = useState(false);
  const [contactForm, setContactForm] = useState([])
  const { user } = useAuth();
  const tableRef = useRef(null);
  let fetchContactForm = {
    method: 'get',
    url: '/contact',
  };
  useEffect(() => {
    setLoading(true);
    if (user.role == 'manager') {
      axios
        .request(fetchContactForm)
        .then((response) => {
          setContactForm(response.data);
          setLoading(false);
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
      url: `/contact/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    setLoading(true);
    await axios
      .request(config, {
      })
      .then((response) => {
        axios.request(fetchContactForm).then((response) => {
          setContactForm(response.data);
          setLoading(false);
          console.log(response.data);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  const handelDeleteAll = async () => {
    let config = {
      method: 'delete',
      url: `/contact`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    setLoading(true);
    await axios
      .request(config, {
      })
      .then((response) => {
        axios.request(fetchContactForm).then((response) => {
          setContactForm(response.data);
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
      {user.role != 'manager' && <div className="loading"></div>}
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>طلبات التواصل مع الاستاذ صلاح</h2>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <button onClick={() => handelDeleteAll()} type="button" className="btn btn-danger d-block m-3" style={{ padding: "7px 6rem" }}>حذف الكل</button>
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
              <th scope="col">الاسم بالكامل</th>
              <th scope="col">البريد الالكترونى</th>
              <th scope="col">اسم المؤسسة</th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && contactForm?.document?.map((item, index) => (
              index >= prev && index <= next ? (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.company}</td>
                  <td>
                    <Link
                      to={`/dash/details-contact-form/${item._id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-outline-success mx-2 px-4">التفاصيل</button>
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
          <button className={`btn btn-outline-info ${next >= contactForm?.length ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
          <h3 className="text-light"> {contactForm?.length}/ {prev} </h3>
          <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
        </div>
      </div>
    </div>
  )
}

export default ContactFormDash
