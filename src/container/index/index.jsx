import React from 'react';
import Hearder from '../../component/hearder/hearder'
import Center from '../../component/content/content'
import LeftNav from '../../component/leftNav/leftNav'
import { Layout } from 'antd';

class Index extends React.Component {
    componentWillMount() {
        // 监听 loading 事件
        // eventProxy.on('Loading', (Loading) => {
        //     this.setState({
        //         loading:Loading
        //     })
        // });
    }
    render() {

        return (
            <Layout className='indexContent'>
                <Layout>
                    <Hearder></Hearder>
                    <Layout>
                        <LeftNav></LeftNav>
                        <Center></Center>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}


export default Index;
