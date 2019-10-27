import React, { Component } from "react";

import "./stylesheets/Search.css";

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
          <img className="searchImage" src={this.state.comicData.img}></img>
        ) : null}
      </>
    );
  }
}

export default Search;
