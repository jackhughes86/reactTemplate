import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <img src="./images/keith.png" width="300" height='100' alt="logo" />
            <div>
              <ul>
                <a href='/'><li>HOME</li></a>
                <a href='/'><li>ABOUT</li></a>
                <a href='/'><li>SERVICES</li></a>
                <a href='/'><li>BLOG</li></a>
              </ul>
            </div>
          </header>
        </section>

        <section id="main">
          <div className="main-text">
            <span>keith.</span> <br /> where we design <br />
            the web.
          </div>

          <img src="./images/leaf.png" width="520" alt="leaf-main-image" />
        </section>
      </div>
    );
  }
}

export default App;
