import { AreaCharts } from '@/components'
import './goldChart.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

const GoldChart = () => {
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(new Date())
  // const [counter, setCounter] = useState(60)
  const [price, setPrice] = useState([])
  // const [data, setData] = useState([])
  const [keys, setKeys] = useState([])
  const [values, setValues] = useState([])

  useEffect(() => {
    setInterval(() => setTime(new Date), 60000)
  }, [])

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.metalpriceapi.com/v1/latest?api_key=5e07d6a8157ced4d13198dda0c05bc07&base=KWD&currencies=XAU,XAG,XPT`, {
      withCredentials: false
    })
      .then((response) => {
        setPrice(response.data.rates);
        Object.entries(response?.data.rates).map(
          ([key, value]) => (
            {
              name: key,
              gold: ((1 / value.XAU) + 0.5 / 100),
              silver: ((1 / value.XAG) + 0.5 / 100),
              Platinum: ((1 / value.XPT) + 0.5 / 100)
            }
          ))
        setKeys(Object.keys(response?.data.rates))
        setValues(Object.values(response?.data.rates))
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  console.log(keys, values, price);
  return (
    <>
      {/* {loading && <div className="loading"></div>} */}
      <section  className="gold-chart">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item m-auto">Prices will be updated in
                    {/* <span style={{ color: "var(--gold-color)", fontWeight: "bold" }}>{counter}</span> */}
                    seconds according to international price
                    <span style={{ color: "var(--gold-color)", fontWeight: "bold" }}>{time.toLocaleTimeString()}</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3">
              <div className=" py-1 mt-1 mb-5 fs-6 fw-bold text-end" style={{ color: "#FFEB3B" }}>سعر الذهب</div>
              <div className="d-flex flex-column align-items-center price-item mb-3 ng-star-inserted">
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">عيار 24 (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{color:'#FFC107'}}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">20.260</span>
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
                <app-arrow-prices className="pb-2">
                  <img src="https://daralsabaek.com/assets/image/icon/chartconstant.svg" className="w-100 ng-star-inserted" />
                </app-arrow-prices>
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">عيار 22 (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{color:'#FFC107'}}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">20.260</span>
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
                <app-arrow-prices className="pb-2">
                  <img src="https://daralsabaek.com/assets/image/icon/chartconstant.svg" className="w-100 ng-star-inserted" />
                </app-arrow-prices>
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">عيار 21 (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{color:'#FFC107'}}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">20.260</span>
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
                <app-arrow-prices className="pb-2">
                  <img src="https://daralsabaek.com/assets/image/icon/chartconstant.svg" className="w-100 ng-star-inserted" />
                </app-arrow-prices>
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">عيار 18 (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{color:'#FFC107'}}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">20.260</span>
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
                <app-arrow-prices className="pb-2">
                  <img src="https://daralsabaek.com/assets/image/icon/chartconstant.svg" className="w-100 ng-star-inserted" />
                </app-arrow-prices>
              </div>
              {/* <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <p className="mb-0">عيار 24 (جرام)</p>
                      <p className="mb-0">{values[0]}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <p className="mb-0">عيار 22 (جرام)</p>
                      <p className="mb-0">20.260 د.ك</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <p className="mb-0">عيار 21 (جرام)</p>
                      <p className="mb-0">20.260 د.ك</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <p className="mb-0">عيار 18 (جرام)</p>
                      <p className="mb-0">20.260 د.ك</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <p className="mb-0">الفضة (كجم)</p>
                      <p className="mb-0">{values[1]}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <p className="mb-0">البلاتينيوم (جرام)</p>
                      <p className="mb-0">{values[2]}</p>
                    </li>
                  </ul>
                </div>
              </div> */}

              {/* <div className=" card mb-4 p-1">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3 overflow-auto" style={{ height: '24.3rem' }}>
                    <h5 className='px-2 pt-2 text-center' style={{ color: "#f8d25c" }}>انواع السبائك</h5>
                    {goldCategory?.map((item, index) => (
                      <Link
                        to={'/bullion-store'}
                        state={{ item }}
                        key={index}
                        className="list-group-item d-flex justify-content-start align-items-center p-3">
                        <p className="mb-0">{item?.name}</p>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div> */}
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="card mb-4 px-0">
                <div className="card-body px-1 text-end">
                  <div className='coursers-open'>
                    <AreaCharts />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default GoldChart
