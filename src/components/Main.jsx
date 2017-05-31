import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";
import NavHeader from "./Nav";

class Main extends Component {
	render() {
		return (
			<div className="container-fluid intro__background">
				{/*h1>Main</h1>*/}
				<NavHeader />
				{React.cloneElement(this.props.children, this.props)}

			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		state,
		ownProps
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
