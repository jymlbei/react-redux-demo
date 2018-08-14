import React from 'react'
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// createStore接受reducer生成stote compose合并生成store其他数据 applyMiddleware接受thunk解决redux异步问题
// Provider负责传递store
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom' // react路由
import Bundle from './Bundle.jsx' // 分模块打包
import reducers from './reducer.js' // 合并所有的reducer，（管理工具）// 生成store
// import AuthRoute from './component/authRoute/authRoute' // 中央管理路由，用于登录失效，或者未登录默认跳转页面

// import Loading from './component/loading/loading'

import 'antd/dist/antd.less';
import './index.less'
import './common.less'
import './changeDefine.less'

// import Login from './container/login/login'
// import Index from './container/index/index'


const store = createStore(reducers, compose(
    applyMiddleware(thunk),//解决redux异步问题
    window.devToolsExtension?window.devToolsExtension():f=>f // chrome控制台redux工具
))

const Login = (props) => (
    <Bundle load={() => import('./container/login/login')}>
        {(Login) => <Login {...props}/>}
    </Bundle>
);

const Index = (props) => (
    <Bundle load={() => import('./container/index/index')}>
        {(Index) => <Index {...props}/>}
    </Bundle>
);

// function Test() {
//     return (
//         <div>测试</div>
//     )
// }
ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div id="app">
                {/* <div className="header">123</div> */}
                {/*<AuthRoute></AuthRoute> */}
                <Switch>
                    <Route path='/' exact component={Login}></Route>
                    <Route path='/index' component={Index}></Route>
                    <Route path='/login' component={Login}></Route>
                </Switch>
                {/* <Loading></Loading> */}
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
