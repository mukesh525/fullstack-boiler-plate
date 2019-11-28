import React, { Component } from "react";
import { alertActions, msgActions } from "../actions";
import { connect } from "react-redux";

class Home extends Component {
  onClick = () => {
    this.props.sendMessage("sucess");
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}> Click me</button>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

function mapState(state) {
  const { message } = state;
  return { message: message.message };
}

const actionCreators = {
  success: alertActions.success,
  error: alertActions.error,
  clear: alertActions.clear,
  sendMessage: msgActions.sendMessage
};

export default connect(mapState, actionCreators)(Home);
