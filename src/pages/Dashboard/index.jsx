import { ChartDash, WidgetCart } from "@/components"
import { SidebarDashboard } from "@/layout"
import './dashboard.scss'
const Dashboard = () => {
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>DASHBOARD</h2>
        </div>
        <WidgetCart />
        <ChartDash />
      </div>

    </div>
  )
}

export default Dashboard