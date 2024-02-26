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
  ConsaltationSubscriberClubDash,
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
  RequsetDeliveryPaymentBook,
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
import { Suspense, lazy } from 'react';
import MyWalletRequsetSall from '@/pages/MyWalletRequsetSall';
import { authenticated, useAuth } from '@/context/Auth';
const Dashboard = lazy(() => import('../pages/Dashboard/index'));

function Protect({ children, protect = false, path = '', role = 'user' }) {
  const { user } = useAuth();
  const authed = authenticated();

  if (
    authed === protect &&
    (role === 'admin' || role === 'godAdmin' || role === 'manager') &&
    path === 'dash'
  ) {
    return children;
  }

  if (
    authed === protect &&
    role === 'user' &&
    authed !== true &&
    path !== 'login'
  )
    return <Navigate to={'/'} />;
  if (authed === protect && path !== 'dash') return children;
  return <Navigate to={protect ? '/auth/login' : '/'} />;
}
const Routers = () => {
  const allowed = useAuth().user;

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
            <Route path="/book/detalis-book/:id" element={<DetailsBook/>} />
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
                <Protect protect>
                  <Shop />
                </Protect>
              }
            />
            <Route
              path="/auth/request/payment/playlist"
              element={
                // <Protect >
                <RequsetPaymentPlaylist />
                // </Protect>
              }
            />
            <Route
              path="/auth/request/payment/book"
              element={
                // <Protect >
                <RequsetPaymentBook />
                // </Protect>
              }
            />
            <Route
              path="/auth/request/payment/book/delivary"
              element={
                // <Protect >
                <RequsetDeliveryPaymentBook />
                // </Protect>
              }
            />
            <Route
              path="/auth/request/payment/gold"
              element={
                // <Protect >
                <RequsetPaymentGold />
                // </Protect>
              }
            />
            <Route
              path="/auth/request/payment/plan/gold"
              element={
                // <Protect >
                <RequsetPaymentPlan />
                // </Protect>
              }
            />
            <Route
              path="/auth/request/payment/plan/silver"
              element={
                // <Protect >
                <RequsetPaymentPlanSilver />
                // </Protect>
              }
            />
            <Route
              path="/auth/request/payment/consultations"
              element={
                // <Protect >
                <RequsetPaymentConsultations />
                // </Protect>
              }
            />
            <Route
              path="/auth/sign-up"
              element={
                // <Protect >
                <SignUp />
                // </Protect>
              }
            />
            <Route path="/auth/payment" element={<Payment />} />
            <Route
              path="/auth/login"
              element={
                <Protect path="login">
                  <Login />
                </Protect>
              }
            />
            <Route
              path="/auth/verifyCode"
              element={
                // <Protect >
                <VerifyRestCode />
                // </Protect>
              }
            />
            <Route
              path="/auth/verifyphoneCode"
              element={
                // <Protect >
                <VerifyPhoneCode />
                // </Protect>
              }
            />
            <Route
              path="/auth/update-password"
              element={
                // <Protect >
                <UpdatePassword />
                // </Protect>
              }
            />
            <Route
              path="/auth/edit-profile"
              element={
                // <Protect >
                <EditProfile />
                // </Protect>
              }
            />
            <Route
              path="/auth/resetPassword"
              element={
                // <Protect >
                <ResetPassword />
                // </Protect>
              }
            />
            <Route
              path="/auth/resetPasswordOtp"
              element={
                // <Protect >
                <ResetPasswordOtp />
                // </Protect>
              }
            />
            <Route
              path="/auth/reservation-ticket"
              element={
                // <Protect >
                <ReservationTicket />
                // </Protect>
              }
            />
            <Route
              path="/auth/my-wallet"
              element={
                // <Protect >
                <MyWallet />
                // </Protect>
              }
            />
            <Route
              path="/auth/my-wallet/request/sall"
              element={
                // <Protect >
                <MyWalletRequsetSall />
                // </Protect>
              }
            />
            <Route
              path="/auth/profile"
              element={
                // <Protect>
                <Profile />
                // </Protect>
              }
            />

            {/*///////////////////////////// Dashboard //////////////////////////*/}
            <Route
              path="/dash/dashboard"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <Dashboard />
                </Protect>
              }
            />
            <Route
              path="/dash/gold"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <GoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/gold/request"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <RequestGoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/gold/request/details/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsRequestGoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-gold/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsGoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-gold-item"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <CreateGoldDahs />
                </Protect>
              }
            />
            <Route
              path="/dash/update-gold/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <UpdateGoldDash />
                </Protect>
              }
            />
            <Route
              path="/dash/books"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <BooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/books/requests"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <RequestBuyBooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/books/requests/details/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsRequestBuyBooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-books"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <CreateBookDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-books/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <UpdateBooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-books/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsBooksDash />
                </Protect>
              }
            />
            <Route
              path="/dash/investment"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <InvesmentDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-investment-item"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <CreateInvesmentDash />
                </Protect>
              }
            />
            <Route
              path="dash/details-investment/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsInvesmentDash />
                </Protect>
              }
            />
            <Route
              path="/investment/inactive/details-investment/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsInactiveInvesmentDash />
                </Protect>
              }
            />
            <Route
              path="/investment/inactive/update-investment/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <UpdateInactiveInvesmentDash />
                </Protect>
              }
            />
            <Route
              path="/dash/requests-investment"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <RequestInvestment />
                </Protect>
              }
            />
            <Route
              path="/dash/details-requests-investment/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsRequestInvestment />
                </Protect>
              }
            />
            <Route
              path="/dash/details-idea-requests-investment/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsIdeaRequestInvestment />
                </Protect>
              }
            />
            <Route
              path="/dash/club"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <ClubDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-club"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <CreateClubDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-club/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <UpdateClubDash />
                </Protect>
              }
            />

            <Route
              path="/dash/subscriber-club"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <SubscriberClubDash />
                </Protect>
              }
            />
            <Route
              path="/dash/subscriber-club/details/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsSubscriberClubDash />
                </Protect>
              }
            />
            <Route
              path="/dash/subscriber-club/consaltation-ticket"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <ConsaltationSubscriberClubDash />
                </Protect>
              }
            />
            <Route
              path="/dash/contact-form"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <ContactFormDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-contact-form/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DeatilsContactFormDash />
                </Protect>
              }
            />
            <Route
              path="/dash/all-users"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <AllUsersDash />
                </Protect>
              }
            />
            <Route
              path="/dash/all-users/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsAllUsersDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-role-user/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <UpdateRoleUsersDash />
                </Protect>
              }
            />
            <Route
              path="/dash/playlists"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <PlaylistsDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-playlist-item"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <CreatePlaylistDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-playlist/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <UpdatePlaylistDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-playlist/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsPlaylistDash />
                </Protect>
              }
            />
            <Route
              path="/dash/videos"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <VideosDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-video-item"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <CreateVideosDash />
                </Protect>
              }
            />
            <Route
              path="/dash/update-videos/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <UpdateVideosDash />
                </Protect>
              }
            />
            <Route
              path="/dash/details-videos/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsVideosDash />
                </Protect>
              }
            />
            <Route
              path="/dash/consultations"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <ConsultationsDash />
                </Protect>
              }
            />
            <Route
              path="/dash/consultations-ticket"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <ConsultationsTicketDash />
                </Protect>
              }
            />
            <Route
              path="/dash/consultations-ticket/details/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsConsultationsTicketDash />
                </Protect>
              }
            />
            <Route
              path="/dash/create-consultation-item"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <CreateConsultationsDash />
                </Protect>
              }
            />
            <Route
              path="/dash/gold-bars/sell"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <GoldBarsSell />
                </Protect>
              }
            />
            <Route
              path="/dash/gold-bars/sell/details/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <DetailsGoldBarsSell />
                </Protect>
              }
            />

            <Route
              path="/dash/profile"
              element={
                <Protect path="dash" protect role={allowed?.role}>
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
