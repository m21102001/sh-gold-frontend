import { Link } from "react-router-dom"
import { SidebarDashboard } from "@/layout"
import { InvestmentActive, InvestmentInActive } from "@/components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './investment.scss'
import { getCookie } from "cookies-next";

const InvesmentDash = () => {

  return (
    <>
      {getCookie('role') == 'user' &&
        <div className="m-auto loading">
          <h2>YOU ARE NOT PROVIDE</h2>
          <h2>PLEASE <span className="text-danger"><Link to={'auth/login'}> SINGIN</Link></span> AND BACK</h2>
        </div>}
      <div className="dashboard d-flex flex-row">
        <SidebarDashboard />
        <div className="container text-center">
          <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
            <h2 className='fs-1 fw-bold'>صفحة الافكار</h2>
          </div>
          <Link to="/dash/create-investment-item">
            <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافة فكرة جديدة</button>
          </Link>

          <Tabs>
            <TabList>
              <Tab> افكار تم تفعيلها</Tab>
              <Tab>افكار لم يتم تفعيلها  </Tab>
            </TabList>

            <TabPanel>
              <InvestmentActive />
            </TabPanel>
            <TabPanel>
              <InvestmentInActive />
            </TabPanel>
          </Tabs>

        </div>
      </div>
    </>
  )
}

export default InvesmentDash