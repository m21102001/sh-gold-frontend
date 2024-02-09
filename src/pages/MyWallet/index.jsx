import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "@/layout";
import axios from "@/api/axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillGolden } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const MyWallet = () => {
  const [loading, setLoading] = useState(false)
  const [wallet, setWallet] = useState([])
  const [playlist, setPlaylist] = useState([])
  const [book, setBook] = useState([])
  useEffect(() => {
    setLoading(true);
    axios.get('/users/wallet/')
      .then((response) => {
        setWallet(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [])

  useEffect(() => {
    setLoading(true);
    axios.get('users/myplaylists')
      .then((response) => {
        setPlaylist(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [])
  useEffect(() => {
    setLoading(true);
    axios.get('/users/mybooks')
      .then((response) => {
        setBook(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [])
  // console.log('object', book);

  return (
    <div style={{ background: 'var(--darkblue-color)' }}>
      <Navbar />
      <div className='m-auto d-flex justify-content-center my-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: 'var(--bs-yellow)' }}> محفظتى  </h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <Tabs>
        <TabList>
          <Tab>مقتنياتى من الذهب</Tab>
          <Tab> كورساتى </Tab>
          <Tab> كتبي (اونلاين فقط) </Tab>
        </TabList>

        <TabPanel>
          <div className="container text-center pt-5">
            {wallet?.message != 'Your wallet is empty' ? (
              !loading && wallet?.map((item, index) => (
                <div
                  key={index}
                  className="row row-striped shadow-lg p-3 mb-5 bg-body rounded">
                  <div className="col-2 text-right">
                    <LazyLoadImage
                      src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                      alt={`${item.title}`}
                      style={{
                        width: '100px',
                        height: '100px'
                      }}
                    />
                  </div>
                  <div className="col-10 fs-4 text-end" >
                    <h3 className="text-uppercase d-flex flex-row align-items-center justify-content-between">
                      <strong>{item?.title}</strong>
                      <Link
                        to={`/auth/my-wallet/request/sall`}
                        state={{ item }}
                      >
                        <button type="button" className="btn btn-success px-5">
                          طلب بيع
                        </button>
                      </Link>
                    </h3>
                    <ul className="list-inline">
                      <li className="list-inline-item mx-3"><AiFillGolden color="gold" size={30} /> {item?.size} جرام</li>
                      <li className="list-inline-item mx-3"> <FaMoneyBillAlt size={30} style={{ margin: '0 10px' }} />{item?.price}</li>
                    </ul>
                    <p>{item?.description}</p>
                  </div>
                </div>
              ))
            ) : (<h2 className="text-light">لا يوجد منتجات ذهبية تم شرائها</h2>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container text-center pt-5">
            {playlist?.playlists?.length != 0 ? (
              !loading && playlist?.playlists?.map((item, index) => (
                <Link
                  to={`/development/details-playlist/${item._id}`}
                  state={{ item }}
                  key={index}
                  className="row row-striped text-dark shadow-lg p-3 mb-5 bg-body rounded">
                  <div className="col-2 text-right">
                    <LazyLoadImage
                      src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                      alt={`${item.title}`}
                      style={{
                        width: '100px',
                        height: '100px'
                      }}
                    />
                  </div>
                  <div className="col-10 fs-4 text-end" >
                    <h3 className="text-uppercase d-flex flex-row align-items-center justify-content-between">
                      <strong>{item?.title}</strong>
                      <button type="button" className="btn btn-info px-5">
                        الذهاب الي الكورس
                      </button>
                    </h3>
                    <ul className="list-inline">
                      <li className="list-inline-item mx-3"> <FaMoneyBillAlt size={30} style={{ margin: '0 10px' }} />{item?.price}</li>
                    </ul>
                    <p>{item?.description}</p>
                  </div>
                </Link>
              ))
            ) : (<h2 className="text-light">لا يوجد كورسات تم شرائها</h2>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container text-center pt-5">
            {book?.books?.length != 0 ? (
              !loading && book?.books?.map((item, index) => (
                <Link
                  to={`/book/detalis-book/${item._id}`}
                  state={{ item }}
                  key={index}
                  className="row row-striped shadow-lg p-3 text-dark mb-5 bg-body rounded">
                  <div className="col-2 text-right">
                    <LazyLoadImage
                      src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                      alt={`${item.title}`}
                      style={{
                        width: '100px',
                        height: '100px'
                      }}
                    />
                  </div>
                  <div className="col-10 fs-4 text-end" >
                    <h3 className="text-uppercase d-flex flex-row align-items-center justify-content-between">
                      <strong>{item?.title}</strong>
                      <button type="button" className="btn btn-info px-5">
                        الذهاب الي الكتاب
                      </button>
                    </h3>
                    <ul className="list-inline">
                      <li className="list-inline-item mx-3"> <FaMoneyBillAlt size={30} style={{ margin: '0 10px' }} />{item?.price}</li>
                    </ul>
                    <p>{item?.description}</p>
                  </div>
                </Link>
              ))
            ) : (<h2 className="text-light">لا يوجد كتب تم شرائها</h2>)}
          </div>
        </TabPanel>
      </Tabs>


      <Footer />
    </div>
  )
}

export default MyWallet