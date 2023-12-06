import { ChartDash, WidgetCart } from "@/components"
import { SidebarDashboard } from "@/layout"
import './dashboard.scss'
const Dashboard = () => {
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <h1>DASHBOARD</h1>
        <WidgetCart />
        <ChartDash  />
      </div>

    </div>
  )
}

export default Dashboard