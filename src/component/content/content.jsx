import React, {Component} from 'react';
import { Route,Redirect } from 'react-router-dom' // react路由
import {withRouter} from 'react-router-dom'
import Bundle from '../../Bundle.jsx' // 分模块打包
import { Layout, Breadcrumb} from 'antd';
const { Content } = Layout;

const Test1 = (props) => (
    <Bundle load={() => import('../../container/test/test1')}>
        {(Test1) => <Test1 {...props}/>}
    </Bundle>
);

const Test = (props) => (
    <Bundle load={() => import('../../container/test/test')}>
        {(Test) => <Test {...props}/>}
    </Bundle>
);

@withRouter
class Center extends Component {
    shouldComponentUpdate(nextProps,nextState){
        // console.log(nextProps);
        // console.log(nextState);
        return false
    }
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    { this.props.location.pathname.replace('/index/','')==='/index' ? <Redirect to="/index/test" /> : null}
                    <Route path='/index/' exact component={Test}></Route>
                    <Route path='/index/test' component={Test}></Route>
                    <Route path='/index/test1' component={Test1}></Route>
                </Content>
            </Layout>
        );
    }

}

export default Center;
