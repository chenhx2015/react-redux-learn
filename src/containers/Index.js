import React, { Component, PropTypes } from 'react'
import Carousel from '../components/Carousel'
//倒入样式文件
import '../styles/index.scss'

export default class Index extends Component {
    render() {
        return (
            //轮播
            <div className="navCarousel">
                <Carousel />
                <nav>
                    <ul className="topnav">
                        <li>邀请有礼</li>
                        <li>新手任务</li>
                        <li>平台介绍</li>
                        <li>摇一摇</li>
                    </ul>
                </nav>
                <div className="productList">
                    <p className="cata">
                        <span className="cata-fl">灵通宝A</span>
                        <span className="cata-fr">存越久赚越多</span>
                    </p>
                    <p className="rate">7.00%</p>
                    <p className="possess-time">持有<span>30</span>天后 可随时转让</p>
                    <button className="investBtn">立即投资</button>
                </div>
                <div className="productList">
                    <p className="cata">
                        <span className="cata-fl">灵通宝B</span>
                        <span className="cata-fr">存越久赚越多</span>
                    </p>
                    <p className="rate">7.00%</p>
                    <p className="possess-time">持有<span>30</span>天后 可随时转让</p>
                    <button className="investBtn">立即投资</button>
                </div>


            </div>
        )
    }
}
