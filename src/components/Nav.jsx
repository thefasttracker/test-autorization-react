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

/* 


				<div className="container-fluid">
			      <nav className="navbar navbar-default">
			        <div className="container-fluid">
			          <div className="navbar-header">
			            <a className="navbar-brand" href="#">Scotch Books</a>
			          </div>
			          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			            <ul className="nav navbar-nav">
			              <li><Link to="/">Home</Link></li>
			              <li><Link to="/about">About</Link></li>
			              <li><Link to="/books">Book</Link></li>
			              <li><Link to="/cart">Cart</Link></li>
			            </ul>
			          </div>
			        </div>
			      </nav>
			    </div>
*/
