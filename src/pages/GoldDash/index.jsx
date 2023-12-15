import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios";

const GoldDash = () => {
  const [loading, setLoading] = useState(false);
  const [goldData, setGoldData] = useState([])

  let fetchGold = {
    method: 'get',
    url: '/gold-bars/',
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
      url: `/gold-bars/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    setLoading(true);
    await axios
      .request(config, {
      })
      .then((response) => {
        axios.request(fetchGold).then((response) => {
          setGoldData(response.data);
          setLoading(false);
          console.log(response.data);
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
            <h2 className='fs-1 fw-bold'>Gold Dash</h2>
          </div>
          <Link to="/dash/create-gold-item">
            <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافه جديد</button>
          </Link>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">العنوان</th>
                <th scope="col">الحجم</th>
                <th scope="col">السعر</th>
                <th scope="col">الصوره</th>
                <th scope="col" colSpan={2}>الاحداث</th>
              </tr>
            </thead>
            <tbody>
              {!loading && goldData?.document?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.title}</td>
                  <td>{item?.size} KG</td>
                  <td>{item?.price}كويتى</td>
                  <td>
                    {/* item.image */}
                    <a href={`${import.meta.env.VITE_IMAGE_URL}/uploads/${item.image}`} target="_blank" rel="noopener noreferrer">صوره المنتج</a>
                     <img src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${item.image}`} alt=""
                      style={{ width: "50px" }} />

                  </td>
                  <td>
                    <Link
                      to={`/dash/update-gold/${item._id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                    </Link>
                    <Link
                      to={`/dash/details-gold/${item._id}`}
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

export default GoldDash
