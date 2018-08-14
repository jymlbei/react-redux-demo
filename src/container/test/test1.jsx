import React, {Component} from 'react';
import eventProxy from '../../eventProxy'
import Api from '../../api'
import Loading from '../../component/loading/loading'

class Test1 extends Component {

    componentDidMount () {
        Api.dataList().then(res=>{
            eventProxy.trigger('Loading', false);
            console.log(res);
        })
    }

    render() {
        return (
            <div>
                <Loading></Loading>
                测试111111111111
            </div>
        )
    }

}

export default Test1;
