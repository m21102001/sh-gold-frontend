import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AreaCharts } from '@/components'
import './goldChart.scss'
import { durationTime, metalType } from '@/db/data';
import { useCountdownTimer } from 'use-countdown-timer';

const GoldChart = () => {
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(new Date())
  const [counter, setCounter] = useState("60")
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [keratDar, setkeratDar] = useState([])
  setInterval(() => setTime(new Date), 59000)

  const TIME_IN_MILISECONDS_TO_COUNTDOWN = 60 * 1000;
  const INTERVAL_IN_MILISECONDS = 1000;
  const [time1, setTime1] = useState(TIME_IN_MILISECONDS_TO_COUNTDOWN);

  useEffect(() => {
    let interval;

    const countDownUntilZero = () => {
      setTime1(prevTime => {
        if (prevTime === 0) clearInterval(interval);
        else return prevTime - INTERVAL_IN_MILISECONDS;
      })
    }

    interval = setInterval(countDownUntilZero, INTERVAL_IN_MILISECONDS);
    return () => clearInterval(interval);
  }, []);


  // useEffect(() => {
  //   axios.get(`${import.meta.env.VITE_GOLD_URL}carat?api_key=${import.meta.env.VITE_GOLD_SECRET}&base=KWD`,
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
  //   axios.get(`${import.meta.env.VITE_GOLD_URL}latest?api_key=${import.meta.env.VITE_GOLD_SECRET}&base=KWD&currencies=XAU,XAG,XPT&unit=kilo`, {
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
    axios.get(`${import.meta.env.VITE_GOLD_NEWS}goldAndFundBalance/getMetalSellAndBuyPrices`, {
      withCredentials: false
    })
      .then(response => {
        setkeratDar(response.data);
        setLoading(false);
      })
  }, [])
  return (
    <>
      {loading && <div className="loading"></div>}
      <section className="gold-chart">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-dark text-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item m-auto">سيتم تحديث الأسعار خلال
                    <span className='mx-1' style={{ color: "var(--gold-color)", fontWeight: "bold" }}>{(time1 / 1000)}</span>
                    ثانية حسب السعر العالمي
                    <span style={{ color: "var(--gold-color)", fontWeight: "bold" }}>{time.toLocaleTimeString()}</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3">
              <div className=" py-1 mt-1 mb-4 fs-6 fw-bold text-end" style={{ color: "#de9012" }}>سعر الذهب</div>
              <div className="d-flex flex-column align-items-center price-item mb-3 ng-star-inserted">
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">عيار 24 (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{ color: '#de9012' }}>
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
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{ color: '#de9012' }}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{keratDar?.result?.purchase22GoldPrice}</span>
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">عيار 21 (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{ color: '#de9012' }}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{keratDar?.result?.purchase21GoldPrice}</span>
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">عيار 18 (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{ color: '#de9012' }}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{keratDar?.result?.purchase18GoldPrice}</span>
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" py-1 mt-1 mb-4 fs-6 fw-bold text-end" style={{ color: "#de9012" }}>سعر الفضة</div>
              <div className="d-flex flex-column align-items-center price-item mb-3 ng-star-inserted">
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6"> الفضة (كيلو)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{ color: '#de9012' }}>
                      <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{(keratDar?.result?.purchaseSilverPrice) * 1000}</span>
                      {/* <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{values[1]}</span> */}
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" py-1 mt-1 mb-4 fs-6 fw-bold text-end" style={{ color: "#de9012" }}>سعر البلاتينيوم </div>
              <div className="d-flex flex-column align-items-center price-item mb-3 ng-star-inserted">
                <div className="flex-grow-1">
                  <div className="row">
                    <p className="col text-light fs-6">البلاتينيوم (جرام)</p>
                    <div className="col  fs-5 mx-2 d-flex justify-content-end" style={{ color: '#de9012' }}>
                      <span className="mx-2 fw-bold pb-1 fs-4 fw-bold">{keratDar?.result?.purchasePlatinumPrice}</span>
                      {/* <span className=" mx-2 fw-bold pb-1 fs-4 fw-bold">{values[2]}</span> */}
                      <span className="d-flex justify-content-center align-items-center pb-2 fs-7 fw-bold">د.ك</span>
                    </div>
                  </div>
                </div>
              </div>
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
                      <button type="button" className='btn btn-warning bacground-color-golden mx-2'>{item?.name}</button>
                    </Link>
                  ))
                  }
                </div>
                <div className='d-flex flex-column'>
                  {durationTime?.map((item, index) => (
                    <div
                      className='d-flex flex-row align-items-center mb-3'
                      key={index}
                    >
                      <label htmlFor="datefrom" className='text-light ms-4'>{item?.duration}</label>
                      <input
                        className='bg-dark text-light border-0'
                        type="date"
                        id="datefrom"
                        name="datefrom"
                        value={item.id == 1 ?
                          (startDate == '' ? '2024-01-01' : startDate)
                          :
                          (endDate == '' ? (new Date().toJSON().slice(0, 10)) : endDate)
                        }
                        onChange={item.id == 1 ? (e) => setstartDate(e.target.value) : (e) => setendDate(e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="card mb-4 px-0 bg-dark">
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
