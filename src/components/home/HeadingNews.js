import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

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
        const res = await axios.get('https://egyptoil-gas.com/wp-json/wp/v2/news?per_page=5&_embed');
        setNews(res.data);

        const resf = await axios.get('https://egyptoil-gas.com/wp-json/wp/v2/features?per_page=8&_embed');
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
                                    <img src={post.featured_media_src_url} alt="" height="150" />
                                    <div className="hover-box">
                                        <div className="inner-hover">
                                            <h2><Link to={`/single/features/${post.id}`}>{post.title.rendered.substring(0, 50)}</Link></h2>
                                            <li style={{ color: "#fff" }}><i className="fa fa-user" /><span> by {post._embedded.author[0].name}</span></li>
                                            {renderHTML(post.acf.description)}
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                    <div className="image-slider snd-size">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay
                        >
                            {
                                news.map(post => {
                                    console.log(post.acf.featured);
                                    if (post.acf.featured) {
                                        return (<SwiperSlide key={post.id}>
                                            <div className="news-post image-post">
                                                <img src={post.featured_media_src_url} alt="" height="300" />
                                                <div className="hover-box">
                                                    <div className="inner-hover">
                                                        <h2><Link to={`/single/news/${post.id}`}>{post.title.rendered.substring(0, 50)}</Link></h2>
                                                        <li style={{ color: "#fff" }}><i className="fa fa-user" /><span> by {post._embedded.author[0].name}</span></li>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>)
                                    }
                                }
                                )
                            }

                        </Swiper>
                    </div>
                    {
                        features.map((post, index) => {
                            if (index > 0) {
                                return (
                                    <div className="news-post image-post" key={post.id}>
                                        <img src={post.featured_media_src_url} alt="" height="150" />
                                        <div className="hover-box">
                                            <div className="inner-hover">
                                                <h2><Link to={`/single/features/${post.id}`}>{post.title.rendered.substring(0, 50)}</Link></h2>
                                                <ul className="post-tags">
                                                    <li style={{ color: "#fff" }}><i className="fa fa-user" /><span> by {post._embedded.author[0].name}</span></li>
                                                </ul>
                                                {renderHTML(post.acf.description)}
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
