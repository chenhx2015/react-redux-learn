import React, { Component, PropTypes } from 'react'
import axios from 'axios'
//倒入样式文件
import '../styles/products.scss'

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        }
    }
    componentDidMount(){
        axios.get('../../data/productsList.json')
            .then(res => {
                const productslist = res.data.productsList
                this.setState({
                    lists: productslist
                })
            })
    }
    render() {
        return (
            <div className="products-page">
                <p className="product-title">产品</p>
                {this.state.lists.map(item =>
                    <div className="productList" key={item.productId}>
                        <p className="cata">
                            <span className="cata-fl">{item.name}</span>
                        </p>
                        <p className="rate">{item.rate}</p>
                        <p className="possess-time">
                            <span className="fl">历史年化收益率</span>
                            <span className="fr">锁定期{item.possessTime}天</span>
                        </p>
                        <div className="invest">
                            <span className="start"><span>{item.minMoney}</span>起投</span>
                            <button className="investBtn">立即投资</button>
                        </div>
                    </div>
                    )
                }
            </div>
        )
    }
}