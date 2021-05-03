import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


import axios from 'axios'

import Moment from 'react-moment';
import 'moment-timezone';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SwiperArrows from '../SwiperArrows';
import ViewMore from '../ViewMore';

SwiperCore.use([Navigation]);

function FeaturesToday() {

    const [features, setFeatures] = useState([]);
    useEffect(async () => {
        const resft = await axios.get('https://egyptoil-gas.com/wp-json/wp/v2/features?per_page=10&_embed');
        setFeatures(resft.data);
    }, [])

    const featuresPrevRef = React.useRef(null);
    const featuresNextvRef = React.useRef(null);

    return (
        <div>
            {/* features-today-section
			================================================== */}
            <section className="features-today">
                <div className="container">
                    <div className="title-section">
                        <h1><span><Link to="archive/features">Features</Link></span></h1>
                        <SwiperArrows color="#000" prev={featuresPrevRef} next={featuresNextvRef} />
                    </div>
                    <div className="features-today-box owl-wrapper">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={15}
                            breakpoints={{
                                480: {
                                    "slidesPerView": 1,
                                    "spaceBetween": 20
                                },
                                768: {
                                    "slidesPerView": 2,
                                    "spaceBetween": 20
                                },
                                1024: {
                                    "slidesPerView": 4,
                                    "spaceBetween": 20
                                }
                            }}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = featuresPrevRef.current;
                                swiper.params.navigation.nextEl = featuresNextvRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                        >
                            {
                                features.map(post => (
                                    <SwiperSlide key={post.id}>
                                        <div className="item news-post standard-post">
                                            <div className="post-gallery">
                                                <img src={post.featured_media_src_url} alt={post.title.rendered} />
                                                {/* <a className="category-post world" href="world.html">Music</a> */}
                                            </div>
                                            <div className="post-content">
                                                <h2><Link to={`/single/features/${post.id}`}>{post.title.rendered}</Link></h2>
                                                <ul className="post-tags">
                                                    <li><i className="fa fa-clock-o" />
                                                        <Moment format="YYYY/MM/DD">{post.date}</Moment>
                                                    </li>
                                                    <li><i className="fa fa-user" />by <a href="#">{post._embedded.author[0].name}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))

                            }
                            <SwiperSlide>
                                <ViewMore type="features" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* End features-today-section */}
        </div >
    )
}

export default FeaturesToday
