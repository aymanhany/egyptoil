import React, { useState, useEffect } from 'react'

import Moment from 'react-moment';
import 'moment-timezone';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SwiperArrows from '../SwiperArrows';
import axios from 'axios';

SwiperCore.use([Navigation]);



function TwoBoxes() {


    const [news, setNews] = useState([]);
    const [events, setEvents] = useState([])
    const [reports, setReports] = useState([])
    const [publications, setPublications] = useState([])
    const [tv, setTv] = useState([])

    useEffect(async () => {
        await axios.get('https://egyptoil-gas.com/wp-json/wp/v2/events_coverage?per_page=3')
            .then(
                res => {
                    setEvents(res.data);
                }
            )
        await axios.get('https://egyptoil-gas.com/wp-json/wp/v2/news?per_page=4')
            .then(
                res => {
                    setNews(res.data)
                }
            )

        await axios.get('https://egyptoil-gas.com/wp-json/wp/v2/reports?per_page=6')
            .then(
                res => {
                    setReports(res.data)
                }
            )

        await axios.get('https://egyptoil-gas.com/wp-json/wp/v2/publications?per_page=5')
            .then(
                res => {
                    setPublications(res.data)
                }
            )

    }, [])

    const worldPrev = React.useRef(null);
    const worldNext = React.useRef(null);

    const galleryPrev = React.useRef(null);
    const galleryNext = React.useRef(null);

    const reportsPrev = React.useRef(null);
    const reportsext = React.useRef(null);

    const lifestylePrev = React.useRef(null);
    const lifestyleNext = React.useRef(null);

    const featSidebarPrev = React.useRef(null);
    const featSidebarNext = React.useRef(null);



    return (
        <div>
            {/* block-wrapper-section
			================================================== */}
            <section className="block-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            {/* block content */}
                            <div className="block-content">
                               
                                {/* carousel box */}
                                <div className="carousel-box owl-wrapper">
                                    <div className="title-section">
                                        <h1><span>Publications</span></h1>
                                        <SwiperArrows color="#000" prev={galleryPrev} next={galleryNext} />
                                    </div>
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={5}
                                        onInit={(swiper) => {
                                            swiper.params.navigation.prevEl = galleryPrev.current;
                                            swiper.params.navigation.nextEl = galleryNext.current;
                                            swiper.navigation.init();
                                            swiper.navigation.update();
                                        }}
                                    >
                                        {
                                            publications.map(post => (
                                                <SwiperSlide key={post.id}>
                                                    <div className="item news-post image-post3">
                                                        <img src={post.featured_media_src_url} alt={post.title.rendered} />
                                                        <div className="hover-box">
                                                            <h2><a href="single-post.html">{post.title.rendered}</a></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" /><Moment format="YYYY/MM/DD">{post.title.date}</Moment></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>

                                </div>
                                {/* End carousel box */}
                                {/* grid box */}
                                <div className="grid-box">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="title-section">
                                                <h1><span className="reports">reports</span></h1>
                                                <SwiperArrows color="#000" prev={reportsPrev} next={reportsext} />
                                            </div>
                                            <div className="image-post-slider">
                                                <Swiper
                                                    slidesPerView={3}
                                                    onInit={(swiper) => {
                                                        swiper.params.navigation.prevEl = reportsPrev.current;
                                                        swiper.params.navigation.nextEl = reportsext.current;
                                                        swiper.navigation.init();
                                                        swiper.navigation.update();
                                                    }}
                                                >
                                                    {
                                                        reports.map(post => (
                                                            <SwiperSlide key={post.id}>
                                                                <li>
                                                                    <div className="news-post image-post2">
                                                                        <div className="post-gallery">
                                                                            <img src={post.featured_media_src_url} alt={post.title.rendered} />
                                                                            <div className="hover-box">
                                                                                <div className="inner-hover">
                                                                                    <h2><a href="single-post.html">{post.title.rendered}</a></h2>
                                                                                    <ul className="post-tags">
                                                                                        <li><i className="fa fa-clock-o" /><Moment format="YYYY/MM/DD">{post.date}</Moment></li>
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
                                        <div className="col-md-12">
                                            <div className="title-section">
                                                <h1><span className="world">Events Coverage</span></h1>
                                            </div>
                                            <div className="owl-wrapper">
                                                <Swiper
                                                    slidesPerView={1}
                                                    onInit={(swiper) => {
                                                        swiper.params.navigation.prevEl = lifestylePrev.current;
                                                        swiper.params.navigation.nextEl = lifestyleNext.current;
                                                        swiper.navigation.init();
                                                        swiper.navigation.update();
                                                    }}
                                                >

                                                    <SwiperSlide>
                                                        <div className="item">
                                                            <ul className="list-posts">
                                                                {
                                                                    events.map(
                                                                        post => (
                                                                            <li key={post.id}>
                                                                                <img src={post.featured_media_src_url} alt={post.title.rendered} />
                                                                                <div className="post-content">
                                                                                    <h2><a href="single-post.html">{post.title.rendered}</a></h2>
                                                                                    <ul className="post-tags">
                                                                                        <li><i className="fa fa-clock-o" /><Moment format="YYYY/MM/DD">{post.date}</Moment></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    )
                                                                }
                                                            </ul>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End grid box */}
                                {/* google addsense */}
                                <div className="advertisement">
                                    <div className="desktop-advert">
                                        <span>Advertisement</span>
                                        <img src="../../upload/addsense/728x90-white.jpg" alt="" />
                                    </div>
                                    <div className="tablet-advert">
                                        <span>Advertisement</span>
                                        <img src="../../upload/addsense/468x60-white.jpg" alt="" />
                                    </div>
                                    <div className="mobile-advert">
                                        <span>Advertisement</span>
                                        <img src="../../upload/addsense/300x250.jpg" alt="" />
                                    </div>
                                </div>
                                {/* End google addsense */}
                            </div>
                            {/* End block content */}
                        </div>
                        <div className="col-sm-4">
                            {/* sidebar */}
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
                            {/* End sidebar */}
                        </div>
                    </div>
                </div>
            </section>
            {/* End block-wrapper-section */}
        </div >
    )
}

export default TwoBoxes
