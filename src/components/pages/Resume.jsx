import React from 'react';

function Resume() {
    return (
        <div>
            <a href='/jacob-mcauliffe-resume.pdf' download="jacob-mcauliffe-resume.pdf">Download Resume</a>
            <h2>Front End</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>JQuery</li>
            </ul>
            <h2>Back End</h2>
            <ul>
                <li>Node</li>
                <li>SQL</li>
                <li>MongoDB/Mongoose</li>
            </ul>
        </div>
    )
}

export default Resume;