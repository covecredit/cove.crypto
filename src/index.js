import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
        <main>
          <h1>Welcome to cove.crypto!</h1>
          <p>Please select a page from the menu to get started:</p>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/overview">Overview</Link>
              </li>
              <li>
                <Link to="/labs">Labs</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <a href="/whitepaper.pdf">Whitepaper</a>
              </li>
            </ul>
          </nav>
        </main>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

