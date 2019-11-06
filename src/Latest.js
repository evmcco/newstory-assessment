import React, { Component } from "react";
import "./stylesheets/Latest.css";

import Header from "./Header";
import ComicInfo from "./ComicInfo";

class Latest extends Component {
  state = {};

  async componentDidMount() {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    const comicData = await response.json();
    this.setState({
      comicData
    });
  }

  render() {
    return (
      <>
        <Header />
        {!!this.state.comicData ? (
          <>
            <ComicInfo comicData={this.state.comicData} />
            <a target="_blank" href="https://www.xkcd.com/">
              <img
                className="latestImage"
                title={this.state.comicData.alt}
                alt={this.state.comicData.title}
                src={this.state.comicData.img}
              />
            </a>
          </>
        ) : null}
      </>
    );
  }
}

export default Latest;
