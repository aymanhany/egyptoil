import React from 'react'
import FeaturesToday from './home/FeaturesToday'
import LatestArticle from './home/LatestArticle'
import TickerNews from './home/TickerNews'
import HeadingNews from './home/HeadingNews'
import TwoBoxes from './home/TwoBoxes'
import FeaturedVideo from './home/FeaturedVideo'



function HomePage() {
    return (
        <div>
            <TickerNews />
            <HeadingNews />
            <FeaturesToday />
            <TwoBoxes />
            <FeaturedVideo />
            <LatestArticle />
        </div>
    )
}

export default HomePage
