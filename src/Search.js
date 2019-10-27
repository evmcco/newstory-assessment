import React, { Component } from "react";

import "./stylesheets/Search.css";

import Header from "./Header";
import ComicInfo from "./ComicInfo";

class Search extends Component {
  state = {
    searchText: ""
  };

  handleSearchChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  searchComic = async () => {
    const url = `https://xkcd.now.sh/?comic=${this.state.searchText}`;
    try {
      const response = await fetch(url);
      const comicData = await response.json();
      this.setState({
        comicData
      });
    } catch {
      window.alert("Comic not found 😭 Please try again.");
    }
  };

  render() {
    return (
      <>
        <Header></Header>
        <div className="searchForm">
          <input
            placeholder="Search"
            onChange={this.handleSearchChange}
            className="searchInput"
            type="text"
            value={this.state.searchText}
          ></input>
          <button onClick={this.searchComic} className="searchSubmit">
            Search
          </button>
        </div>
        {!!this.state.comicData ? (
          <>
            <ComicInfo comicData={this.state.comicData}></ComicInfo>
            <a
              target="_blank"
              href={`https://www.xkcd.com/${this.state.comicData.num}/`}
            >
              <img
                title={this.state.comicData.alt}
                className="searchImage"
                src={this.state.comicData.img}
              ></img>
            </a>
          </>
        ) : null}
      </>
    );
  }
}

export default Search;
