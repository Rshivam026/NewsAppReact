import React, { Component } from "react";

export default class NewsItems extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      article: this.articles,
      page: 1,
      pageSize: 12,
      totalResult: 0,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?language=en&country=${this.props.country}&category=${this.props.category}&apiKey=5a8ab37aa4a344b09794784a4b4b3868&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    console.log(url);
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    this.setState({
      article: result.articles,
      totalResult: result.totalResults,
    });
  }
  clickPrevHandle = async () => {
    console.log("previous");
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?language=en&${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=5a8ab37aa4a344b09794784a4b4b3868&page=${
      this.state.page - 1
    }&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    this.setState({ article: result.articles, page: this.state.page - 1 });
  };
  clickNextHandle = async (event) => {
    if (
      this.state.page + 1 >=
      Math.ceil(this.state.totalResult / this.state.pageSize)
    ) {
      alert("Already on Last Page -- Click Previous Button");
    } else {
      console.log("next");
      let url = `https://newsapi.org/v2/top-headlines?language=en&country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=5a8ab37aa4a344b09794784a4b4b3868&page=${
        this.state.page + 1
      }&pageSize=${this.state.pageSize}`;
      let data = await fetch(url);
      let result = await data.json();
      console.log(result);
      this.setState({ article: result.articles, page: this.state.page + 1 });
    }
  };
  render() {
    return (
      <>
        {this.state.article.map((element) => {
          return (
            <div className="col-md-4 my-3" key={element.url}>
              <div className="card">
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
                style={{zIndex:'2' , left:'85%'}}>
                  {element.source.name}
                </span>
                <img
                  src={
                    element.urlToImage
                      ? element.urlToImage
                      : `https://www.shutterstock.com/image-vector/online-reading-news-young-men-600w-557061658.jpg`
                  }
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{`${element.description}`}</p>
                  <p className="card-text">
                    <small className=" text-danger">
                      By{" "}
                      <strong>
                        {element.author ? element.author : "unknown"}
                      </strong>{" "}
                      on{" "}
                      <strong>
                        {new Date(element.publishedAt).toGMTString()}
                      </strong>
                    </small>
                  </p>
                  <a
                    rel="noreferrer"
                    href={element.url}
                    className="btn btn-small btn-dark"
                    target="_blank"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-around my-4">
          <button
            type="button"
            className={`btn btn-dark btn-lg ${
              this.state.page <= 1 ? "disabled" : ""
            }`}
            onClick={this.clickPrevHandle}
          >
            &larr; &nbsp; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResult / this.state.pageSize)
            }
            type="button"
            className="btn btn-dark btn-lg"
            onClick={this.clickNextHandle}
          >
            &nbsp; &nbsp; &nbsp; Next &nbsp; &nbsp; &rarr;
          </button>
        </div>
      </>
    );
  }
}
