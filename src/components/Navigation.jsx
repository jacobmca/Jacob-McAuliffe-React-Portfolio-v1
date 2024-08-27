import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Navigation() {
    return (
        <div className="navbar navbar-bar navbar-expand-md">
            <div className="container-fluid">
                <div class="navbar-header row-md-6">
                    <ul className="nav navbar-nav">
                        <li className="nav-item me-4 navigation-links"><Link to="/" className="link-light no-text-dec">About Me</Link></li>
                        <li className="nav-item me-4"><Link to="/portfolio" className="link-light no-text-dec">Portfolio</Link></li>
                        <li className="nav-item me-4"><Link to="/contact" className="link-light no-text-dec">Contact</Link></li>
                        <li className="nav-item me-4"><Link to="/resume" className="link-light no-text-dec">Resume</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;