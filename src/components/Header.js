import React from 'react'

import { Navbar, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap'

import logo from '../eog.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import TickerNews from './TickerNews';

function Header() {
    return (
        <div>
            {/* Header
		    ================================================== */}
            <header className="clearfix">
                {/* Bootstrap navbar */}
                <Navbar className="logo-advertisement" expand="lg">
                    <Navbar.Brand><Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/archive/news">News</Link></li>
                            <li><Link to="/archive/publications">Issues</Link></li>
                            <li><Link to="/archive/reports">Reports</Link> </li>
                            <li><Link to="/archive/tv">TV</Link></li>
                            <li><Link to="/archive/maps">Concession Map</Link></li>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                {/* End Bootstrap navbar */}
            </header>
            {/* End Header */}
            <TickerNews />
        </div>
    )
}

export default Header
