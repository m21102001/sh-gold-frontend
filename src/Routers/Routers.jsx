import {
  Routes,
  Route,
  BrowserRouter as Router,

  Navigate
} from 'react-router-dom';
import {
  About,
  AllUsersDash,
  Book,
  BooksDash,
  Club,
  ClubDash,
  Consulting,
  ContactFormDash,
  CreateBookDash,
  CreateClubDash,
  CreateGoldDahs,
  CreateVideosDash,
  Dashboard,
  DeatilsContactFormDash,
  DetailsAllUsersDash,
  DetailsGoldDash,
  DetailsVideosDash,
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
  UpdateClubDash,
  UpdateGoldDash,
  UpdateRoleUsersDash,
  UpdateVideosDash,
  VerifyRestCode,
  VideosDash
} from '@/pages';
import ContactUs from '@/pages/ContactUS';
import { useAuth } from '@/context/Auth';

const Routers = () => {
  const { Loggedin, role } = useAuth();
  const Protect = ({ children }) => {


    if (Loggedin && role === "admin" || role === 'godAdmin' || role === 'manager') {
      return <Navigate to={"/dash/dashboard"} />

    } else {
      if (role === 'user') {
        return <Navigate to={"/"} />
      }
      return children;
    }

  }
  return (
    <div className='conatiner'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/club' element={<Club />} />
          <Route path="/goldPrice" element={<GoldPrice />} />
          <Route path="/gold-news/:id" element={<GoldNews />} />
          <Route path='/book' element={<Book />} />
          <Route path='/Consulting' element={<Consulting />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          {/* auth */}
          <Route path="/auth/shop" element={
            <Protect>
              <Shop />
            </Protect>
          } />
          <Route
            path="/auth/sign-up"
            element={
              <Protect>
                <SignUp />
              </Protect>} />
          <Route
            path="/auth/payment"
            element={<Payment />} />
          <Route
            path="/auth/login"
            element={
              <Protect>
                <Login />
              </Protect>} />
          <Route
            path="/auth/verifyCode"
            element={
              <Protect>
                <VerifyRestCode />
              </Protect>} />
          <Route
            path="/auth/resetPassword"
            element={
              <Protect>
                <ResetPassword />
              </Protect>} />
          <Route
            path="/auth/resetPasswordOtp"
            element={
              <Protect>
                <ResetPasswordOtp />
              </Protect>} />
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
          <Route path="/dash/create-club" element={<CreateClubDash />} />
          <Route path="/dash/update-club/:id" element={<UpdateClubDash />} />
          <Route path="/dash/contact-form" element={<ContactFormDash />} />
          <Route path="/dash/details-contact-form/:id" element={<DeatilsContactFormDash />} />
          <Route path="/dash/all-users" element={<AllUsersDash />} />
          <Route path="/dash/all-users/:id" element={<DetailsAllUsersDash />} />
          <Route path="/dash/update-role-user/:id" element={<UpdateRoleUsersDash />} />
          <Route path='/dash/videos' element={<VideosDash />} />
          <Route path='/dash/create-video-item' element={<CreateVideosDash />} />
          <Route path='/dash/update-videos/:id' element={<UpdateVideosDash />} />
          <Route path='/dash/details-videos/:id' element={<DetailsVideosDash />} />

          <Route path="/dash/profile" element={<ProfileDash />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;