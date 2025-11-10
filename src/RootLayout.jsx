import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/MainLayout/Header'
import Footer from './Components/MainLayout/Footer'

const RootLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout