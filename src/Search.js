import React, { Component } from "react";

import Header from "./Header";

class Search extends Component {
  state = {
    comicData: {},
    searchText: ""
  };

  handleSearchChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  searchComic = async () => {
    const url = `https://xkcd.now.sh/?comic=${this.state.searchText}`;
    console.log(`search at ${url}`);
    const response = await fetch(url);
    const comicData = await response.json();
    this.setState({
      comicData
    });
  };

  render() {
    return (
      <>
        <Header></Header>
        <input
          onChange={this.handleSearchChange}
          className="searchInput"
          type="text"
          value={this.state.searchText}
        ></input>
        <button onClick={this.searchComic} className="searchSubmit">
          Search
        </button>
        {!!this.state.comicData ? (
          <img className="searchImage" src={this.state.comicData.img}></img>
        ) : null}
      </>
    );
  }
}

export default Search;
