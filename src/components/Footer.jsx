import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Import specific brand icons

function Footer() {
    return (
        <div className="footer-class text-center">
            <a href="https://github.com/jacobmca">
                <FontAwesomeIcon className="fa-2xl m-5" icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/jacob-mcauliffe-5340b641/">
                <FontAwesomeIcon className="fa-2xl m-5" icon={faLinkedin} />
            </a>
            <a href="https://www.youtube.com/channel/UCBezQ45HXl20AC5FLeecCAw">
                <FontAwesomeIcon className="fa-2xl m-5" icon={faYoutube} />
            </a>
        </div>
    );
}

export default Footer;