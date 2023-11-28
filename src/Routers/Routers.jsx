import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ErrorPage, Home, Login, Payment, Shop, SignUp } from '@/pages';

const Routers = () => {
  return (
    <div className='conatiner'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
