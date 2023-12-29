import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios";

const RequestInvestment = () => {
  const [loading, setLoading] = useState(false);
  const [goldData, setGoldData] = useState([])

  let fetchGold = {
    method: 'get',
    url: '/investorRequest/',
  };
  useEffect(() => {
    setLoading(true);
    axios
      .request(fetchGold)
      .then((response) => {
        setGoldData(response.data);
        setLoading(false);
        console.log("goldData", response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const handelDelete = async (id) => {
    let config = {
      method: 'delete',
      url: `/investorRequest/${id}`,
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
        axios.request(fetchGold).then((response) => {
          setGoldData(response.data);
          setLoading(false);
          console.log(response);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <>
      {/* {loading && <div className="loading"></div>} */}
      <div className="dashboard d-flex flex-row">
        <SidebarDashboard />
        <div className="container text-center">
          <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
            <h2 className='fs-1 fw-bold'>Requests Dash</h2>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">الاسم</th>
                <th scope="col">الهاتف</th>
                <th scope="col">السعر</th>
                <th scope="col" colSpan={2}>الاحداث</th>
              </tr>
            </thead>
            <tbody>
              {!loading && goldData?.document?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.price}كويتى</td>
                  <td>
                    <Link
                      to={`/dash/details-requests-investment/${item._id}`}
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
        </div>
      </div>
    </>
  )
}

export default RequestInvestment