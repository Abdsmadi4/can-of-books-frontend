import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButtons from './AuthButtons';

class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>My Favorite Books</Navbar.Brand>
                <Nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <AuthButtons />
                </Nav>
                {/* PLACEHOLDER: render a navigation link to the about page */}
            </Navbar>
        )
    }
}

export default Header;