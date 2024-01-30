import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import {
  About,
  AddNewIdea,
  AllUsersDash,
  Book,
  BooksDash,
  BullionStore,
  Club,
  ClubDash,
  ConsultationsDash,
  Consulting,
  ContactFormDash,
  ContactUS,
  CreateBookDash,
  CreateClubDash,
  CreateConsultationsDash,
  CreateGoldDahs,
  CreateInvesmentDash,
  CreatePlaylistDash,
  CreateVideosDash,
  DeatilsContactFormDash,
  DetailsAllUsersDash,
  DetailsBook,
  DetailsBooksDash,
  DetailsGoldDash,
  DetailsGoldNewsClub,
  DetailsIdeaRequestInvestment,
  DetailsInactiveInvesmentDash,
  DetailsInvesmentDash,
  DetailsPlaylistDash,
  DetailsPlaylistDevelopment,
  DetailsRequestInvestment,
  DetailsVideoDevelopment,
  DetailsVideosDash,
  Development,
  EditProfile,
  ErrorPage,
  GoldDash,
  GoldNews,
  Home,
  InvesmentDash,
  InvestmantPage,
  Login,
  MyWallet,
  Payment,
  PlaylistsDash,
  Profile,
  ProfileDash,
  ProjectIdea,
  RequestInvestment,
  ReservationTicket,
  ResetPassword,
  ResetPasswordOtp,
  Shop,
  SignUp,
  UpdateBooksDash,
  UpdateClubDash,
  UpdateGoldDash,
  UpdateInactiveInvesmentDash,
  UpdatePassword,
  UpdatePlaylistDash,
  UpdateRoleUsersDash,
  UpdateVideosDash,
  VerifyPhoneCode,
  VerifyRestCode,
  VideosDash,
  ViewPdf,
} from '@/pages';
import { getCookie } from 'cookies-next';
import { useAuth, authenticated } from '@/context/Auth';
import { Suspense, lazy } from 'react';
const Dashboard = lazy(() => import('../pages/Dashboard/index'));

function Protect({ children, protect = false, path = '' }) {
  const { user } = useAuth();
  console.log(user != null);
  const authed = authenticated();
  console.log(authed);
  const allowedAdmin =
    user?.role == 'admin' ||
    user?.role == 'godAdmin' ||
    user?.role == 'manager';
  if (allowedAdmin && authed && path === 'dash') {
    return children;
  }
  if (!allowedAdmin && authed && path !== 'dash') {
    return children;
  }
  if (authed === protect && !authed) return children;
  if (!authed && protect) {
    return <Navigate to="/auth/login" />;
  }
  // const allowedUser = user.role == 'user';
  // if (authed === protect)
  //   return <Navigate to={protect ? '/auth/login' : '/'} />;
  // if (!authed && protect) {
  //   return <Navigate to={'/auth/login'} />;
  // }
}
const Routers = () => {
  // const navigate = useNavigate();
  // const { Loggedin, role } = useAuth();
  // console.log(getCookie('role'));

  // const AdminPrivate = ({ children }) => {
  //   useEffect(() => {
  //     if (role == "admin" || role == "manager" || role == "manager") {
  //       <Navigate to='/dash/dashboard' />
  //     }
  //   }, [role]);
  //   return children;
  // };
  // const AuthRoute = () => {
  //   const location = useLocation()
  //   getCookie('token') !== null ? (
  //     (getCookie('role') == "admin" || getCookie('role') == "godAdmin" || getCookie('role') == "manager") ? (
  //       <Navigate to="/dash/dashboard" replace state={{ from: location }} />
  //     ) : (getCookie('role') == 'user' ? (
  //       <Navigate to="/" />
  //     ) : (''))
  //   ) : (""
  //     //  <Navigate to="/auth/login" replace/>
  //   )
  // }

  return (
    <div className="conatiner">
      <Suspense fallback="loading..">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bullion-store" element={<BullionStore />} />
            {/* <Route path='/bullion-store/:id' element={<BullionStoreItem />} /> */}
            <Route path="/club" element={<Club />} />
            <Route path="/investment" element={<InvestmantPage />} />
            <Route path="/club/project-idea/:id" element={<ProjectIdea />} />
            <Route path="/club/add-project-idea" element={<AddNewIdea />} />
            <Route
              path="/club/details-news/:id"
              element={<DetailsGoldNewsClub />}
            />
            <Route path="/view-more-details/:id" element={<ViewPdf />} />
            <Route path="/gold-news/:id" element={<GoldNews />} />
            <Route path="/book" element={<Book />} />
            <Route path="/book/detalis-book/:id" element={<DetailsBook />} />
            <Route path="/Consulting" element={<Consulting />} />
            <Route path="/development" element={<Development />} />
            <Route
              path="/development/details-playlist/:id"
              element={<DetailsPlaylistDevelopment />}
            />
            <Route
              path="/development/details-video/:id"
              element={<DetailsVideoDevelopment />}
            />
            <Route path="/about-us" element={<About />} />
            <Route path="/contactUs" element={<ContactUS />} />
            {/*///////////////////////// auth ///////////////////////////////////////*/}
            <Route
              path="/auth/shop"
              element={
                <Protect>
                  <Shop />
                </Protect>
              }
            />
            <Route
              path="/auth/sign-up"
              element={
                <Protect>
                  <SignUp />
                </Protect>
              }
            />
            <Route path="/auth/payment" element={<Payment />} />
            <Route
              path="/auth/login"
              element={
                <Protect>
                  <Login />
                </Protect>
              }
            />
            <Route
              path="/auth/verifyCode"
              element={
                <Protect>
                  <VerifyRestCode />
                </Protect>
              }
            />
            <Route
              path="/auth/verifyphoneCode"
              element={
                <Protect>
                  <VerifyPhoneCode />
                </Protect>
              }
            />
            <Route
              path="/auth/update-password"
              element={
                <Protect>
                  <UpdatePassword />
                </Protect>
              }
            />
            <Route
              path="/auth/edit-profile"
              element={
                <Protect>
                  <EditProfile />
                </Protect>
              }
            />
            <Route
              path="/auth/resetPassword"
              element={
                <Protect>
                  <ResetPassword />
                </Protect>
              }
            />
            <Route
              path="/auth/resetPasswordOtp"
              element={
                <Protect>
                  <ResetPasswordOtp />
                </Protect>
              }
            />
            <Route
              path="/auth/reservation-ticket"
              element={
                <Protect>
                  <ReservationTicket />
                </Protect>
              }
            />
            <Route
              path="/auth/my-wallet"
              element={
                <Protect>
                  <MyWallet />
                </Protect>
              }
            />
            <Route
              path="/auth/profile"
              element={
                <Protect>
                  <Profile />
                </Protect>
              }
            />

            {/*///////////////////////////// Dashboard //////////////////////////*/}
            <Route
              path="/dash/dashboard"
              element={
                <Protect path="dash" protect>
                  {' '}
                  <Dashboard />
                </Protect>
              }
            />
            <Route
              path="/dash/gold"
              element={
                <Protect path="dash">
                  <GoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-gold/:id"
              element={
                <Protect>
                  <DetailsGoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-gold-item"
              element={
                <Protect>
                  <CreateGoldDahs />
                </Protect>
              }
            />
            <Route
              path="/dash/update-gold/:id"
              element={
                <Protect>
                  <UpdateGoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/books"
              element={
                <Protect>
                  <BooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-books"
              element={
                <Protect>
                  <CreateBookDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-books/:id"
              element={
                <Protect>
                  <UpdateBooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-books/:id"
              element={
                <Protect>
                  <DetailsBooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/investment"
              element={
                <Protect>
                  <InvesmentDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-investment-item"
              element={
                <Protect>
                  <CreateInvesmentDash />
                </Protect>
              }
            />
            <Route
              path="dash/details-investment/:id"
              element={
                <Protect>
                  <DetailsInvesmentDash />
                </Protect>
              }
            />
            <Route
              path="/investment/inactive/details-investment/:id"
              element={
                <Protect>
                  <DetailsInactiveInvesmentDash />
                </Protect>
              }
            />
            <Route
              path="/investment/inactive/update-investment/:id"
              element={
                <Protect>
                  <UpdateInactiveInvesmentDash />
                </Protect>
              }
            />
            <Route
              path="/dash/requests-investment"
              element={
                <Protect>
                  <RequestInvestment />
                </Protect>
              }
            />
            <Route
              path="/dash/details-requests-investment/:id"
              element={
                <Protect>
                  <DetailsRequestInvestment />
                </Protect>
              }
            />
            <Route
              path="/dash/details-idea-requests-investment/:id"
              element={
                <Protect>
                  <DetailsIdeaRequestInvestment />
                </Protect>
              }
            />
            <Route
              path="/dash/club"
              element={
                <Protect>
                  <ClubDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-club"
              element={
                <Protect>
                  <CreateClubDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-club/:id"
              element={
                <Protect>
                  <UpdateClubDash />
                </Protect>
              }
            />
            <Route
              path="/dash/contact-form"
              element={
                <Protect>
                  <ContactFormDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-contact-form/:id"
              element={
                <Protect>
                  <DeatilsContactFormDash />
                </Protect>
              }
            />
            <Route
              path="/dash/all-users"
              element={
                <Protect>
                  <AllUsersDash />
                </Protect>
              }
            />
            <Route
              path="/dash/all-users/:id"
              element={
                <Protect>
                  <DetailsAllUsersDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-role-user/:id"
              element={
                <Protect>
                  <UpdateRoleUsersDash />
                </Protect>
              }
            />
            <Route
              path="/dash/playlists"
              element={
                <Protect>
                  <PlaylistsDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-playlist-item"
              element={
                <Protect>
                  <CreatePlaylistDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-playlist/:id"
              element={
                <Protect>
                  <UpdatePlaylistDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-playlist/:id"
              element={
                <Protect>
                  <DetailsPlaylistDash />
                </Protect>
              }
            />
            <Route
              path="/dash/videos"
              element={
                <Protect>
                  <VideosDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-video-item"
              element={
                <Protect>
                  <CreateVideosDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-videos/:id"
              element={
                <Protect>
                  <UpdateVideosDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-videos/:id"
              element={
                <Protect>
                  <DetailsVideosDash />
                </Protect>
              }
            />
            <Route
              path="/dash/consultations"
              element={
                <Protect>
                  <ConsultationsDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-consultation-item"
              element={
                <Protect>
                  <CreateConsultationsDash />
                </Protect>
              }
            />

            <Route
              path="/dash/profile"
              element={
                <Protect>
                  <ProfileDash />
                </Protect>
              }
            />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default Routers;
