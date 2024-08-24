import React from 'react';

function Resume() {
    return (
        <div>
            <a href='/jacob-mcauliffe-resume.pdf' download="jacob-mcauliffe-resume.pdf">Download Resume</a>
            <h2 className="text-center">Front End</h2>
            <ul className="text-center">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>JQuery</li>
            </ul>
            <h2 className="text-center">Back End</h2>
            <ul>
                <li>Node</li>
                <li>SQL</li>
                <li>MongoDB/Mongoose</li>
            </ul>
        </div>
    )
}

export default Resume;