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
import SideBar from '../SideBar';

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

    const worldPrev = React.useRef(null)
    const worldNext = React.useRef(null)

    const galleryPrev = React.useRef(null)
    const galleryNext = React.useRef(null)

    const reportsPrev = React.useRef(null)
    const reportsext = React.useRef(null)

    const lifestylePrev = React.useRef(null)
    const lifestyleNext = React.useRef(null)

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
                                                        <img src={post.featured_media_src_url} alt={post.title.rendered} height="200" />
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
                                                    spaceBetween={5}
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
                                                                    <SwiperSlide key={post.id}>
                                                                        <div className="item news-post image-post3">
                                                                            <img src={post.featured_media_src_url} alt={post.title.rendered} height="200" />
                                                                            <div className="hover-box">
                                                                                <h2><a href="single-post.html">{post.title.rendered}</a></h2>
                                                                                <ul className="post-tags">
                                                                                    <li><i className="fa fa-clock-o" /><Moment format="YYYY/MM/DD">{post.title.date}</Moment></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </SwiperSlide>
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
                            <SideBar />
                        </div>
                    </div>
                </div>
            </section>
            {/* End block-wrapper-section */}
        </div >
    )
}

export default TwoBoxes
