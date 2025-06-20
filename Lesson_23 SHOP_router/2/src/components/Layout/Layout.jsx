import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Header from '@components/Header/Header'

const Layout = () => {
  return (
   <>
    <Header />

    <main>
        <Outlet />
    </main>
    
    <footer>
        <p>© 2025 Магазин на React</p>
    </footer>
   </>
  )
}

export default Layout