import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Navigation() {
    return (
        <div className="navbar navbar-bar navbar-expand-md bg-secondary">
            <div className="container-fluid">
                <div class="navbar-header row-md-6">
                    <ul className="nav navbar-nav">
                        <li className="nav-item me-4"><Link to="/" className="link-light">About Me</Link></li>
                        <li className="nav-item me-4"><Link to="/portfolio" className="link-light">Portfolio</Link></li>
                        <li className="nav-item me-4"><Link to="/contact" className="link-light">Contact</Link></li>
                        <li className="nav-item me-4"><Link to="/resume" className="link-light">Resume</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;