import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AreaCharts } from '@/components'
import './goldChart.scss'
import { durationTime, metalType } from '@/db/data';

const GoldChart = () => {
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(new Date())
  const [counter, setCounter] = useState(60)
  // const [price, setPrice] = useState([])
  // const [data, setData] = useState([])
  // const [carat, setCarat] = useState([])
  // const [keys, setKeys] = useState([])
  // const [values, setValues] = useState([])
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [keratDar, setkeratDar] = useState([])

  // const [gold, setGold] = useState('gold')

  setInterval(() => setTime(new Date), 59000)
  setInterval(() => counter, 1000)
  // useEffect(() => {
  //   axios.get(`https://api.metalpriceapi.com/v1/carat?api_key=5e07d6a8157ced4d13198dda0c05bc07&base=KWD`,
  //     {
  //       withCredentials: false
  //     })
  //     .then((response) => {
  //       setCarat(response.data)
  //       // console.log(response.data.data);
  //       const data = Object.entries(response?.data?.data).map(
  //         ([key, value]) => (
  //           {
  //             name: key,
  //             gold24: value,
  //           }
  //         )
  //       )
  //       // setData(data)
  //       // setKeys(Object.keys(response?.data.rates))
  //       // setValues(Object.values(response?.data.rates))
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [])



  // useEffect(() => {
  //   setLoading(true);
  //   axios.get(`https://api.metalpriceapi.com/v1/latest?api_key=5e07d6a8157ced4d13198dda0c05bc07&base=KWD&currencies=XAU,XAG,XPT&unit=kilo`, {
  //     withCredentials: false
  //   })
  //     .then((response) => {
  //       setPrice(response.data.rates);
  //       Object.entries(response?.data.rates).map(
  //         ([key, value]) => (
  //           {
  //             name: key,
  //             gold: ((1/value.XAU) + 0.5 / 100),
  //             silver: ((1/value.XAG) + 0.5/100),
  //             Platinum: ((1/value.XPT) + 0.5 / 100)
  //           }
  //           ))
  //           setKeys(Object.keys(response?.data.rates))
  //           setValues(Object.values(response?.data.rates))
  //           // console.log('values', values);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       console.log(error);
  //     });
  // }, []);
  // console.log(1/values[0]);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.daralsabaek.com/api/goldAndFundBalance/getMetalSellAndBuyPrices`, {
      withCredentials: false
    })
      .then(response => {
        setkeratDar(response.data);
      })
  }, [])
  // console.log('first', keratDar)

  return (
    <>
      {/* {loading && <div className="loading"></div>} */}
      <section className="gold-chart">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item m-auto">Prices will be updated in
                    <span className='mx-1' style={{ color: "var(--gold-color)", fontWeight: "bold" }}>{counter}</span>
                    seconds according to international price
                    <span style={{ color: "var(--gold-color)", fontWeight: "bold" }}>{time.toLocaleTimeString()}</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3">
              <div className=" py-1 mt-1 mb-4 fs-6 fw-bold text-end" style={{ color: "#FFEB3B" }}>سعر الذهب</div>
              <div className="d-flex flex-column align-items-center price-item mb-3 ng-star-inserted">
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">عيار 24 (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{ color: '#FFC107' }}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{keratDar?.result?.purchaseGoldPrice}</span>
                      {/* <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{values[0]}</span> */}
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">عيار 22 (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{ color: '#FFC107' }}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{keratDar?.result?.purchase22GoldPrice}</span>
                      {/* <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">20.260</span> */}
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">عيار 21 (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{ color: '#FFC107' }}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{keratDar?.result?.purchase21GoldPrice}</span>
                      {/* <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">20.260</span> */}
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">عيار 18 (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{ color: '#FFC107' }}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{keratDar?.result?.purchase18GoldPrice}</span>
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" py-1 mt-1 mb-4 fs-6 fw-bold text-end" style={{ color: "#FFEB3B" }}>سعر الفضه</div>
              <div className="d-flex flex-column align-items-center price-item mb-3 ng-star-inserted">
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6"> الفضة (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{ color: '#FFC107' }}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{keratDar?.result?.purchaseSilverPrice}</span>
                      {/* <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{values[1]}</span> */}
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" py-1 mt-1 mb-4 fs-6 fw-bold text-end" style={{ color: "#FFEB3B" }}>سعر البلاتينيوم </div>
              <div className="d-flex flex-column align-items-center price-item mb-3 ng-star-inserted">
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">البلاتينيوم (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{ color: '#FFC107' }}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{keratDar?.result?.purchasePlatinumPrice}</span>
                      {/* <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{values[2]}</span> */}
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="shadow-none p-3 rounded d-flex justify-content-between flex-wrap">
                <div className=''>
                  {metalType?.map((item, index) => (
                    <Link
                      key={index}
                      to='/'
                      state={{ item: item.type }}
                    >
                      <button type="button" className='btn btn-warning mx-2'>{item?.name}</button>
                    </Link>
                  ))
                  }
                </div>
                <div className='d-flex flex-column'>

                  {durationTime?.map((item, index) => (
                    <div
                      className='d-flex flex-row align-items-center mb-3'
                      key={index}
                    // to={'/'}
                    >
                      <label htmlFor="datefrom" className='text-light ms-4'>{item?.duration}</label>
                      <input
                        type="date"
                        id="datefrom"
                        name="datefrom"
                        value={item.id == 1 ? startDate : endDate}
                        onChange={item.id == 1 ? (e) => setstartDate(e.target.value) : (e) => setendDate(e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="card mb-4 px-0">
                <div className="card-body px-1 text-end">
                  <div dir='ltr' className='coursers-open'>
                    <AreaCharts startDate={startDate} endDate={endDate} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
export default GoldChart
