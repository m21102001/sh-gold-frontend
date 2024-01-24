import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios";
import { getCookie } from "cookies-next";

const RequestInvestment = () => {
  const [loading, setLoading] = useState(false);
  const [goldData, setGoldData] = useState([])

  let fetchGold = {
    method: 'get',
    url: '/investorRequest/',
  };
  useEffect(() => {
    setLoading(true);
    if (getCookie('token')) {
      axios
        .request(fetchGold)
        .then((response) => {
          setGoldData(response.data);
          setLoading(false);
          // console.log("goldData", response.data);
        })
        .catch((error) => {
          setLoading(false);
          // console.log(error);
        });
    }
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
          // console.log(response);
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
                index >= prev && index <= next ? (
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
                ) : null
              ))}
            </tbody>
          </table>
          {!getCookie('token') ? (
            <h3 className="text-light"> YOU ARE NOT PROVIDE </h3>
          ) : null
          }
          <div className="d-flex justify-content-around">
            <button className={`btn btn-outline-info ${next >= goldData?.results ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
            <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestInvestment