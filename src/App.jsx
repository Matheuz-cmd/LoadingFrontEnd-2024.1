import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeaderMobile from './components/HeaderMobile'
import SliderNews from './components/SliderNews'
import MarketMovers from './components/MarketMovers'
import StocksNews from './components/StocksNews'
import TickerCarousel from './components/TickerCarousel'
import ReitsNews from './components/ReitsNews'
import AsideNews from './components/AsideNews'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
