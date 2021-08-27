import React from 'react';
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";

class LikeDislike extends React.Component {
  state = {
    count: 0,
  };

  handleThumbsUp = e => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };
  handleThumbsDown = e => {
    const count = this.state.count;
    this.setState({ count: count - 1 });
  };

  render() {
    return (
      <div className="likeDislike">
        <i className="material-icons" onClick={this.handleThumbsUp}> <FiThumbsUp/> </i>
        <h3 className="counter">{this.state.count}</h3>
        <i className="material-icons" onClick={this.handleThumbsDown}> <FiThumbsDown /> </i>
      </div>
    );
  }
}

export default LikeDislike;