import { AreaCharts } from '@/components'
import './goldChart.scss'
import { useEffect, useState } from 'react';
import axios from '@/api/axios';
import { goldCategory } from '@/db/data';
import { Link } from 'react-router-dom';

const GoldChart = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const [time, setTime] = useState(new Date())
  const [counter, setCounter] = useState(60)

  useEffect(() => {
    setInterval(() => setTime(new Date), 60000)
  }, [])
  // useEffect(() => {
  //   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  // }, [counter]);
  // useEffect(() => {
  //   setInterval(() => setCounter(counter - 1), 1000)
  // }, [])
  console.log();
  let servicess = {
    method: 'get',
    url: '/gold-bars/',
  };
  useEffect(() => {
    setLoading(true);
    axios
      .request(servicess)
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* {loading && <div className="loading"></div>} */}
      <section dir="ltr" className="gold-chart">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item m-auto">Prices will be updated in
                    <span style={{ color: "var(--gold-color)", fontWeight: "bold" }}>{counter}</span>
                    seconds according to international price
                    <span style={{ color: "var(--gold-color)", fontWeight: "bold" }}>{time.toLocaleTimeString()}</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3">
              <div className=" card mb-4 p-1">
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
              </div>
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
