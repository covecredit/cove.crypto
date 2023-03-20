import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import Overview from "./components/Overview";
import Labs from "./components/Labs";
import Team from "./components/Team";
import Whitepaper from "./components/Whitepaper";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <main>
              <h1>Cove.crypto</h1>
              <p>Please select a page from the menu to get started:</p>
              <nav>
                <ul>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/overview">Overview</a>
                  </li>
                  <li>
                    <a href="/labs">Labs</a>
                  </li>
                  <li>
                    <a href="/team">Team</a>
                  </li>
                  <li>
                    <a href="/whitepaper" target="_blank" rel="noopener noreferrer">Whitepaper</a>
                  </li>
                </ul>
              </nav>
            </main>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/overview">
            <Overview />
          </Route>
          <Route exact path="/labs">
            <Labs />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/whitepaper">
            {window.location.href = '/whitepaper.pdf'}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

