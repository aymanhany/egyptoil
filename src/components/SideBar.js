import React, {useEffect, useState} from 'react'

import Moment from 'react-moment';
import 'moment-timezone';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SwiperArrows from './SwiperArrows';
import axios from 'axios';

SwiperCore.use([Navigation]);

function SideBar() {

    const [news, setNews] = useState([]);

    useEffect(async () => {
        await axios.get('https://egyptoil-gas.com/wp-json/wp/v2/news?per_page=5')
            .then(
                res => {
                    setNews(res.data)
                }
            )

    }, [])

    
    const featSidebarPrev = React.useRef(null);
    const featSidebarNext = React.useRef(null);


    return (
        <div className="sidebar">
            <div className="widget social-widget">
                <div className="title-section">
                    <h1><span>Stay Connected</span></h1>
                </div>
                <ul className="social-share">
                    <li>
                        <a href="#" className="rss"><i className="fa fa-rss" /></a>
                        <span className="number">9,455</span>
                        <span>Subscribers</span>
                    </li>
                    <li>
                        <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
                        <span className="number">56,743</span>
                        <span>Fans</span>
                    </li>
                    <li>
                        <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
                        <span className="number">43,501</span>
                        <span>Followers</span>
                    </li>
                    <li>
                        <a href="#" className="google"><i className="fa fa-google-plus" /></a>
                        <span className="number">35,003</span>
                        <span>Followers</span>
                    </li>
                </ul>
            </div>
            <div className="widget features-slide-widget">
                <div className="title-section">
                    <h1><span>Featured Posts</span></h1>
                    <SwiperArrows color="#000" prev={featSidebarPrev} next={featSidebarNext} />
                </div>
                <div className="image-post-slider">
                    <Swiper
                        slidesPerView={1}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = featSidebarPrev.current;
                            swiper.params.navigation.nextEl = featSidebarNext.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                    >
                        {
                            news.map(post => (
                                <SwiperSlide key={post.id}>
                                    <li>
                                        <div className="news-post image-post2">
                                            <div className="post-gallery">
                                                <img src={post.featured_media_src_url} alt={post.title.rendered} />
                                                <div className="hover-box">
                                                    <div className="inner-hover">
                                                        <h2><a href="single-post.html">{post.title.rendered}</a></h2>
                                                        <ul className="post-tags">
                                                            <li><i className="fa fa-clock-o" /><Moment format="YYYY/MM/DD">{post.title.date}</Moment></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </div>
            <div className="widget subscribe-widget">
                <form className="subscribe-form">
                    <h1>Subscribe to RSS Feeds</h1>
                    <input type="text" name="sumbscribe" id="subscribe" placeholder="Email" />
                    <button id="submit-subscribe">
                        <i className="fa fa-arrow-circle-right" />
                    </button>
                    <p>Get all latest content delivered to your email a few times a month.</p>
                </form>
            </div>
            <div className="advertisement">
                <div className="desktop-advert">
                    <span>Advertisement</span>
                    <img src="../../upload/addsense/300x250.jpg" alt="" />
                </div>
                <div className="tablet-advert">
                    <span>Advertisement</span>
                    <img src="../../upload/addsense/200x200.jpg" alt="" />
                </div>
                <div className="mobile-advert">
                    <span>Advertisement</span>
                    <img src="../../upload/addsense/300x250.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SideBar
