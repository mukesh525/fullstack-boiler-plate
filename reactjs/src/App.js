import React, { Component, lazy, Suspense } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import { history } from "../src/helpers/history";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { alertActions } from "./actions";

const Home = lazy(() => import("./components/Home"));

class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clearAlerts();
    });
  }

  render() {
    return (
      <div className="App">
        <Suspense
          fallback={
            <Loader
              type="MutatingDots"
              color="#9E9FFF"
              height={100}
              width={100}
              style={{ marginTop: "20%" }}
            />
          }
        >
          <Router history={history}>
            <Switch>
              <Route path="/" component={Home} />
              <PrivateRoute path="/Home" component={Home} />
            </Switch>
          </Router>
        </Suspense>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

export default connect(mapState, actionCreators)(App);
