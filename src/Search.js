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
    this.setState({
      searchText: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.searchComic();
  };

  render() {
    return (
      <>
        <Header />
        <form onSubmit={this.handleSubmit} className="searchForm">
          <input
            placeholder="Enter Comic #"
            onChange={this.handleSearchChange}
            className="searchInput"
            type="text"
            value={this.state.searchText}
          />
          <button type="submit" className="searchSubmit">
            Search
          </button>
        </form>
        {!!this.state.comicData ? (
          <>
            <ComicInfo comicData={this.state.comicData} />
            <a
              target="_blank"
              href={`https://www.xkcd.com/${this.state.comicData.num}/`}
            >
              <img
                title={this.state.comicData.alt}
                alt={this.state.comicData.title}
                className="searchImage"
                src={this.state.comicData.img}
              />
            </a>
          </>
        ) : null}
      </>
    );
  }
}

export default Search;
