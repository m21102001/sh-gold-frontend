import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AiFillHome, AiFillGold } from 'react-icons/ai';
import { CgPlayList } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoBookSharp } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';
import { PiFlagFill } from 'react-icons/pi';
import { FaCodePullRequest, FaMessage } from 'react-icons/fa6';
import { GrProjects } from 'react-icons/gr';
import { FaTicketAlt, FaUsers } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from '@/api/axios';
import './sidebarDashboard.scss';
import { useAuth } from '@/context/Auth';

function SidebarDashboard() {
  const { user, setLoggedin, setRole, setuser } = useAuth();

  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="main-div">
      <div
        className={`sidebar-div ${
          sidebarOpen ? 'sidebar-open' : 'sidebar-close'
        }`}
      >
        <NavLink style={{ background: 'var(--darkblue-color)' }}>
          <button
            onClick={handelLogout}
            type="button"
            className="btn btn-danger"
          >
            <TbLogout color="#fff" size={30} />
            تسجيل الخروج
          </button>
        </NavLink>
        <div>
          <NavLink to={'/'}>
            <div className="sidebar-logo">
              <LazyLoadImage
                src="https://i.ibb.co/BZ9ZhLV/Cambridge-logo-pages-to-jpg-0001.jpg"
                alt=""
                width={180}
                height={64}
                style={{ borderRadius: '10px' }}
              />
            </div>
          </NavLink>
          <NavLink to="/dash/dashboard ">
            <AiFillHome /> <p className="fs-5 fw-bold me-4">الرئيسية</p>
          </NavLink>
          <NavLink to="/dash/gold ">
            <AiFillGold /> <p className="fs-5 fw-bold me-4">الذهب</p>
          </NavLink>
          <NavLink to="/dash/gold/request ">
            <AiFillGold /> <p className="fs-5 fw-bold me-4">طلبات شراء الذهب</p>
          </NavLink>
          <NavLink to="/dash/gold-bars/sell ">
            <FaTicketAlt /> <p className="fs-5 fw-bold me-4"> طلبات بيع الذهب </p>
          </NavLink>
          <NavLink to="/dash/books ">
            <IoBookSharp /> <p className="fs-5 fw-bold me-4">الكتب</p>
          </NavLink>
          <NavLink to="/dash/books/requests ">
            <IoBookSharp />{' '}
            <p className="fs-5 fw-bold me-4">طلبات شراء الكتب</p>
          </NavLink>
          <NavLink to="/dash/club ">
            <PiFlagFill /> <p className="fs-5 fw-bold me-4">التوصيات </p>
          </NavLink>
          <NavLink to="/dash/subscriber-club ">
            <PiFlagFill />{' '}
            <p className="fs-5 fw-bold me-4">الاعضاء المشتركين ف النادى </p>
          </NavLink>
          <NavLink to="/dash/subscriber-club/consaltation-ticket">
            <PiFlagFill />{' '}
            <p className="fs-5 fw-bold me-4">استشارات اعضاء النادى </p>
          </NavLink>
          <NavLink to="/dash/investment ">
            <GrProjects /> <p className="fs-5 fw-bold me-4">مشاريع الاستثمار</p>
          </NavLink>
          <NavLink to="/dash/requests-investment ">
            <FaCodePullRequest />{' '}
            <p className="fs-5 fw-bold me-4">طلبات المستثمرين</p>
          </NavLink>
          <NavLink to="/dash/playlists ">
            <CgPlayList /> <p className="fs-5 fw-bold me-4">الكورسات</p>
          </NavLink>
          <NavLink to="/dash/contact-form ">
            <FaMessage /> <p className="fs-5 fw-bold me-4">الرسائل</p>
          </NavLink>
          <NavLink to="/dash/consultations ">
            <FaTicketAlt /> <p className="fs-5 fw-bold me-4">الاستشارات</p>
          </NavLink>
          <NavLink to="/dash/consultations-ticket ">
            <FaTicketAlt />{' '}
            <p className="fs-5 fw-bold me-4">الاستشارات المحجوزة</p>
          </NavLink>
          <NavLink to="/dash/recomendation ">
            <FaTicketAlt />{' '}
            <p className="fs-5 fw-bold me-4">توصيات التداول</p>
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
          style={{ padding: '8px' }}
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

export default SidebarDashboard;
