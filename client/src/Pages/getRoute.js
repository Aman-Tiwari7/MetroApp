import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MetroRoutes from '../Components/MetroRoutes'

const GetRoute = () => {
  return (
    <>
    <Navbar />
      <MetroRoutes/>
      <Footer />
      </>
  )
}

export default GetRoute