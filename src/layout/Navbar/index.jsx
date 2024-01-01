import { Link, NavLink } from "react-router-dom"
import { RxAvatar } from 'react-icons/rx';
import logo from "../../assets/Cambridge-logo-.svg"
import "./navbar.module.scss"
import { useAuth } from "@/context/Auth";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  const { Loggedin } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg mainNavbar" style={{ background: "var(--darkblue-color)" }}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="/"><LazyLoadImage className="img-logo" src={logo} alt="" srcSet="Cambridge logo" style={{ width: "10rem", height: "4rem", background: "#e9ecef", borderRadius: "10px" }} /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli active" aria-current="page" to="/">الرئيسيه</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/bullion-store">متجر السبائك</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/book"> الكتب</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/club">نادى كامبردج</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/investment">الاستثمار</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/develpment">التدريب و التطوير</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/Consulting">الاستشارات</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/about-us">من نحن</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to={'/contactUS'}>تواصل معنا</NavLink>
              </li>
            </ul>
            {!Loggedin ? (
              <div>
                <Link to="/auth/login">
                  <button className={`login-btn`}>Login</button>
                </Link>
                <Link to="/auth/sign-up">
                  <button className={`signup-btn`}> Sign Up</button>
                </Link>
              </div>
            ) : (
              <>
                <RxAvatar className="fs-1 avatar text-light" />
                <br />
                {/* {user?.username} */}

                <button
                  onClick={() => {
                    // setNav((pre) => !pre);
                    localStorage.removeItem('token');
                    localStorage.removeItem('role');
                  }}
                  className={`logout-btn mx-4 p-2 fs-5`}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      {/* <main>
        <Outlet />
      </main> */}
    </>
  )
}

export default Navbar