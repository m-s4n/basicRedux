import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { decreaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { Button } from "reactstrap";

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <Button
          color="danger"
          onClick={(event) => this.props.dispatch(decreaseCounter())}
        >
          1 Decrease
        </Button>
      </div>
    );
  }
}

// dispatch bound to props
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreaseCounter, dispatch) };
}
// Component connected reducer
export default connect(mapDispatchToProps)(DecreaseCounter);
