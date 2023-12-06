import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'

const index = () => {
  return (
   <div className="root-layout">
    <header>
        <nav>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
        </nav>
    </header>
    <main>
        <Outlet/>
    </main>
   </div>
  )
}

export default index