import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/MainLayout/Header'
import Footer from './Components/MainLayout/Footer'
import ScrollToTop from "./Utils/scrollToTop"
const RootLayout = () => {
    return (
        <div>
            <Header />
            <ScrollToTop/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout