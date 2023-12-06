import "./navbar.module.scss"
import logo from "../../assets/Cambridge-logo-.svg"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg mainNavbar" style={{ background: "var(--darkblue-color)" }}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="/"><img className="img-logo" src={logo} alt="" srcSet="Cambridge logo" style={{ width: "10rem", height: "4rem", background: "#e9ecef", borderRadius: "10px" }} /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli active" aria-current="page" to="/">الرئيسيه</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/club">نادى كنز</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/develpment">التدريب و التطوير</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/Consulting">الاستشارات</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to="/investment">الاستثمار</NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli" to={'/contactUS'}>تواصل معنا</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control ms-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="mx-2 px-3" type="submit">Search</button>
            </form>
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