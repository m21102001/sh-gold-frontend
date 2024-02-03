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
  ConsultationsTicketDash,
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
  DetailsConsultationsTicketDash,
  DetailsGoldBarsSell,
  DetailsGoldDash,
  DetailsGoldNewsClub,
  DetailsIdeaRequestInvestment,
  DetailsInactiveInvesmentDash,
  DetailsInvesmentDash,
  DetailsPlaylistDash,
  DetailsPlaylistDevelopment,
  DetailsRequestBuyBooksDash,
  DetailsRequestGoldDash,
  DetailsRequestInvestment,
  DetailsSubscriberClubDash,
  DetailsVideoDevelopment,
  DetailsVideosDash,
  Development,
  EditProfile,
  ErrorPage,
  GoldBarsSell,
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
  RequestBuyBooksDash,
  RequestGoldDash,
  RequestInvestment,
  RequsetPaymentBook,
  RequsetPaymentConsultations,
  RequsetPaymentGold,
  RequsetPaymentPlan,
  RequsetPaymentPlanSilver,
  RequsetPaymentPlaylist,
  ReservationTicket,
  ResetPassword,
  ResetPasswordOtp,
  Shop,
  SignUp,
  SubscriberClubDash,
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
import { useAuth, authenticated } from '@/context/Auth';
import { Suspense, lazy } from 'react';
import MyWalletRequsetSall from '@/pages/MyWalletRequsetSall';
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
  // return children;
  // const allowedUser = user.role == 'user';
  // if (authed === protect)
  //   return <Navigate to={protect ? '/auth/login' : '/'} />;
  // if (!authed && protect) {
  //   return <Navigate to="/auth/login" />;
  // }
}
const Routers = () => {
  return (
    <div className="conatiner">
      <Suspense fallback="loading....................">
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
                <Protect >
                  <Shop />
                </Protect>
              }
            />
            <Route
              path="/auth/request/payment/playlist"
              element={
                <Protect >
                  <RequsetPaymentPlaylist />
                </Protect>
              }
            />
            <Route
              path="/auth/request/payment/book"
              element={
                <Protect >
                  <RequsetPaymentBook />
                </Protect>
              }
            />
            <Route
              path="/auth/request/payment/gold"
              element={
                <Protect >
                  <RequsetPaymentGold />
                </Protect>
              }
            />
            <Route
              path="/auth/request/payment/plan/gold"
              element={
                <Protect >
                  <RequsetPaymentPlan />
                </Protect>
              }
            />
            <Route
              path="/auth/request/payment/plan/silver"
              element={
                <Protect >
                  <RequsetPaymentPlanSilver />
                </Protect>
              }
            />
            <Route
              path="/auth/request/payment/consultations"
              element={
                <Protect >
                  <RequsetPaymentConsultations />
                </Protect>
              }
            />
            <Route
              path="/auth/sign-up"
              element={
                <Protect >
                  <SignUp />
                </Protect>
              }
            />
            <Route path="/auth/payment" element={<Payment />} />
            <Route
              path="/auth/login"
              element={
                <Protect >
                  <Login />
                </Protect>
              }
            />
            <Route
              path="/auth/verifyCode"
              element={
                <Protect >
                  <VerifyRestCode />
                </Protect>
              }
            />
            <Route
              path="/auth/verifyphoneCode"
              element={
                <Protect >
                  <VerifyPhoneCode />
                </Protect>
              }
            />
            <Route
              path="/auth/update-password"
              element={
                <Protect >
                  <UpdatePassword />
                </Protect>
              }
            />
            <Route
              path="/auth/edit-profile"
              element={
                <Protect >
                  <EditProfile />
                </Protect>
              }
            />
            <Route
              path="/auth/resetPassword"
              element={
                <Protect >
                  <ResetPassword />
                </Protect>
              }
            />
            <Route
              path="/auth/resetPasswordOtp"
              element={
                <Protect >
                  <ResetPasswordOtp />
                </Protect>
              }
            />
            <Route
              path="/auth/reservation-ticket"
              element={
                <Protect >
                  <ReservationTicket />
                </Protect>
              }
            />
            <Route
              path="/auth/my-wallet"
              element={
                <Protect >
                  <MyWallet />
                </Protect>
              }
            />
            <Route
              path="/auth/my-wallet/request/sall"
              element={
                <Protect >
                  <MyWalletRequsetSall />
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
                  <Dashboard />
                </Protect>
              }
            />
            <Route
              path="/dash/gold"
              element={
                <Protect path="dash" protect>
                  <GoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/gold/request"
              element={
                <Protect path="dash" protect>
                  <RequestGoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/gold/request/details/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsRequestGoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-gold/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsGoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-gold-item"
              element={
                <Protect path="dash" protect>
                  <CreateGoldDahs />
                </Protect>
              }
            />
            <Route
              path="/dash/update-gold/:id"
              element={
                <Protect path="dash" protect>
                  <UpdateGoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/books"
              element={
                <Protect path="dash" protect>
                  <BooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/books/requests"
              element={
                <Protect path="dash" protect>
                  <RequestBuyBooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/books/requests/details/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsRequestBuyBooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-books"
              element={
                <Protect path="dash" protect>
                  <CreateBookDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-books/:id"
              element={
                <Protect path="dash" protect>
                  <UpdateBooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-books/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsBooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/investment"
              element={
                <Protect path="dash" protect>
                  <InvesmentDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-investment-item"
              element={
                <Protect path="dash" protect>
                  <CreateInvesmentDash />
                </Protect>
              }
            />
            <Route
              path="dash/details-investment/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsInvesmentDash />
                </Protect>
              }
            />
            <Route
              path="/investment/inactive/details-investment/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsInactiveInvesmentDash />
                </Protect>
              }
            />
            <Route
              path="/investment/inactive/update-investment/:id"
              element={
                <Protect path="dash" protect>
                  <UpdateInactiveInvesmentDash />
                </Protect>
              }
            />
            <Route
              path="/dash/requests-investment"
              element={
                <Protect path="dash" protect>
                  <RequestInvestment />
                </Protect>
              }
            />
            <Route
              path="/dash/details-requests-investment/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsRequestInvestment />
                </Protect>
              }
            />
            <Route
              path="/dash/details-idea-requests-investment/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsIdeaRequestInvestment />
                </Protect>
              }
            />
            <Route
              path="/dash/club"
              element={
                <Protect path="dash" protect>
                  <ClubDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-club"
              element={
                <Protect path="dash" protect>
                  <CreateClubDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-club/:id"
              element={
                <Protect path="dash" protect>
                  <UpdateClubDash />
                </Protect>
              }
            />

            <Route
              path="/dash/subscriber-club"
              element={
                <Protect path="dash" protect>
                  <SubscriberClubDash />
                </Protect>
              }
            />
            <Route
              path="/dash/subscriber-club/details/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsSubscriberClubDash />
                </Protect>
              }
            />

            <Route
              path="/dash/contact-form"
              element={
                <Protect path="dash" protect>
                  <ContactFormDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-contact-form/:id"
              element={
                <Protect path="dash" protect>
                  <DeatilsContactFormDash />
                </Protect>
              }
            />
            <Route
              path="/dash/all-users"
              element={
                <Protect path="dash" protect>
                  <AllUsersDash />
                </Protect>
              }
            />
            <Route
              path="/dash/all-users/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsAllUsersDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-role-user/:id"
              element={
                <Protect path="dash" protect>
                  <UpdateRoleUsersDash />
                </Protect>
              }
            />
            <Route
              path="/dash/playlists"
              element={
                <Protect path="dash" protect>
                  <PlaylistsDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-playlist-item"
              element={
                <Protect path="dash" protect>
                  <CreatePlaylistDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-playlist/:id"
              element={
                <Protect path="dash" protect>
                  <UpdatePlaylistDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-playlist/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsPlaylistDash />
                </Protect>
              }
            />
            <Route
              path="/dash/videos"
              element={
                <Protect path="dash" protect>
                  <VideosDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-video-item"
              element={
                <Protect path="dash" protect>
                  <CreateVideosDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-videos/:id"
              element={
                <Protect path="dash" protect>
                  <UpdateVideosDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-videos/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsVideosDash />
                </Protect>
              }
            />
            <Route
              path="/dash/consultations"
              element={
                <Protect path="dash" protect>
                  <ConsultationsDash />
                </Protect>
              }
            />
            <Route
              path="/dash/consultations-ticket"
              element={
                <Protect path="dash" protect>
                  <ConsultationsTicketDash />
                </Protect>
              }
            />
            <Route
              path="/dash/consultations-ticket/details/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsConsultationsTicketDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-consultation-item"
              element={
                <Protect path="dash" protect>
                  <CreateConsultationsDash />
                </Protect>
              }
            />
            <Route
              path="/dash/gold-bars/sell"
              element={
                <Protect path="dash" protect>
                  <GoldBarsSell />
                </Protect>
              }
            />
            <Route
              path="/dash/gold-bars/sell/details/:id"
              element={
                <Protect path="dash" protect>
                  <DetailsGoldBarsSell />
                </Protect>
              }
            />

            <Route
              path="/dash/profile"
              element={
                <Protect path="dash" protect>
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
