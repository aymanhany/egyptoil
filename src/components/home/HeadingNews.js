import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Masonry from 'react-masonry-component'

import renderHTML from 'react-render-html';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/swiper.scss'

SwiperCore.use([Autoplay]);

function HeadingNews() {

    const [news, setNews] = useState([]);
    const [features, setFeatures] = useState([]);

    useEffect(async () => {
        const res = await axios.get('https://egyptoil-gas.com/wp-json/wp/v2/news?per_page=5');
        setNews(res.data);

        const resf = await axios.get('https://egyptoil-gas.com/wp-json/wp/v2/features?per_page=8');
        setFeatures(resf.data);
    }, [])

    return (
        <div>
            {/* heading-news-section
			================================================== */}
            <section className="heading-news">
                <Masonry className={"iso-call heading-news-box"}>
                    {
                        features.map((post, index) => {
                            if (index === 0)
                                return (<div className="news-post image-post" key={post.id}>
                                    <img src={post.featured_media_src_url} alt="" />
                                    <div className="hover-box">
                                        <div className="inner-hover">
                                            <a className="category-post food" href="#">Features</a>
                                            <h2><a href="single-post.html">{post.title.rendered}</a></h2>
                                            {/* <ul className="post-tags">
                                                <li><i className="fa fa-clock-o" /><span>27 may 2013</span></li>
                                                <li><a href="#"><i className="fa fa-comments-o" /><span>20</span></a></li>
                                            </ul> */}
                                            { renderHTML(post.acf.description) }
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                    <div className="image-slider snd-size">
                        <span className="top-stories">TOP News</span>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay
                        >
                            {
                                news.map(post => (
                                    <SwiperSlide key={post.id}>
                                        <div className="news-post image-post">
                                            <img src={post.featured_media_src_url} alt="" />
                                            <div className="hover-box">
                                                <div className="inner-hover">
                                                    <h2><a href="single-post.html">{post.title.rendered}</a></h2>
                                                    {/* <ul className="post-tags">
                                                        <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                        <li><i className="fa fa-user" />by <a href="#">John Doe</a></li>
                                                        <li><a href="#"><i className="fa fa-comments-o" /><span>23</span></a></li>
                                                        <li><i className="fa fa-eye" />872</li>
                                                    </ul> */}
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                    </div>
                    {
                        features.map((post, index) => {
                            if (index > 0) {
                                return (
                                    <div className="news-post image-post" key={post.id}>
                                        <img src={post.featured_media_src_url} alt="" />
                                        <div className="hover-box">
                                            <div className="inner-hover">
                                                <a className="category-post food" href="#">Features</a>
                                                <h2><a href="single-post.html">{post.title.rendered}</a></h2>
                                                {/* <ul className="post-tags">
                                                    <li><i className="fa fa-clock-o" /><span>27 may 2013</span></li>
                                                    <li><a href="#"><i className="fa fa-comments-o" /><span>20</span></a></li>
                                                </ul> */}
                                                { renderHTML(post.acf.description) }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </Masonry>
            </section>
            {/* End heading-news-section */}
        </div>
    )
}

export default HeadingNews
