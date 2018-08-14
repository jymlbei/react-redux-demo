import React from 'react'
import { Alert,Input, Icon, Button} from 'antd';
import {connect} from 'react-redux'
import {Redirect} from 'react-dom'
import {login,clearTips} from '../../redux/user.redux'


@connect(
    state => state.user,
    {login,clearTips}
)
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
    }
    emitEmpty(key, v) {
        this[key+'Input'].focus();
        this.setState({
            [key]: v
        })
        this.props.clearTips()
    }

    onChangeUserName(key, v) {
        this.setState({
            [key]: v.target.value
        })
    }

    loginIn() {
        this.props.login(this.state)
    }
    render() {
        const {userName, password} = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={v => this.emitEmpty('userName', '')}/> : null;
        const suffix2 = password ? <Icon type="close-circle" onClick={v => this.emitEmpty('password','')}/> : null;
        return (
            <div className='app'>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <div>
                    <div className='box'>
                        <Input
                            placeholder="Enter your userName"
                            prefix={<Icon type="user"/>}
                            suffix={suffix}
                            value={userName}
                            onChange={v => this.onChangeUserName('userName', v)}
                            ref={node => this.userNameInput = node}
                        />
                        <Input
                            placeholder="Enter your password"
                            prefix={<Icon type="compass"/>}
                            suffix={suffix2}
                            value={password}
                            type='password'
                            onChange={v => this.onChangeUserName('password', v)}
                            ref={node => this.passwordInput = node}
                        />
                        {this.props.msg ? <Alert message={this.props.msg} banner /> : null}
                        <Button type="primary" onClick={() => this.loginIn()}>登录</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login
