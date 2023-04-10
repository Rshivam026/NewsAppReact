import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "in",
      category: "general",
    };
  }
  render() {
    return (
      <>
        <Router>
        <LoadingBar progress={this.state.loadingBarProgress} height={3} color='red' onLoaderFinished={() => this.onLoaderFinished()}         />
          <Navbar title="SR News" />
          <Routes>
            <Route
              path="/"
              element={<News key="1" country="in" category="general" />}
            ></Route>
            <Route
              path="/business"
              element={<News key="1"  country="in" category="business" />}
            ></Route>
            <Route
              path="/entertainment"
              element={<News  key="7" country="in" category="entertainment" />}
            ></Route>
            <Route
              path="/health"
              element={<News  key="6" country="in" category="health" />}
            ></Route>
            <Route
              path="/general"
              element={<News key="5"  country="in" category="general" />}
            ></Route>
            <Route
              path="/sports"
              element={<News  key="4" country="in" category="sports" />}
            ></Route>
            <Route
              path="/technology"
              element={<News key="3"  country="in" category="technology" />}
            ></Route>
            <Route
              path="/science"
              element={<News  key="2" country="in" category="science" />}
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
