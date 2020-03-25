import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <div className="coin-holder">
        <img src={this.props.coinFace} className="coin-image" />
      </div>
    );
  }
}

export default Coin;
