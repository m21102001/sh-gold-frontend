import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ErrorPage, GoldNews, GoldPrice, Home, Login, Payment, Shop, SignUp } from '@/pages';
import { Navbar } from '@/layout';

const Routers = () => {
  return (
    <div className='conatiner'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/goldPrice" element={<GoldPrice />} />
          <Route path="/gold-news/:id" element={<GoldNews />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
