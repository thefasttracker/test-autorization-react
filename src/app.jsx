import ReactDOM from "react-dom";
import React, { Component, PropTypes } from "react";
import { Router, hashHistory } from "react-router";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";

import routes from "./routes";

import "./styles/app.scss";

import configureStore from "./store/configureStore";

const store = configureStore();
store.subscribe(() => console.log("new state: ", store.getState()))
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes} history={history} />
	</Provider>,
	document.getElementById("app")
);
