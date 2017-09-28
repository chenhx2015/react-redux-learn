import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Index from './Index'
import Products from './Products'
import Anniversary from './Anniversary'
import Enjoy from './Enjoy'
import My from './My'

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
                {/* 模仿钱牛牛app项目 */}
                <li>
                    <a href="./index">首页</a>
                </li>
                <li>
                    <a href="./products">产品</a>
                </li>
                <li>
                    <a href="./anniversary">三周年</a>
                </li>

                <li>
                    <a href="./enjoy">享玩</a>
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
                <Route path='/index' component = { Index }/>
                <Route path='/' exact component = { Index }/>
                <Route path='/products' exact component = { Products }/>
                <Route path='/anniversary' component = { Anniversary }/>
                <Route path='/enjoy' component = { Enjoy }/>
                <Route path='/my' component = { My }/>
            </Switch>
            {/**
            * 这里可以公共的样式,比如 头部, 尾部, 等.
            */}
            {/* <footer className="footer">Little Peach's happy times !</footer> */}
        </div>
      </Router>
    );
  }
}

