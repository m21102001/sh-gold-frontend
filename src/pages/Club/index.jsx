import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import { authenticated, useAuth } from "@/context/Auth"
import { ClubMembers, GoldNews, TipsClub } from "@/components"
import { Footer, Navbar } from "@/layout"
import axios from '@/api/axios'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { clubCambridge, planning, planninggolden } from "@/db/data"
import './club.scss'
const Club = () => {
  const { user } = useAuth()
  const loggedIn = authenticated();
  const [plannigPay, setPlanningPay] = useState([])
  const [plannigPayGold, setPlanningPayGold] = useState([])

  const subscribeSilver = async () => {
    try {
      await axios.post(`/users/pay/silver/`)
        .then(response => {
          setPlanningPay(response.data)
          // console.log(response.data);
        })
    } catch (error) {
      console.log(error);
    }
  };

  const subscribeGolden = async () => {
    try {
      await axios.post(`/users/pay/gold/`)
        .then(response => {
          setPlanningPayGold(response.data)
          // console.log(response.data);
        })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="StartElectronicEcommerce">
        <div>
          <div className="Container">
            <div className="row align-items-start">
              {clubCambridge?.map((item, index) => (
                <Fragment key={index}>
                  <div className="col-lg-12 col-md-12 px-5">
                    <h2 className="fw-bold fs-1 text-center my-3 pb-5 digitalMarkting" style={{ color: 'var(--gold-color)' }}>نادى كامبردج</h2>
                    <h3 className="text-end fs-2 fw-bold text-light mb-4">{item?.welcome}</h3>
                    <p className="text-end fs-3 fw-bold text-light mb-4">{item?.define}</p>
                    <h3 className="text-end text-light mb-4">{item?.desc} <a className="text-danger" style={{ cursor: 'pointer' }} href="#C4">اشترك الان!</a></h3>
                  </div>
                  <div className="row justify-content-center mt-5 card-style text-end">
                    <h2 className="text-center text-light fw-bold mb-5">{item?.benfits}</h2>
                    {item?.type?.map((item, index) => (
                      <div
                        key={index} className="col-md-5 col-sm-12 mx-3 mb-5 p-0 card">
                        <LazyLoadImage src={item?.image} className="card-img-top" alt={item?.alt} />
                        <div className="card-body">
                          <h5 className="card-title">{item?.title}</h5>
                        </div>
                      </div>
                    ))}
                    <h2 className="text-center text-light fw-bold mb-5 fs-2" id='C4'>{item?.conslated}</h2>
                    {/*<h4 className="text-end text-light mb-4 lh-lg">
                      عندما يُشترك العميل كل ثلاثة أشهر،
                      يكون سعر الاشتراك <span className="text-danger">  65 دينارًا</span> فقط، مما يعني
                      أن كل شهر يكلفه 21.5 دينار. عندما نضرب هذا السعر بعدد الأشهر في السنة
                      (12 شهرًا)، نحصل على إجمالي قدره <span className="text-danger"> 259 دينار</span> لمدة سنة كاملة.
<br />
                      أما بالنسبة للاشتراك السنوي، فبسعر<span className="text-danger"> 259 دينار</span>، يمكن للعميل
                      الاستفادة من الاشتراك لمدة سنة كاملة. وبالتقسيط، فإن كل شهر يكلفه فقط <span className="text-danger"> 12.5 دينار</span>.
                      وهذا يعني أن العميل يحصل على خصم قيمته <span className="text-danger">105 دينار</span> مقارنة بالاشتراك كل ثلاثة أشهر.
                    </h4> */}
                    <div className="container p-5">
                      <div className="row planing">
                        {planning?.map((item, index) => (
                          < div key={index} className="col-lg-6 col-md-12 mb-4" >
                            <div className="card h-100 shadow-lg px-5  card-transmation">
                              <div className="card-body">
                                <div className="text-center p-3">
                                  <h5 className="card-title">{item?.title}</h5>
                                  <small>Individual</small>
                                  <br /><br />
                                  <span className="h2">{item?.price}</span>
                                  <br /><br />
                                </div>
                              </div>
                              {item?.features.map((item, index) => (
                                <Fragment key={index}>
                                  <div className="row text-end">
                                    <div className="col-md-12 d-flex">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                      </svg>
                                      <p className="mb-0 fs-5">{item?.title}</p>
                                    </div>
                                  </div>
                                  <hr />
                                </ Fragment>
                              ))}
                              <div className="card-body text-center">
                                {loggedIn == false ? (
                                  <Link to={'/auth/login'}>
                                    <button style={{ padding: "0.3rem 3rem", fontSize: "large" }}>اشترك الان</button>
                                  </Link>
                                ) : (
                                  user?.plan == 'basic' ? (
                                    <a href={plannigPay.data} target="_blank" rel="noopener noreferrer">
                                      <button onClick={subscribeSilver} style={{ padding: "0.3rem 3rem", fontSize: "large" }}>اشترك الان</button>
                                    </a>
                                  ) : null
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                        {planninggolden?.map((item, index) => (
                          < div key={index} className="col-lg-6 col-md-12 mb-4" >
                            <div className="card h-100 px-5 shadow-lg card-transmation">
                              <div className="card-body">
                                <div className="text-center p-3">
                                  <h5 className="card-title">{item?.title} </h5>
                                  <small>Individual</small>
                                  <br /><br />
                                  <span className="h2">{item?.price}  <span className="text-danger fs-5">(وفر 110 دينار )</span></span>
                                  <br /><br />
                                </div>
                              </div>
                              {item?.features.map((item, index) => (
                                <Fragment key={index}>
                                  <div className="row text-end">
                                    <div className="col-md-12 d-flex">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                      </svg>
                                      <p className="mb-0 fs-5">{item?.title}</p>
                                    </div>
                                  </div>
                                  <hr />
                                </ Fragment>
                              ))}
                              <div className="card-body text-center">
                                {loggedIn == false ? (
                                  <Link to={'/auth/login'}>
                                    <button style={{ padding: "0.3rem 3rem", fontSize: "large" }}>اشترك الان</button>
                                  </Link>
                                ) : (
                                  user?.plan == 'basic' ? (
                                    <a href={plannigPayGold.data} target="_blank" rel="noopener noreferrer">
                                      <button onClick={subscribeGolden} style={{ padding: "0.3rem 3rem", fontSize: "large" }}>اشترك الان</button>
                                    </a>
                                  ) : null
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>اخبار الذهب</Tab>
          <Tab>التوصيات </Tab>
          <Tab> اعضاء النادى</Tab>
        </TabList>

        <TabPanel>
          <GoldNews />
        </TabPanel>
        <TabPanel>
          <TipsClub />
        </TabPanel>
        <TabPanel>
          <ClubMembers />
        </TabPanel>
      </Tabs>
      <Footer />
    </>
  )
}

export default Club
