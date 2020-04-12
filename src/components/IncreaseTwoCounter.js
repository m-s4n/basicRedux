import React, { Component } from 'react'
import {increaseByTwoCounter} from '../redux/actions/counterActions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
 class IncreaseTwoCounter extends Component {
    render() {
        return (
            <div>
                <Button color='warning' onClick={event => this.props.dispatch(increaseByTwoCounter())}>2 Increase</Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseByTwoCounter,dispatch)}
}
export default connect(mapDispatchToProps)(IncreaseTwoCounter);
