import React, { Component, PropTypes } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			sex: "male"
		};
	}

	handleChange = e => {
		this.setState({
			sex: e.target.value
		});
	};

	onSubmitSignUp = e => {
		e.preventDefault();
		let input = {
			name: this.nameInput.value,
			surename: this.surenameInput.value,
			username: this.usernameInput.value,
			age: this.userAgeInput.value,
			sex: this.state.sex
		};

		let { dispatch } = this.props;
		dispatch(actions.onSignUpAjax(input))

		this.nameInput.value = "";
		this.surenameInput.value = "";
		this.usernameInput.value = "";
		this.userAgeInput.value = "";
		this.setState({
			sex: ""
		});
	};

	render() {
		return (
			<div>
				{/*<h1>Login</h1>*/}
				<div className="wrapper">
					<form
						className="form-signin"
						onSubmit={this.onSubmitSignUp}
					>
						<h2 className="form-signin-heading">Регистрация</h2>
						<input
							type="text"
							ref={input => {
								this.nameInput = input;
							}}
							className="form-control"
							name="name"
							placeholder="Имя"
							required
							pattern="\w+"
							title="Username must not be blank and contain only letters, numbers and underscores."
							autoFocus=""
						/>
						<input
							type="text"
							ref={input => {
								this.surenameInput = input;
							}}
							className="form-control"
							name="surename"
							placeholder="Фамилия"
							required
							pattern="\w+"
							title="Username must not be blank and contain only letters, numbers and underscores."
						/>
						<input
							type="text"
							ref={input => {
								this.usernameInput = input;
							}}
							className="form-control"
							name="username"
							placeholder="Username"
							required
						/>
						<input
							type="number"
							min="1"
							max="120"
							ref={input => {
								this.userAgeInput = input;
							}}
							className="form-control"
							name="age"
							placeholder="Возраст"
							required
						/>
						<span>Ваш пол: </span>
						<label>
							<select
								value={this.state.sex}
								onChange={this.handleChange}
							>
								<option value="male">Мужчина</option>
								<option value="female">Женщина</option>
							</select>
						</label>
						<button
							className="btn btn-lg btn-primary btn-block"
							type="submit"
						>
							Регистрация
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default connect()(Signup);
