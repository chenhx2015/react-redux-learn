
'use strict';

//引入样式文件  全局的可以在这引入 单个文件的在相关文件单个引入
import './styles/app.scss';
import './service/rem';

//引入组件
//import './components/App.js';  //先注释 这个文件换成自己的文件内容

//自己的例子需要加入的东西
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducer from './reducers/index'

//import MyCount from './containers/MyCount'       //redux
import RouterMap from './containers/routerMap'    // 路由

let store = createStore(reducer)


ReactDOM.render(
    <Provider store = { store } >
        <div>
            {/* <MyCount/> */}
            <RouterMap/>
        </div>
    </Provider>,
    document.getElementById('app')
)
