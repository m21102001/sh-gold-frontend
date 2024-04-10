import { Fragment, useState } from "react"
import { Link } from "react-router-dom";
import axios from '@/api/axios'
import { Footer, Navbar } from "@/layout"
import { recommendation, recommendationsMonth, recommendationsquarter } from "@/db/data"
import { authenticated, useAuth } from "@/context/Auth"
import { GrStatusGood } from "react-icons/gr";
import './recommend.scss'
const Recommendations = () => {
  const { user } = useAuth()
  const loggedIn = authenticated();
  const [plannigPay, setPlanningPay] = useState([])
  const [plannigPaygold, setPlanningPayGold] = useState([])
  const subscribeSilver = async () => {
    try {
      await axios.post(`/recommend/silver/pay`)
        .then(response => {
          setPlanningPay(response.data)
          // console.log(response.data);
        })
    } catch (error) {
      console.log(error);
    }
  };
  const subscribeGold = async () => {
    try {
      await axios.post(`/recommend/gold/pay`)
        .then(response => {
          setPlanningPayGold(response.data)
          // console.log(response.data);
        })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="consalting">
      <Navbar />
      <div className="StartElectronicEcommerce">
        <div className='m-auto d-flex justify-content-center pt-5 pb-3'>
          <span style={{ zIndex: "0", backgroundColor: "var(--gold-color)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
          <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}>توصيات التداول </h2>
          <span style={{ zIndex: "0", backgroundColor: "var(--gold-color)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div>
          <div className="Container">
            <div className="row align-items-start">
              <Fragment>
                <div className="col-md-12 px-5 recom">
                  <h2 className="text-light text-end fw-semibold digitalMarkting pb-5">توصيات  التداول</h2>
                  {recommendation?.map((item, index) => (
                    <h3 key={index} className="text-end text-light mb-4 d-flex flex-row"><GrStatusGood color='green' size='30' /><li className="list-unstyled pe-4">{item?.title}</li></h3>
                  ))}
                </div>
                <div className="row justify-content-center mt-5 card-style text-end">
                  <h2 className="text-center text-light fw-bold mb-5"> باقات العضوية</h2>
                  <p className="h3 text-center pb-3 text-danger">{user == undefined ? (`انت غيرمشترك فى باقة الان`) : (user?.recommendationPlan == 'basic' ? (`انت غيرمشترك فى باقة الان`) : ('باقتى الان ' + user?.recommendationPlan))}</p>
                  <div className="container-fluid planing rounded" style={{ background: "linear-gradient(90deg, gold 0%, silver 100%)" }}>
                    <div className="container p-5 recomended">
                      <div className="row">
                        {recommendationsMonth?.map((item, index) => (
                          < div key={index} className="col-lg-6 col-md-12 mb-4" >
                            <div className="card h-100 shadow-lg card-transmation recomendation-card">
                              <div className="card-body">
                                <div className="text-center p-3">
                                  <h5 className="card-title">{item?.title}</h5>
                                  <small>Individual</small>
                                  <br /><br />
                                  <span className="h2">{item?.price}</span>
                                  <br /><br />
                                </div>
                              </div>
                              <div className="card-body text-center">
                                {loggedIn == false ? (
                                  <Link to={'/auth/login'}>
                                    <button className="" onClick={subscribeSilver} style={{ padding: "0.3rem 3rem", fontSize: "large" }}>اشترك الان</button>
                                  </Link>
                                ) : (
                                  user?.recommendationPlan == 'basic' ? (
                                    <a href={plannigPay.data} target="_blank" rel="noopener noreferrer">
                                      <button className="" onClick={subscribeSilver} style={{ padding: "0.3rem 3rem", fontSize: "large" }}>اشترك الان</button>
                                    </a>
                                  ) : null
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                        {recommendationsquarter?.map((item, index) => (
                          < div key={index} className="col-lg-6 col-md-12 mb-4" >
                            <div className="card h-100 shadow-lg card-transmation recomendation-card">
                              <div className="card-body">
                                <div className="text-center p-3">
                                  <h5 className="card-title">{item?.title}</h5>
                                  <small>Individual</small>
                                  <br /><br />
                                  <span className="h2">{item?.price}   <span className="text-danger fs-5">(وفر 14 دينار )</span></span>
                                  <br /><br />
                                </div>
                              </div>
                              <div className="card-body text-center">
                                {loggedIn == false ? (
                                  <Link to={'/auth/login'}>
                                    <button className="" onClick={subscribeGold} style={{ padding: "0.3rem 3rem", fontSize: "large" }}>اشترك الان</button>
                                  </Link>
                                ) : (
                                  user?.recommendationPlan == 'basic' || user?.recommendationPlan == 'silver' ? (
                                    <a href={plannigPaygold.data} target="_blank" rel="noopener noreferrer">
                                      <button className="" onClick={subscribeGold} style={{ padding: "0.3rem 3rem", fontSize: "large" }}>اشترك الان</button>
                                    </a>
                                  ) : null
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div >
                </div>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Recommendations
