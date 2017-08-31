import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Home from './Home'
import Weather from './Weather'
import Hiking from './Hiking'
import My from './My'
import MyCount from './MyCount'

//倒入样式文件
import '../styles/routerMap.scss'

export default class RouterMap extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <Router>
        <div className="container">
            <ul className="navul">
                <li>
                    <a href="./count">计算</a>
                </li>
                <li>
                    <a href="./home">首页</a>
                </li>
                <li>
                    <a href="./weather">天气</a>
                </li>
                <li>
                    <a href="./hiking">出行</a>
                </li>
                <li>
                    <a href="./my">我的</a>
                </li>
            </ul>
            {/**
            * 这里可以公共的样式,比如 头部, 尾部, 等.
            */}

            {/*结合Switch组件可以匹配到都匹配不到的路径,404等...*/}
            <Switch>
                <Route path='/count' component = { MyCount }/>
                <Route path='/' exact component = { Home }/>
                <Route path='/home' exact component = { Home }/>
                <Route path='/weather' component = { Weather }/>
                <Route path='/hiking' component = { Hiking }/>
                <Route path='/my' component = { My }/>
            </Switch>
            {/**
            * 这里可以公共的样式,比如 头部, 尾部, 等.
            */}
            <footer className="footer">Little Peach's happy times !</footer>
        </div>
      </Router>
    );
  }
}

