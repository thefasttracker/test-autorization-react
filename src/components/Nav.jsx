import React, { Component, PropTypes } from "react";
import { Link, IndexLink, RouteHandler } from "react-router";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
// import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

export default class NavHeader extends Component {
	componentDidMount() {
		document.querySelector(".container").className = "container-fluid";
	}

	render() {
		return (
			<div>
				<Navbar collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">Oleg Novikov</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<li>
								<Link
									to="/login"
									activeClassName="active-link"
									activeStyle={{ textDecoration: "none" }}
								>
									Войти
								</Link>
							</li>
							<li>
								<Link
									to="/signup"
									activeClassName="active-link"
									activeStyle={{ textDecoration: "none" }}
								>
									Регистрация
								</Link>
							</li>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

			</div>
		);
	}
}

