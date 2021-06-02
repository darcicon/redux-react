import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Counter } from "./components/Counter";
import { Display } from "./components/Display";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NavBar } from "./Navigation/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/display">
          <Display />
        </Route>
        <Route path="/">
          <h1 className="bg-secondary" style={{ height: "100vh" }}>
            Welcome To Hopepage
          </h1>
        </Route>
      </Switch>
    </Router>
  );
}
