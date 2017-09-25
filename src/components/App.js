import React from "react";
import { Route, Switch } from "react-router-dom";
import MainContainer from "../containers/MainContainer";
import AuthContainer from "../containers/AuthContainer";
import Login from "./Login";
import AssetContainer from "../containers/AssetContainer";
import RequireAuth from "../hocs/RequireAuth";
import "./App.css";

const App = () => (
	<div className="App container-fluid">
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/auth/google/callback" component={AuthContainer} />
			<Route path="/activities" component={RequireAuth(MainContainer)} />
			<Route path="/assets" component={RequireAuth(AssetContainer)} />
			<Route component={RequireAuth(MainContainer)} />
		</Switch>
	</div>
);

export default App;
