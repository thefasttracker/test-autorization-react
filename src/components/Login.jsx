import React, { Component, PropTypes } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class Login extends Component {
	constructor() {
		super();
		
	}
	onSubmitLogin = e => {
		e.preventDefault();
		if (
			this.passInput.value.trim().length > 0 &&
			this.userInput.value.trim().length > 0
		) {
			let input = {
				user: this.userInput.value,
				password: this.passInput.value,
			};
			let { dispatch } = this.props;
			dispatch(actions.onLoginAjax(input))
			
		} else {
			this.userInput.placeholder = "Введите логин";
			this.passInput.placeholder = "Введите пароль";
		}

		this.userInput.value = "";
		this.passInput.value = "";
	};

	onPassRecovery = (e) => {
		e.preventDefault()
		let recoveryEmail = prompt("введите емайл")
		let { dispatch } = this.props;
		dispatch(actions.passRecoveryAjax(recoveryEmail))
	}

	render() {
		return (
			<div>
				{/*<h1>Login</h1>*/}
				<div className="wrapper">
					<form className="form-signin" onSubmit={this.onSubmitLogin}>
						<h2 className="form-signin-heading">Войти</h2>
						<input
							type="text"
							ref={input => {
								this.userInput = input;
							}}
							className="form-control"
							name="username"
							placeholder="Логин"
							required
							pattern="\w+"
							title="Username must not be blank and contain only letters, numbers and underscores."
							autoFocus=""
						/>
						<input
							type="password"
							title="Password must contain at least 6 characters, including UPPER/lowercase and numbers"
							ref={input => {
								this.passInput = input;
							}}
							className="form-control"
							name="password"
							placeholder="Пароль"
							required
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
						/>
						<p onClick={this.onPassRecovery}>Восстановить пароль</p>
						<button
							className="btn btn-lg btn-primary btn-block"
							type="submit"
						>
							Войти
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default connect()(Login);

/*<form onSubmit={this.handleSubmit}>
					<input type="text" ref="introName" placeholder="What is your name?"/>
					{" "}
					<input type="text" ref="introText" placeholder="Type something"/>
					{" "}
					<button className="button expanded hollow">Add Comment</button>
				</form>
				*/
