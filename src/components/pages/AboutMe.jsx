import React from 'react';

function AboutMe() {
    return (
        <div>
            <h1 className="about-me text-center mt-5 mb-4">About Me</h1>
            <div className="img-container">
                <img src="./jacob-picture.jpg" className="headshot-pic img-fluid img-thumbnail" />
            </div>
            <p className="description text-center">Jacob McAuliffe is a programmer. There is no dog.</p>
        </div>
    )
}

export default AboutMe;