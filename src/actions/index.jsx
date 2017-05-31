import "whatwg-fetch";
import moment from "moment";
import axios from "axios";
import {hashHistory} from 'react-router'
const API_URL = "http://localhost:3000";


// import firebase, { firebaseRef, auth } from "../firebase";

export const onLogin = payload => {
	return {
		type: "LOGIN",
		payload
	};
};

export const onLoginAjax = payload => {
	return dispatch => {
		axios
			.post(API_URL, payload)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
		dispatch(onLogin(payload));
		hashHistory.push('/')
	};
};

export const onSignUp = payload => {
	return {
		type: "SIGNUP",
		payload
	};
};

export const onSignUpAjax = payload => {
	return dispatch => {
		axios
			.post(API_URL, payload)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
		dispatch(onSignUp(payload));
		hashHistory.push('/')
	};
};

export const passRecovery = payload => {
	return {
		type: "PASS_RECOVERY",
		payload
	};
};

export const passRecoveryAjax = payload => {
	return dispatch => {
		axios
			.get('https://590b577a426d620011b45ba7.mockapi.io/password')
			.then(response => {
				let password = response.data[0].password
				console.log(`3 Password for ${payload} is ${password}`);
				dispatch(passRecovery(password));
			})
			.catch(error => {
				console.log(error);
			});
	};
};

