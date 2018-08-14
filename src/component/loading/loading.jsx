import React from 'react';
import eventProxy from '../../eventProxy'
import { Spin} from 'antd';

class Loading extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading:true
        }
    }
    componentDidMount() {
        // eventProxy.on('Loading', (msg) => {
        //     this.setState({
        //         loading:msg
        //     });;
        // });
    }
    componentWillUnmount(){
        eventProxy.off('Loading', (Loading) => {

        })
    }
    render() {
        return (
            <div>
                {this.state.loading ?
                    <div className='loading'>
                        <Spin />
                    </div>
                    :<div>123</div>}
            </div>
        );
    }

}

export default Loading;
