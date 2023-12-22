import { useEffect, useState } from "react"
import axios from '@/api/axios'

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
        <div key={index} className="card mb-5" style={{ width: "18rem" }}>
          <img src="https://stgaccountdals.blob.core.windows.net/prdcont/images/news/5030_2364683.jpeg" className="card-img-top" alt="..." />
          {/* <img src={``} className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <p className="card-text">عنوان الفكره</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default InvestmentInActive