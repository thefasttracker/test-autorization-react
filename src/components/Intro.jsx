import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import moment from "moment";
import { EmailSignUpForm } from "redux-auth/material-ui-theme";

class Intro extends Component {
	

	render() {
		return (
			<div>
				<h1>Intro</h1>
				
				

			</div>
		);
	}
}


export default connect()(Intro);
