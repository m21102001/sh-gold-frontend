import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import logo from '@/assets/Cambridge-logo-.svg';
import { useAuth } from '@/context/Auth';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from '@/api/axios';
import { CiMenuBurger } from "react-icons/ci";
import './navbar.module.scss';
const Navbar = () => {
  const { setRole, setuser, setLoggedin, user } = useAuth();
  const navigate = useNavigate();

  const handelLogout = async () => {
    try {
      await axios.post('/auth/logout', {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoggedin(false);
      setRole(undefined);
      setuser(undefined);
      navigate('/auth/login');
    }
  };

  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg mainNavbar"
        style={{
          background: 'var(--darkblue-color)',
          borderBottom: ' 1px solid var(--bs-gray-300)',
        }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="/">
            <LazyLoadImage
              className="img-logo"
              src={logo}
              alt="مؤسسة كامبردج تايم لريادة الاعمال"
              style={{
                width: '10rem',
                height: '4.5rem',
                // background: '#f1c40f54',
                borderRadius: '10px',
              }}
            />
          </NavLink>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <CiMenuBurger color='white' size={30} />
            {/* <span className="navbar-toggler-icon" style={{ backgroundImage: "url()" }}></span> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-2 ">
                <NavLink
                  className="nav-link navli active"
                  aria-current="page"
                  to="/"
                >
                  الرئيسية
                </NavLink>
              </li>
              {/* <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/bullion-store">
                  متجر السبائك
                </NavLink>
              </li> */}
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/book">
                  {' '}
                  الكتب
                </NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/club">
                  نادى كامبردج
                </NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/investment">
                  الفرص الاستثمارية
                </NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/development">
                  التدريب و التطوير
                </NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/Consulting">
                  الاستشارات
                </NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/about-us">
                  من نحن
                </NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to={'/contactUS'}>
                  تواصل معنا
                </NavLink>
              </li>
            </ul>
            {user === undefined ? (
              <div>
                <Link to="/auth/login">
                  <button className={`login-btn`}>تسجيل الدخول</button>
                </Link>
                <Link to="/auth/sign-up">
                  <button className={`signup-btn`}> انشاء حساب</button>
                </Link>
              </div>
            ) : (
              <>
                <Link to={'/auth/profile'}>
                  <RxAvatar className="fs-1 avatar text-light" />
                </Link>
                <button
                  onClick={handelLogout}
                  className={`logout-btn mx-4 p-2 fs-5`}
                >
                  تسجيل خروج
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
