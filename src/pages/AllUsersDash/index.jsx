import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const AllUsersDash = () => {
  const [loading, setLoading] = useState(false);
  const [allUser, setAlluser] = useState([])

  useEffect(() => {
    setLoading(true);
    axios.get('/users', {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc3OGU2YmZhNzczMzNkMDgxZjc3NmMiLCJpYXQiOjE3MDIzMzQzNjEsImV4cCI6MTcwMjQyMDc2MX0.TM_TFOc0CTHxVWff1eiiVMRdOhpY8O3eNEqHIMsIwos', 
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        // 'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc3OGU2YmZhNzczMzNkMDgxZjc3NmMiLCJpYXQiOjE3MDI0ODYwNDMsImV4cCI6MTcwMjU3MjQ0M30.8fa03fkjdy2CRBwqUXtPXphYIW8i1LXL_g1C-Y8gozw'
        // 'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc3OGU2YmZhNzczMzNkMDgxZjc3NmMiLCJpYXQiOjE3MDI0ODA0OTcsImV4cCI6MTcwMjU2Njg5N30.zT--nOZLrMwCjQUBYBl8pAFA5pDbm5qAAbVIYyzB5hs'
      }
    })
      .then((response) => {
        setLoading(false);
        setAlluser(response.data);
        console.log("contactForm", response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  // console.log('token',localStorage.getItem('token'));

  return (
    <div className="dashboard d-flex flex-row">
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
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>
                  <Link
                    to={`/dash/all-users/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-success mx-2 px-4">التفاصيل</button>
                  </Link>
                  <Link
                    to={`/dash/update-role-user/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsersDash