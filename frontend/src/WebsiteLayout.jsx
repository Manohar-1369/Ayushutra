import React from 'react'
import Navbar1 from './Navbar1'
import { Outlet } from 'react-router-dom'
import Footer1 from './footer1'

export default function WebsitePage() {
  return (
    <>
        <Navbar1/>
        <Outlet/>
        <Footer1/>
      
    </>
  )
}
