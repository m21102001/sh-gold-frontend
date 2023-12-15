import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import {
  AllUsersDash,
  BooksDash,
  Club,
  ClubDash,
  ContactFormDash,
  CreateBookDash,
  CreateGoldDahs,
  Dashboard,
  DeatilsContactFormDash,
  DetailsAllUsersDash,
  DetailsGoldDash,
  ErrorPage,
  GoldDash,
  GoldNews,
  GoldPrice,
  Home,
  Login,
  Payment,
  ProfileDash,
  ResetPassword,
  ResetPasswordOtp,
  Shop,
  SignUp,
  UpdateBooksDash,
  UpdateGoldDash,
  UpdateRoleUsersDash,
  VerifyRestCode
} from '@/pages';
import ContactUs from '@/pages/ContactUS';

const Routers = () => {
  return (
    <div className='conatiner'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/club' element={<Club />} />
          <Route path="/goldPrice" element={<GoldPrice />} />
          <Route path="/gold-news/:id" element={<GoldNews />} />
          <Route path="/contactUs" element={<ContactUs />} />
          {/* auth */}
          <Route path="/auth/shop" element={<Shop />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/auth/payment" element={<Payment />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/verifyCode" element={<VerifyRestCode />} />
          <Route path="/auth/resetPassword" element={<ResetPassword />} />
          <Route path="/auth/resetPasswordOtp" element={<ResetPasswordOtp />} />
          {/* Dashboard */}
          <Route path="/dash/dashboard" element={<Dashboard />} />
          <Route path="/dash/gold" element={<GoldDash />} />
          <Route path="/dash/details-gold/:id" element={<DetailsGoldDash />} />
          <Route path="/dash/create-gold-item" element={<CreateGoldDahs />} />
          <Route path="/dash/update-gold/:id" element={<UpdateGoldDash />} />
          <Route path="/dash/books" element={<BooksDash />} />
          <Route path="/dash/create-books" element={<CreateBookDash />} />
          <Route path="/dash/update-books/:id" element={<UpdateBooksDash />} />
          <Route path="/dash/club" element={<ClubDash />} />
          <Route path="/dash/contact-form" element={<ContactFormDash />} />
          <Route path="/dash/details-contact-form/:id" element={<DeatilsContactFormDash />} />
          <Route path="/dash/all-users" element={<AllUsersDash />} />
          <Route path="/dash/all-users/:id" element={<DetailsAllUsersDash />} />
          <Route path="/dash/update-role-user/:id" element={<UpdateRoleUsersDash />} />

          <Route path="/dash/profile" element={<ProfileDash />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;