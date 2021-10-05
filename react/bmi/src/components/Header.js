import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import About from './About';
import Home from './Home';
import Diet from './Diet';

function Header() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to='/' exact>BMI</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to='/'>Anasayfa</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/About">BMI Nedir?</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/Diet'>Diyet Programları</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/About" component={About}></Route>
                    <Route path="/Diet" component={Diet}></Route>
                </Switch>
            </div>
        </Router>


    )
}

export default Header;
