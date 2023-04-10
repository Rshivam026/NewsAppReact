import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from 'prop-types'
export default class News extends Component {
  
  capital = (word) => {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalized;
  };
  constructor(props) {
    super(props);
    document.title = `${this.capital(this.props.category)} News -- SR News`;
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">{this.capital(this.props.category)} -- Top Headlines </h1>
        <hr/>
        <div className="row my-1">
          <NewsItems
            country={this.props.country}
            category={this.props.category}
          />
        </div>
      </div>
    );
  }
}
