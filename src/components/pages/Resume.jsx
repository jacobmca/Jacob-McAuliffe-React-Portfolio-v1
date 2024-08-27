import React from 'react';
import '../../index.css';

function Resume() {
    return (
        <div className="text-center">
            <div className="mt-5">
                <a href='/jacob-mcauliffe-resume.pdf' download="jacob-mcauliffe-resume.pdf" className="download-resume">Download Resume</a>
            </div>
            <div className="mt-5">
                <h2 className="full-stack-listing">Front End</h2>
                <ul className="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>JQuery</li>
                </ul>
            </div>
            <div className="mt-5">
                <h2 className="full-stack-listing">Back End</h2>
                <ul className="skills-list">
                    <li>Node</li>
                    <li>SQL</li>
                    <li>MongoDB/Mongoose</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;