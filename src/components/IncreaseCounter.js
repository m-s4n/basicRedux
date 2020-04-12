import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increaseCounter } from "../redux/actions/counterActions";
import { Button } from "reactstrap";

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <Button
          color="success"
          onClick={(event) => this.props.dispatch(increaseCounter())}
        >
          1 Increase
        </Button>
      </div>
    );
  }
}

function mapDispathToProps(dispatch) {
  return { actions: bindActionCreators(increaseCounter, dispatch) };
}
export default connect(mapDispathToProps)(IncreaseCounter);
