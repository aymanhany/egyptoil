import React, { useEffect } from 'react'
// import '../js/jquery.min.js'

function Footer() {
    return (
        <div>
            {/* footer 
			================================================== */}
            <footer>
                <div className="container">
                    <div className="footer-widgets-part">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="widget text-widget">
                                    <h1>About</h1>
                                    <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </p>
                                    <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. </p>
                                </div>
                                <div className="widget social-widget">
                                    <h1>Stay Connected</h1>
                                    <ul className="social-icons">
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#" className="google"><i className="fa fa-google-plus" /></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#" className="youtube"><i className="fa fa-youtube" /></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram" /></a></li>
                                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#" className="vimeo"><i className="fa fa-vimeo-square" /></a></li>
                                        <li><a href="#" className="dribble"><i className="fa fa-dribbble" /></a></li>
                                        <li><a href="#" className="pinterest"><i className="fa fa-pinterest" /></a></li>
                                        <li><a href="#" className="flickr"><i className="fa fa-flickr" /></a></li>
                                        <li><a href="#" className="rss"><i className="fa fa-rss" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="widget posts-widget">
                                    <h1>Random Post</h1>
                                    <ul className="list-posts">
                                        <li>
                                            <img src="../upload/news-posts/listw4.jpg" alt="" />
                                            <div className="post-content">
                                                <a href="travel.html">travel</a>
                                                <h2><a href="single-post.html">Pellentesque odio nisi, euismod in ultricies in, diam. </a></h2>
                                                <ul className="post-tags">
                                                    <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="../upload/news-posts/listw1.jpg" alt="" />
                                            <div className="post-content">
                                                <a href="business.html">business</a>
                                                <h2><a href="single-post.html">Sed arcu. Cras consequat.</a></h2>
                                                <ul className="post-tags">
                                                    <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="../upload/news-posts/listw3.jpg" alt="" />
                                            <div className="post-content">
                                                <a href="tech.html">tech</a>
                                                <h2><a href="single-post.html">Phasellus ultrices nulla quis nibh. Quisque a lectus.</a></h2>
                                                <ul className="post-tags">
                                                    <li><i className="fa fa-clock-o" />27 may 2013</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="widget categories-widget">
                                    <h1>Hot Categories</h1>
                                    <ul className="category-list">
                                        <li>
                                            <a href="#">Business <span>12</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Sport <span>26</span></a>
                                        </li>
                                        <li>
                                            <a href="#">LifeStyle <span>55</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Fashion <span>37</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Technology <span>62</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Music <span>10</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Culture <span>43</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Design <span>74</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Entertainment <span>11</span></a>
                                        </li>
                                        <li>
                                            <a href="#">video <span>41</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Travel <span>11</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Food <span>29</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="widget flickr-widget">
                                    <h1>Flickr Photos</h1>
                                    <ul className="flickr-list">
                                        <li><a href="#"><img src="../upload/flickr/1.jpg" alt="" /></a></li>
                                        <li><a href="#"><img src="../upload/flickr/2.jpg" alt="" /></a></li>
                                        <li><a href="#"><img src="../upload/flickr/3.jpg" alt="" /></a></li>
                                        <li><a href="#"><img src="../upload/flickr/4.jpg" alt="" /></a></li>
                                        <li><a href="#"><img src="../upload/flickr/5.jpg" alt="" /></a></li>
                                        <li><a href="#"><img src="../upload/flickr/6.jpg" alt="" /></a></li>
                                    </ul>
                                    <a href="#">View more photos...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-last-line">
                        <div className="row">
                            <div className="col-md-6">
                                <p>© COPYRIGHT 2015 hotmagazine.com</p>
                            </div>
                            <div className="col-md-6">
                                <nav className="footer-nav">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="index.html">Purchase Theme</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End footer */}
        </div>
    )
}

export default Footer
