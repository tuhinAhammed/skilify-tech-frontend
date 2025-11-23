import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Header from './Components/MainLayout/Header'
import Footer from './Components/MainLayout/Footer'
import ScrollToTop from "./Utils/scrollToTop"
import { useDispatch, useSelector } from 'react-redux'
import { fetchLandingPageData } from './Redux/Slice/landingPageSlice'

const RootLayout = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const landingData = useSelector((state) => state?.landingPageData?.data)
  
    useEffect(() => {
      const fetchData = async () => {
        // Only fetch if data doesn't exist
        if (!landingData) {
          setLoading(true)
          setError(null)
          try {
            await dispatch(fetchLandingPageData()).unwrap()
          } catch (err) {
            setError(err.message || 'Failed to fetch data')
          } finally {
            setLoading(false)
          }
        }
      }
  
      fetchData()
    }, [dispatch, landingData])
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