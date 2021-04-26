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

function Header() {
    return (
        <div>
            {/* Header
		    ================================================== */}
            <header className="clearfix">
                {/* Bootstrap navbar */}
                <nav className="navbar navbar-default navbar-static-top" role="navigation">
                    {/* Logo & advertisement */}
                    <div className="logo-advertisement">
                        <div className="container">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <div className="navbar-header top-line">
                                <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                                <ul className="social-icons">
                                    <li><a href="#" className="facebook"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#" className="instagram"><i className="fa fa-instagram" /></a></li>
                                    <li><a href="#" className="linkedin"><i className="fa fa-linkedin" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End Logo & advertisement */}
                    {/* navbar list container */}
                    <div className="nav-list-container">
                        <div className="container">
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-left">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/news">News</Link></li>
                                    <li><Link to="/publications">Issues</Link></li>
                                    <li><Link to="/reports">Reports</Link> </li>
                                    <li><Link to="/tv">TV</Link></li>
                                    <li><Link to="/maps">Concession Map</Link></li>
                                </ul>
                            </div>
                            {/* /.navbar-collapse */}
                        </div>
                    </div>
                    {/* End navbar list container */}
                </nav>
                {/* End Bootstrap navbar */}
            </header>
            {/* End Header */}
        </div>
    )
}

export default Header
