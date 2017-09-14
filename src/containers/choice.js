import React, { Component, PropTypes } from 'react'
import Carousel from '../components/Carousel'

export default class Choice extends Component {
    render() {
        return (
            //轮播
            <div className="navCarousel">
                <Carousel />
            </div>
        )
    }
}
