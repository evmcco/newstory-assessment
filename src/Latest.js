import React, { Component } from "react";

import Header from "./Header";

class Latest extends Component {
  state = {
    comicData: {}
  };

  async componentDidMount() {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    const comicData = await response.json();
    console.log(comicData);
    this.setState({
      comicData
    });
  }

  render() {
    return (
      <>
        <Header></Header>
        {!!this.state.comicData ? (
          <img className="latestImage" src={this.state.comicData.img}></img>
        ) : null}
      </>
    );
  }
}

export default Latest;
