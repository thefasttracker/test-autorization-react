import React, {Component, PropTypes} from 'react'
import { Route, IndexRoute } from 'react-router'


import Main from '../components/Main'
import Signup from '../components/Signup'
import Intro from '../components/Intro'
import Login from '../components/Login'
import NotFound from '../components/NotFound'

export default (
	<Route path="/" component={Main}>
		<IndexRoute component={Intro}/>
		<Route path="signup" component={Signup}/>
		<Route path="login" component={Login}/>
		<Route path="*" component={NotFound}/>
	</Route>
)