import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Loader from './Loader'

import { Link } from 'react-router-dom'

import renderHTML from 'react-render-html';

import SwiperArrows from './SwiperArrows'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/swiper.scss'
import { map } from 'jquery';

import Moment from 'react-moment';
import 'moment-timezone';


SwiperCore.use([Navigation]);

function Single({ match }) {

    const likePrevRef = React.useRef(null)
    const likeNextRef = React.useRef(null)

    const [post, setPost] = useState()
    const [like, setLike] = useState()

    useEffect(async () => {
        await axios.get(`https://egyptoil-gas.com/wp-json/wp/v2/${match.params.type}/${match.params.id}`)
            .then(
                res => (
                    setPost(res.data)
                )
            )

        await axios.get(`https://egyptoil-gas.com/wp-json/wp/v2/${match.params.type}?per_page=5`)
            .then(
                res => (
                    setLike(res.data)
                )
            )
    }, [])

    if (post && like) {
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
                                    {/* single-post box */}
                                    <div className="single-post-box">
                                        <div className="title-post">
                                            <h1>{post.title.rendered}</h1>
                                            <ul className="post-tags">
                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                <li><i className="fa fa-user" />by <Link href="#">John Doe</Link></li>
                                                {/* <li><Link href="#"><i className="fa fa-comments-o" /><span>0</span></Link></li>
                                                <li><i className="fa fa-eye" />872</li> */}
                                            </ul>
                                        </div>
                                        <div className="share-post-box">
                                            <ul className="share-box">
                                                <li><i className="fa fa-share-alt" /><span>Share Post</span></li>
                                                <li><Link className="facebook" href="#"><i className="fa fa-facebook" /><span>Share on Facebook</span></Link></li>
                                                <li><Link className="twitter" href="#"><i className="fa fa-twitter" /><span>Share on Twitter</span></Link></li>
                                                <li><Link className="google" href="#"><i className="fa fa-google-plus" /><span /></Link></li>
                                                <li><Link className="linkedin" href="#"><i className="fa fa-linkedin" /><span /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="post-gallery">
                                            <img src={post.featured_media_src_url} alt={post.title.rendered} />
                                            {/* <span className="image-caption">Cras eget sem nec dui volutpat ultrices.</span> */}
                                        </div>
                                        <div className="post-content">
                                            {renderHTML(post.content.rendered)}
                                        </div>
                                        <div className="post-gallery">
                                            {/* <img src={post.featured_media_src_url} alt={post.title.rendered} /> */}
                                            {/* <span className="image-caption">Cras eget sem nec dui volutpat ultrices.</span> */}
                                        </div>
                                        <div className="post-tags-box">
                                            <ul className="tags-box">
                                                <li><i className="fa fa-tags" /><span>Tags:</span></li>
                                                <li><Link href="#">News</Link></li>
                                                <li><Link href="#">Fashion</Link></li>
                                                <li><Link href="#">Politics</Link></li>
                                                <li><Link href="#">Sport</Link></li>
                                            </ul>
                                        </div>

                                        {/* carousel box */}
                                        <div className="carousel-box owl-wrapper">
                                            <div className="title-section">
                                                <h1><span>You may also like</span></h1>
                                                <SwiperArrows color="#000" prev={likePrevRef} next={likeNextRef} />
                                            </div>
                                            <Swiper
                                                slidesPerView={3}
                                                spaceBetween={5}
                                                onInit={(swiper) => {
                                                    swiper.params.navigation.prevEl = likePrevRef.current;
                                                    swiper.params.navigation.nextEl = likeNextRef.current;
                                                    swiper.navigation.init();
                                                    swiper.navigation.update();
                                                }}
                                            >
                                                {
                                                    like.map(post => (
                                                        <SwiperSlide key={post.id}>
                                                            <div className="item news-post image-post3">
                                                                <img src={post.featured_media_src_url} alt={post.title.rendered} />
                                                                <div className="hover-box">
                                                                    <h2><Link to="/single/news/:id">{post.title.rendered}</Link></h2>
                                                                    <ul className="post-tags">
                                                                        <li><i className="fa fa-clock-o" /><Moment format="DD-MM-YYY">{post.date}</Moment></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                            </Swiper>
                                        </div>
                                        {/* End carousel box */}
                                        {/* contact form box */}
                                       {/* End contact form box */}
                                    </div>
                                    {/* End single-post box */}
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
                                                <Link href="#" className="rss"><i className="fa fa-rss" /></Link>
                                                <span className="number">9,455</span>
                                                <span>Subscribers</span>
                                            </li>
                                            <li>
                                                <Link href="#" className="facebook"><i className="fa fa-facebook" /></Link>
                                                <span className="number">56,743</span>
                                                <span>Fans</span>
                                            </li>
                                            <li>
                                                <Link href="#" className="twitter"><i className="fa fa-twitter" /></Link>
                                                <span className="number">43,501</span>
                                                <span>Followers</span>
                                            </li>
                                            <li>
                                                <Link href="#" className="google"><i className="fa fa-google-plus" /></Link>
                                                <span className="number">35,003</span>
                                                <span>Followers</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget features-slide-widget">
                                        <div className="title-section">
                                            <h1><span>Featured Posts</span></h1>
                                        </div>
                                        <div className="image-post-slider">
                                            <ul className="bxslider">
                                                <li>
                                                    <div className="news-post image-post2">
                                                        <div className="post-gallery">
                                                            <img src="../../upload/news-posts/im3.jpg" alt="" />
                                                            <div className="hover-box">
                                                                <div className="inner-hover">
                                                                    <h2><Link href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </Link></h2>
                                                                    <ul className="post-tags">
                                                                        <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                                        <li><i className="fa fa-user" />by <Link href="#">John Doe</Link></li>
                                                                        <li><Link href="#"><i className="fa fa-comments-o" /><span>23</span></Link></li>
                                                                        <li><i className="fa fa-eye" />872</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="news-post image-post2">
                                                        <div className="post-gallery">
                                                            <img src="../../upload/news-posts/im1.jpg" alt="" />
                                                            <div className="hover-box">
                                                                <div className="inner-hover">
                                                                    <h2><Link href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </Link></h2>
                                                                    <ul className="post-tags">
                                                                        <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                                        <li><i className="fa fa-user" />by <Link href="#">John Doe</Link></li>
                                                                        <li><Link href="#"><i className="fa fa-comments-o" /><span>23</span></Link></li>
                                                                        <li><i className="fa fa-eye" />872</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="news-post image-post2">
                                                        <div className="post-gallery">
                                                            <img src="../../upload/news-posts/im2.jpg" alt="" />
                                                            <div className="hover-box">
                                                                <div className="inner-hover">
                                                                    <h2><Link href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </Link></h2>
                                                                    <ul className="post-tags">
                                                                        <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                                        <li><i className="fa fa-user" />by <Link href="#">John Doe</Link></li>
                                                                        <li><Link href="#"><i className="fa fa-comments-o" /><span>23</span></Link></li>
                                                                        <li><i className="fa fa-eye" />872</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget tab-posts-widget">
                                        <ul className="nav nav-tabs" id="myTab">
                                            <li className="active">
                                                <Link href="#option1" data-toggle="tab">Popular</Link>
                                            </li>
                                            <li>
                                                <Link href="#option2" data-toggle="tab">Recent</Link>
                                            </li>
                                            <li>
                                                <Link href="#option3" data-toggle="tab">Top Reviews</Link>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="option1">
                                                <ul className="list-posts">
                                                    <li>
                                                        <img src="../../upload/news-posts/listw1.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <img src="../../upload/news-posts/listw2.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Sed arcu. Cras consequat. </Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <img src="../../upload/news-posts/listw3.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Phasellus ultrices nulla quis nibh. Quisque a lectus.</Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <img src="../../upload/news-posts/listw4.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Donec consectetuer ligula vulputate sem tristique cursus. </Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <img src="../../upload/news-posts/listw5.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. </Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tab-pane" id="option2">
                                                <ul className="list-posts">
                                                    <li>
                                                        <img src="../../upload/news-posts/listw3.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Phasellus ultrices nulla quis nibh. Quisque a lectus. </Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <img src="../../upload/news-posts/listw4.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Donec consectetuer ligula vulputate sem tristique cursus. </Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <img src="../../upload/news-posts/listw5.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <img src="../../upload/news-posts/listw1.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <img src="../../upload/news-posts/listw2.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Sed arcu. Cras consequat.</Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tab-pane" id="option3">
                                                <ul className="list-posts">
                                                    <li>
                                                        <img src="../../upload/news-posts/listw4.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Donec consectetuer ligula vulputate sem tristique cursus. </Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <img src="../../upload/news-posts/listw1.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <img src="../../upload/news-posts/listw3.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Phasellus ultrices nulla quis nibh. Quisque a lectus.</Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <img src="../../upload/news-posts/listw2.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Sed arcu. Cras consequat.</Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <img src="../../upload/news-posts/listw5.jpg" alt="" />
                                                        <div className="post-content">
                                                            <h2><Link href="single-post.html">Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</Link></h2>
                                                            <ul className="post-tags">
                                                                <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget post-widget">
                                        <div className="title-section">
                                            <h1><span>Featured Video</span></h1>
                                        </div>
                                        <div className="news-post video-post">
                                            <img alt="" src="../../upload/news-posts/video-sidebar.jpg" />
                                            <Link href="https://www.youtube.com/watch?v=LL59es7iy8Q" className="video-link"><i className="fa fa-play-circle-o" /></Link>
                                            <div className="hover-box">
                                                <h2><Link href="single-post.html">Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </Link></h2>
                                                <ul className="post-tags">
                                                    <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis. </p>
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
                                    <div className="widget tags-widget">
                                        <div className="title-section">
                                            <h1><span>Popular Tags</span></h1>
                                        </div>
                                        <ul className="tag-list">
                                            <li><Link href="#">News</Link></li>
                                            <li><Link href="#">Fashion</Link></li>
                                            <li><Link href="#">Politics</Link></li>
                                            <li><Link href="#">Sport</Link></li>
                                            <li><Link href="#">Food</Link></li>
                                            <li><Link href="#">Videos</Link></li>
                                            <li><Link href="#">Business</Link></li>
                                            <li><Link href="#">Travel</Link></li>
                                            <li><Link href="#">World</Link></li>
                                            <li><Link href="#">Music</Link></li>
                                        </ul>
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
            </div>
        )
    } else {
        return (
            <h1 className="text-center">Loading...</h1>
        )
    }


}

export default Single
