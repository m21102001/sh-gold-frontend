import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import styles from '../GoldCard/GoldCard.module.scss';
import { courses } from '@/db/data';
const CoursesOpen = () => {
  return (
    <Tabs className={"mt-5"}>
      <h2 className="text-center fw-bold mb-3">Gold price</h2>
      <div className='m-auto d-flex justify-center'>
        <TabList className="d-flex justify-center flex-row mb-3" style={{ justifyContent: "center !important" }}>
          <Tab>كل البرامج</Tab>
          <Tab>التداول</Tab>
          <Tab>البرمجه</Tab>
          <Tab>اللغات</Tab>
          {/* <Tab>التجاره الالكترنيه</Tab> */}
        </TabList>
      </div>

      <TabPanel>
        <>
          <div className="Container">
            <div className={styles['home-grid']}>
              {courses.map((item, index) => (
                index < 8 ? (
                  <div key={index} className={styles['gold-div']}>
                    <div>
                      <img
                        src={item?.img}
                      />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item?.desc}</p>
                      <Link
                        to={`/gold-news/${item.id}`}
                        state={{ item: item }}
                      >
                        <button>Learn More</button>
                      </Link>
                    </div>
                  </div>
                ) : (null)
              ))}
            </div>
          </div>
        </>
      </TabPanel>
      <TabPanel>
        <>
          <div className="Container">
            <div className={styles['home-grid']}>
              {courses.map((item, index) => (
                item?.catigory === "minning" ? (
                  <div key={index} className={styles['gold-div']}>
                    <div>
                      <img
                        src={item?.img}
                      />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item?.desc}</p>
                      <strong className='text-start'>{item?.price} KWD</strong>
                      <Link
                        to={`/gold-news/${item.id}`}
                        state={{ item: item }}
                      >
                        <button>Learn More</button>
                      </Link>
                    </div>
                  </div>
                ) : ('')
              ))}
            </div>
          </div>
        </>
      </TabPanel>
      <TabPanel>
        <>
          <div className="Container">
            <div className={styles['home-grid']}>
              {courses.map((item, index) => (
                item?.catigory === "programming" && index < 100 ? (
                  <div key={item.id} className={styles['gold-div']}>
                    <div>
                      <img
                        src={item?.img}
                      />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item?.desc}</p>
                      <Link
                        to={`/gold-news/${item.id}`}
                        state={{ item: item }}
                      >
                        <button>Learn More</button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  ''
                )
              ))}
            </div>
          </div>
        </>
      </TabPanel>
      <TabPanel>
        <>
          <div className="Container">
            <div className={styles['home-grid']}>
              {courses.map((item, index) => (
                item?.catigory === "lang" && index < 100 ? (
                  <div key={item.id} className={styles['gold-div']}>
                    <div>
                      <img
                        src={item?.img}
                      />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item?.desc}</p>
                      <Link
                        to={`/gold-news/${item.id}`}
                        state={{ item: item }}
                      >
                        <button>Learn More</button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  ''
                )
              ))}
            </div>
          </div>
        </>
      </TabPanel>
      {/* <TabPanel>
        <>
          <div className="Container">
            <div className={styles['home-grid']}>
              {courses.map((item, index) => (
                item?.catigory === "digitalMarkiting" && index < 100 ? (
                  <div key={item.id} className={styles['gold-div']}>
                    <div>
                      <img
                        src={item?.img}
                      />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item?.desc}</p>
                      <Link
                        to={`/gold-news/${item.id}`}
                        state={{ item: item }}
                      >
                        <button>Learn More</button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  ''
                )
              ))}
            </div>
          </div>
        </>
      </TabPanel> */}
      <Link to="/goldPrice">
        <h4 className="fw-bold text-center my-5 text-decoration-underline text-opacity-75" data-bs-title="Another tooltip">Show More</h4>
      </Link>
    </Tabs>
  )
}

export default CoursesOpen