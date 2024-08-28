import React from 'react';

function AboutMe() {
    return (
        <div>
            <h1 className="about-me text-center mt-5 mb-4">About Me</h1>
            <div className="img-container">
                <img src="./jacob-picture.jpg" className="headshot-pic img-fluid img-thumbnail" />
            </div>
            <p className="description text-center">Jacob McAuliffe is a programmer from Los Angeles CA. He began programming in 2019 and has since grown into a full-stack software developer. Jacob's skills include front end languages including JavaScript, React, JQuery, HTML and CSS, and back end technologies such as Node, SQL, MongoDB, and Express. He is currently completing UC Berkeley's Coding Bootcamp, and works as the Technology Coordinator for Disney Television Animation.</p>
        </div>
    )
}

export default AboutMe;