import React  from 'react';
import { Layout, Menu, Icon } from 'antd';
import {withRouter} from 'react-router-dom'
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
@withRouter
class LeftNav extends React.Component {

    state = {
        collapsed: false,
        current:this.props.location.pathname.replace('/index/','')
    }
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    handleClick = ({item, key, keyPath}) => {
        const redirectTo = `/index/${key}`
        this.setState({
            current: key
        });
        (this.props.location.pathname !== redirectTo) ? this.props.history.push(redirectTo) : null;
    }
    shouldComponentUpdate(nextProps,nextState){
        // console.log(nextProps);
        // console.log(nextState);
        return false
    }
    render() {
        let temp = ['5','6','7','8'].indexOf(this.state.current)>-1 ? 'sub1' : '';
        if(temp !== 'sub1'){
            temp = ['54','64','74','84'].indexOf(this.state.current)>-1 ? 'sub2' : '';
        }
        return (
            <Sider
                // style={{ overflow: 'auto', height: '100vh'}}
                style={{overflow:'hidden'}}
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <Menu
                    mode="inline"
                    defaultOpenKeys={[temp]}
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    theme="dark"
                >
                    <Menu.Item key="test">
                        <Icon type="pie-chart"/>
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="test1">
                        <Icon type="desktop"/>
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="test2">
                        <Icon type="desktop"/>
                        <span>Option 3</span>
                    </Menu.Item>
                    <Menu.Item key="91">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                    <Menu.Item key="92">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                    <Menu.Item key="93">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                    <Menu.Item key="94">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                    <Menu.Item key="95">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                    <Menu.Item key="96">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                    <SubMenu key="sub2" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                        <Menu.Item key="54">Option 5</Menu.Item>
                        <Menu.Item key="64">Option 6</Menu.Item>
                        <Menu.Item key="74">Option 7</Menu.Item>
                        <Menu.Item key="84">Option 8</Menu.Item>
                    </SubMenu>
                </Menu>
                {console.log('left')}
            </Sider>
        );
    }

}

export default LeftNav;
