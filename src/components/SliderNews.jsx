import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/hash-navigation'
import 'swiper/css';

export default function SliderNews(){
    const data = [
        {id: '1', image: '/src/assets/news1.png', section: 'CRYPTOCURRENCY',
        content: 'ETF Spotlight: CONL Rises With Crypto, Falls on CME', 
        author: 'James Rubin', date:'may 17, 2024'},
        {id: '2', image: '/src/assets/news2.png', section: 'ADVISOR CENTER',
        content: 'Schwab RIA Boss Bernie Clark to Retire', 
        author: 'Jeff Benjamin', date:'may 17, 2024'}
    ]

    return(
        <div className="news-block">
            <h1>Latest News</h1>
            <div className="news-wrapper">
                <div className="main-news-wrapper">
                    <Swiper
                        slidesPerView={1}
                        pagination= {{ clickable: true}}
                        navigation
                    >
                        {data.map( item =>(
                            <SwiperSlide key={item.id}>
                                <img 
                                    src={item.image}
                                    alt="Slider"
                                    className='slide-item' />
                                <div className="main-news-box">
                                    <span className='news-section'>{item.section}</span>
                                    <h2>{item.content}</h2>
                                    <span>
                                    {item.author}
                                    <span> | </span>
                                    {item.date}  
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="other-news-wrapper">
                    <div className="other-news-box">
                        <h2>ETF Investors Shrugging Off Geopolitical Issues</h2>
                        <span>
                            Jeff Benjamin 
                            <span> | </span>
                            May 20, 2024
                        </span>
                    </div>
                    <div className="other-news-box">
                        <h2>Nate Geraci on the Outlook of Digital Asset ETFs</h2>
                        <span>
                            May 20, 2024
                        </span>
                    </div>
                    <div className="other-news-box">
                        <h2>Mexico ETFs: 'Multi-Year' Opportunity Approaches</h2>
                        <span>
                            Tom Eckett 
                            <span> | </span>
                            May 20, 2024
                        </span>
                    </div>
                    <div className="other-news-box">
                    <h2>GameStop Saga Reminds Us Meme ETFs Are a Bad Idea</h2>
                        <span>
                            Sumit Roy
                            <span> | </span>
                            May 20, 2024
                        </span>
                    </div>
                    <div className="other-news-box">
                        <h2>ETF Spotlight: CONL Rises With Crypto, Falls on CME</h2>
                        <span>
                            James Rubin
                            <span> | </span>
                            May 17, 2024
                        </span>
                    </div>
                    <div className="other-news-box">
                        <h2>Schwab RIA Boss Bernie Clark to Retire</h2>
                        <span>
                            Jeff Benjamin
                            <span> | </span>
                            May 17, 2024
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}