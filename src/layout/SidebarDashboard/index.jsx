import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillGold } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import { PiFlagFill } from "react-icons/pi";
import { FaMessage } from "react-icons/fa6";

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
          <NavLink to="/dash/dashboard ">
            <AiFillHome /> <p>الرئيسيه</p>
          </NavLink>
          <NavLink to="/dash/gold ">
            <AiFillGold /> <p>الذهب</p>
          </NavLink>
          <NavLink to="/dash/books ">
            <IoBookSharp /> <p>الكتب</p>
          </NavLink>
          <NavLink to="/dash/club ">
            <PiFlagFill /> <p>النادى</p>
          </NavLink>
          <NavLink to="/dash/contact-form ">
            <FaMessage /> <p>الرسائل</p>
          </NavLink>
          <NavLink to="/dash/profile">
            <CgProfile /> <p>الاستاذ صلاح</p>
          </NavLink>
        </div>
        <div
          style={{ padding: "8px" }}
          onClick={() => setSidebarOpen((pre) => !pre)}
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
