import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { CgPlayList } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillGold } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import { PiFlagFill } from "react-icons/pi";
import { FaMessage } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

import "./sidebarDashboard.scss";

function SidebarDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <div className="main-div">
      <div
        className={`sidebar-div ${sidebarOpen ? "sidebar-open" : "sidebar-close"
          }`}
      >
        <div>
          <NavLink to={'/dash/dashboard'}>
            <div className="sidebar-logo">
              <img src="https://i.ibb.co/BZ9ZhLV/Cambridge-logo-pages-to-jpg-0001.jpg" alt="" width={180} height={64} style={{borderRadius:'10px'}}/>
            </div>
          </NavLink>
          <NavLink to="/dash/dashboard ">
            <AiFillHome /> <p className="fs-5 fw-bold me-4">الرئيسيه</p>
          </NavLink>
          <NavLink to="/dash/gold ">
            <AiFillGold /> <p className="fs-5 fw-bold me-4">الذهب</p>
          </NavLink>
          <NavLink to="/dash/books ">
            <IoBookSharp /> <p className="fs-5 fw-bold me-4">الكتب</p>
          </NavLink>
          <NavLink to="/dash/club ">
            <PiFlagFill /> <p className="fs-5 fw-bold me-4">نصايح النادى</p>
          </NavLink>
          <NavLink to="/dash/investment ">
            <PiFlagFill /> <p className="fs-5 fw-bold me-4">مشاريع الاستثمار</p>
          </NavLink>
          <NavLink to="/dash/videos ">
            <CgPlayList /> <p className="fs-5 fw-bold me-4">الفيديوهات</p>
          </NavLink>
          <NavLink to="/dash/contact-form ">
            <FaMessage /> <p className="fs-5 fw-bold me-4">الرسائل</p>
          </NavLink>
          <NavLink to="/dash/all-users ">
          <FaUsers /> <p className="fs-5 fw-bold me-4">كل المستخدمين</p>
          </NavLink>
          {/* <NavLink to="/dash/profile">
            <CgProfile /> <p className="fs-5 fw-bold me-4">الاستاذ صلاح</p>
          </NavLink> */}
        </div>
        <div
        className="d-flex justify-content-start"
          style={{ padding: "8px" }}
          // onClick={() => setSidebarOpen((pre) => !pre)}
        >
          <GiHamburgerMenu />
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default SidebarDashboard
