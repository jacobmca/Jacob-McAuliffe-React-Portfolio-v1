import React from 'react';
import '../../index.css';

function Resume() {
    return (
        <div className="text-center">
            <div className="mt-5">
                <a href='/jacob-mcauliffe-resume.pdf' download="jacob-mcauliffe-resume.pdf">Download Resume</a>
            </div>
            <div className="mt-5">
                <h2>Front End</h2>
                <ul style={{ listStylePosition: 'inside', display: 'inline-block', textAlign: 'left' }}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>JQuery</li>
                </ul>
            </div>
            <div className="mt-5">
                <h2>Back End</h2>
                <ul style={{ listStylePosition: 'inside', display: 'inline-block', textAlign: 'left' }}>
                    <li>Node</li>
                    <li>SQL</li>
                    <li>MongoDB/Mongoose</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;