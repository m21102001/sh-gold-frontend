import { useEffect, useState } from "react";
import { Footer, Navbar } from "@/layout";
import axios from "@/api/axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillGolden } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyWallet = () => {
  const [loading, setLoading] = useState(false)
  const [wallet, setWallet] = useState([])
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
  // console.log(wallet);
  return (
    <div style={{ background: 'var(--darkblue-color' }}>
      <Navbar />
      <div className='m-auto d-flex justify-content-center my-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: 'var(--bs-yellow)' }}> محفظتى  </h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className="container text-center pt-5">
        {!loading && wallet?.map((item, index) => (
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
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default MyWallet