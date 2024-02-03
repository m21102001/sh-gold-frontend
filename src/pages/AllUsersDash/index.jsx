import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios";
import { useAuth } from "@/context/Auth";


const AllUsersDash = () => {
  const [loading, setLoading] = useState(false);
  const [allUser, setAlluser] = useState([])
  const { user } = useAuth();
  // console.log(user.role);
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
  // console.log(allUser.results,prev, next);

  useEffect(() => {
    setLoading(true);
    if (user.role =='manager') {
      axios.get('/users/', {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          setLoading(false);
          setAlluser(response.data);
          // console.log("contactForm", response.data);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  }, []);
  return (
    <div className="dashboard d-flex flex-row">
      {user.role !='manager' && <div className="loading"></div>}
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>Show All Users</h2>
        </div>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">الاسم بالكامل</th>
              <th scope="col">البريد الالكترونى</th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && allUser?.document?.map((item, index) => (
              index >= prev && index <= next ? (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>
                    <Link
                      to={`/dash/all-users/${item._id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-outline-info mx-2 px-4">التفاصيل</button>
                    </Link>
                    <Link
                      to={`/dash/update-role-user/${item._id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                    </Link>
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
          <button className={`btn btn-outline-info ${next >= allUser.results ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
          <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
        </div>
      </div>
    </div>
  )
}

export default AllUsersDash