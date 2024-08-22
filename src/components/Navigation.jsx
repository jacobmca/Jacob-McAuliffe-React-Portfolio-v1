import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/">About Me</Link></li>
            </ul>
        </div>
    )
}

export default Navigation;