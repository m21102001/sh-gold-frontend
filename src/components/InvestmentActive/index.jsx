import { useEffect, useState } from "react"
import axios from '@/api/axios'
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

const InvestmentActive = () => {
  const [loading, setLoading] = useState(false)
  const [investment, setInvestment] = useState([])
  useEffect(() => {
    setLoading(true)
    axios.get(`/invest/active`)
      .then((response) => {
        setInvestment(response.data)
        console.log(response.data);
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      });
  }, [])

  const handelToggle = async (id) => {
    let config = {
      method: 'put',
      url: `/invest/activeToggle/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    setLoading(true);
    await axios
      .request(config, {
      })
      .then((response) => {
        axios.request(`/invest/active`).then((response) => {
          setInvestment(response.data);
          setLoading(false);
          console.log(response.data);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handelDelete = async (id) => {
    let config = {
      method: 'delete',
      url: `/invest/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    setLoading(true);
    await axios
      .request(config, {
      })
      .then((response) => {
        axios.request(`/invest/active`).then((response) => {
          setInvestment(response.data);
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
    <div className="d-flex flex-wrap justify-content-evenly">
      {!loading && investment?.invest?.map((item, index) => (
        <Link
          // to={`/dash/details-investment/${item._id}`}
          // state={{ item: item }}
          key={index}
          className="card mb-5"
          style={{ width: "18rem" }}
        >
          <LazyLoadImage src="https://stgaccountdals.blob.core.windows.net/prdcont/images/news/5030_2364683.jpeg" className="card-img-top" alt="..." />
          {/* <LazyLoadImage src={``} className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title fw-bold "> {item?.title}</h5>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-around mt-3">
                <Link
                  to={`/investment/inactive/details-investment/${item._id}`}
                  state={{ item: item }}
                >
                  <button className="btn btn-primary px-4">تفاصيل</button>
                </Link>
                <button onClick={() => handelToggle(item._id)} className="btn btn-success px-4">الغاء التفعيل</button>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <Link
                  to={`/investment/inactive/Update-investment/${item._id}`}
                  state={{ item: item }}
                >
                  <button className="btn btn-info px-4">تعديل</button>
                </Link>
                <button onClick={() => handelDelete(item._id)} className="btn btn-danger px-4">حذف</button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default InvestmentActive