import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import { Footer, Navbar } from '@/layout';
import axios from '@/api/axios';

const Shop = () => {
  const item = useLocation()?.state?.item;
  const [payment, setPayment] = useState([])
console.log(item);
  useEffect(() => {
    axios.get(`consultation/tickets/pay/${item?._id}`)
      .then((response) => {
        setPayment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  return (
    <div style={{ backgroundColor: 'var(--darkblue-color)' }}>
      <Navbar />
      <div className='text-center pt-5'>
        <button className="text-muted fs-2 fw-bold mb-0 text-center">
          <a
            className="text-light px-3"
            href={payment?.data}
            target="_blank"
            rel="noreferrer">
            ادفع الان
          </a>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
