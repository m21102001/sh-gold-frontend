import { useEffect, useState } from "react"
import axios from '@/api/axios'
import { Link } from "react-router-dom"

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
          to={`/dash/details-investment/${item._id}`}
          state={{item:item}}
          key={index}
          className="card mb-5"
          style={{ width: "18rem" }}
        >
          <img src="https://stgaccountdals.blob.core.windows.net/prdcont/images/news/5030_2364683.jpeg" className="card-img-top" alt="..." />
          {/* <img src={``} className="card-img-top" alt="..." /> */}
          <div className="card-body">
          <h5 className="card-title fw-bold "> {item?.name}</h5>
            <button onClick={() => handelDelete(item._id)} className="btn btn-danger">حذف</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default InvestmentActive