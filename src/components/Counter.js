import React, { Component } from 'react'
import {connect} from 'react-redux';

 class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}

// counter state bound to props
function mapStateToProps(state){
    return {counter:state.counterReducer};
}
// Component connected reducer
export default connect(mapStateToProps)(Counter);

