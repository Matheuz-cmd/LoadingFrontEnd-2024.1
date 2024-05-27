import React from "react";
import '/src/App.css'
import SliderNews from '/src/components/SliderNews'
import MarketMovers from '/src/components/MarketMovers'
import StocksNews from '/src/components/StocksNews'
import TickerCarousel from '/src/components/TickerCarousel'
import ReitsNews from '/src/components/ReitsNews'
import AsideNews from '/src/components/AsideNews'

export default function Home() {
    return(
        <>
        <TickerCarousel/>
        <section className='journal-page'>
            <main>
                <SliderNews/>
                <div className="divisor-bar"></div>
                <StocksNews/>
                <div className="divisor-bar"></div>
                <ReitsNews/>
            </main>
            <aside>
                <MarketMovers/>
                <AsideNews/>
                <AsideNews/>
            </aside>
        </section>
        <section className='journal-page mobile'>
            <main>
                <SliderNews/>
                <MarketMovers/>
                <div className="divisor-bar"></div>
                <StocksNews/>
                <AsideNews/>
                <div className="divisor-bar"></div>
                <ReitsNews/>
                <AsideNews/>
            </main>
        </section>
        </>
    )
}