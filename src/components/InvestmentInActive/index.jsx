import { useEffect, useState } from "react"
import axios from '@/api/axios'
import { Link } from "react-router-dom"

const InvestmentInActive = () => {
  const [loading, setLoading] = useState(false)
  const [investment, setInvestment] = useState([])
  useEffect(() => {
    setLoading(true)
    axios.get(`/invest/inactive`)
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

  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {!loading && investment?.invest?.map((item, index) => (
        <Link
          to={`/investment/inactive/details-investment/${item._id}`}
          state={{ item: item }}
          key={index}
          className="card mb-5"
          style={{ width: "18rem" }}>
          <img src="https://stgaccountdals.blob.core.windows.net/prdcont/images/news/5030_2364683.jpeg" className="card-img-top" alt="..." />
          {/* src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${item.cover} */}
          <div className="card-body">
            <h5 className="card-title fw-bold m-0"> {item?.name}</h5>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default InvestmentInActive