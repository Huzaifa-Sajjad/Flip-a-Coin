import React, { Component } from "react";
import Coin from "./coin";

class Flipper extends Component {
  static defaultProps = {
    head:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg",
    tail:
      "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=f0c3c76b353c4367d1db63ab02b24dbf39ebb54c-1578580754-0-ASINKnymGgQy0V8ZptmWF-xOicucO2865S1mu5w-ir0y3L8fKVoSvgbFPQukaGn1DKXJxNRLl_M8y7bzZhVz47zp8JXVrSEOP2gC3ZxpFC7DbmxGcNhcjk57Mlf8vfcOcFhMmeJ7PDplhHcy20txf3Dr7P1isHF1lA2p8b2byk_aGJGEkrI__IuJixv-vJwpkOGAfu-y1VVfmowIDM9Qmnnb1IdQsRH-rvIpjRgl8yXXWqXHubD8VqRvWXcV85VgkED3n206dXqhTkM-TptSjLQVVeiofTHgMQeEUjO1AnIO"
  };

  constructor(props) {
    super(props);
    this.state = {
      coinFace: "",
      headsCount: 0,
      tailsCount: 0
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    const randNum = Math.floor(Math.random() * 2);
    this.setState(st => {
      return {
        coinFace: randNum === 0 ? this.props.head : this.props.tail,
        headsCount: st.headsCount + (randNum === 0 ? 1 : 0),
        tailsCount: st.tailsCount + (randNum !== 0 ? 1 : 0)
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Lets Flip a Coin!</h1>
        {this.state.coinFace !== "" ? (
          <Coin coinFace={this.state.coinFace} />
        ) : (
          ""
        )}
        <button onClick={this.flipCoin}>Flip Coin</button>
        <h4>
          {this.state.coinFace !== ""
            ? `Heads -> ${this.state.headsCount} Tails -> ${this.state.tailsCount}`
            : ""}
        </h4>
      </div>
    );
  }
}

export default Flipper;
