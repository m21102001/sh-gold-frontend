import axios from "@/api/axios";
import { Footer, Navbar } from "@/layout";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillGolden } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

const MyWallet = () => {
  const [loading, setLoading] = useState(false)
  const [wallet, setWallet] = useState([])

  useEffect(() => {
    setLoading(true);
    if (getCookie('token')) {
      axios.get('/users/wallet/')
        .then((response) => {
          setLoading(false)
          setWallet(response.data)
          console.log('wallet', response.data);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }

  }, [])
  return (
    <div style={{ background: 'var(--darkblue-color' }}>
      <Navbar />
      <div className='m-auto d-flex justify-content-center my-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: 'var(--bs-yellow)' }}> محفظتى  </h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className="container text-center pt-5">
        {!loading && wallet?.wallet?.map((item, index) => (
          <div
            key={index}
            className="row row-striped shadow-lg p-3 mb-5 bg-body rounded">
            <div className="col-2 text-right">
              <LazyLoadImage
                src={`${import.meta.env.VITE_IMAGE_URL}1704405089363-Cambridge-logo-_pages-to-jpg-0001.jpg`}
                alt={`${item.title}`}
                style={{
                  width: '100px',
                  height: '100px'
                }}
              />
            </div>
            <div className="col-10 fs-4 text-end" >
              <h3 className="text-uppercase"><strong>{item?.title}</strong></h3>
              <ul className="list-inline">
                <li className="list-inline-item mx-3"><AiFillGolden color="gold" size={30} /> {item?.size} جرام</li>
                <li className="list-inline-item mx-3"> <BiCategory size={30} />{item?.category}</li>
                <li className="list-inline-item mx-3"> {item?.type}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default MyWallet