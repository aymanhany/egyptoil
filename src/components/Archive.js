import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import SideBar from './SideBar'
import axios from 'axios'

import Moment from 'react-moment';
import 'moment-timezone';
import TopViews from './TopViews';

function Archive({ match }) {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const res = await axios.get(`https://egyptoil-gas.com/wp-json/wp/v2/${match.params.type}?per_page=10`);
        setData(res.data);
    }, [])

    return (
        <section className="block-wrapper" >
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        {/* block content */}
                        <div className="block-content">
                            <div className="row">
                                {
                                    data.map(
                                        post => (
                                            <div className="news-post standard-post2 col-sm-6" key={post.id}>
                                                <div className="post-gallery">
                                                    <img src={post.featured_media_src_url} alt={post.title.rendered} height="200" />
                                                </div>
                                                <div className="post-title">
                                                    <h2><Link to={`/single/${match.params.type}/${post.id}`}>{post.title.rendered}</Link></h2>
                                                    <ul className="post-tags">
                                                        <li><i className="fa fa-clock-o" /><Moment format="YYYY/MM/DD">{post.title.date}</Moment></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </div>
                        {/* End block content */}
                    </div>
                    <div className="col-sm-4">
                        {/* sidebar */}
                        <SideBar />
                        <TopViews />
                        {/* End sidebar */}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Archive
