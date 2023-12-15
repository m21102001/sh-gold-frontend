import { SidebarDashboard } from "@/layout"

const ClubDash = () => {
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
      <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>Club Dashboard</h2>
        </div>
      </div>

    </div>
  )
}

export default ClubDash