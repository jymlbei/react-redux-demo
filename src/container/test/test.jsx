import React, {Component} from 'react';
import eventProxy from '../../eventProxy'
import Api from '../../api'
import Loading from '../../component/loading/loading'

class Test extends Component {

    componentDidMount () {
        Api.getBanner().then(res=>{
            eventProxy.trigger('Loading', false);
            console.log(res);
        })
    }

    render() {
        return (
            <div>
                <Loading></Loading>
                测试
            </div>
        )
    }

}

export default Test;
