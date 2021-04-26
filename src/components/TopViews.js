import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import axios from 'axios'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Moment from 'react-moment';
import 'moment-timezone';


function TopViews() {

    const [topReviews, setTopReviews] = useState([]);

    useEffect(async () => {
        const res = await axios.get('https://egyptoil-gas.com/wp-json/wordpress-popular-posts/v1/popular-post');
        setTopReviews(res.data);
    }, [])


    return (
        <div className="sidebar">
            <div className="widget tab-posts-widget">
                <Tabs defaultActiveKey="Popular" id="myTab" transition={false}>
                    <Tab eventKey="Popular" title="Popular">
                        <ul className="list-posts">
                            {
                                topReviews ?
                                    topReviews.map(post => (
                                        <li>
                                            <img src={post.featured_media_src_url} alt="" />
                                            <div className="post-content">
                                                <h2><Link to={`/single/news/${post.id}`}>{post.title.rendered.substring(0, 50)}</Link></h2>
                                                <ul className="post-tags">
                                                    <li><i className="fa fa-clock-o" /><Moment format="YYYY/MM/DD">{post.title.date}</Moment></li>
                                                </ul>
                                            </div>
                                        </li>
                                    ))
                                    :
                                    'loading...'
                            }
                        </ul>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default TopViews
