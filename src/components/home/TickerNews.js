import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Ticker from 'react-ticker'

import renderHTML from 'react-render-html';


const GetRatesFromAPI = () => {
    const [tickerData, setTickerData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resft = await axios.get('https://egyptoil-gas.com/wp-json/wp/v2/features?per_page=2');
            setTickerData(resft.data);
        }
        fetchData();

    }, [])

    // A placeholder is needed, to tell react-ticker, that width and height might have changed
    // It uses MutationObserver internally
    return  (
        <p>{tickerData !== " " ? tickerData.map(post => post.title.rendered) : 'loading...' }</p>
    )
};

function TickerNews() {

    return (
        <div>
            {/* ticker-news-section
			================================================== */}
            <section className="ticker-news">
                <div className="container">
                    <div className="ticker-news-box">
                        <span className="breaking-news">breaking news</span>
                        <span className="new-news">New</span>
                        <div className="ticker-content">
                            <Ticker offset="run-in" speed={10}>
                                {() => <GetRatesFromAPI />}
                            </Ticker>
                        </div>
                    </div>
                </div>
            </section>
            {/* End ticker-news-section */}



        </div>
    )
}

export default TickerNews
