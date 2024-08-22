import React from 'react';

function Project() {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={`project`} />
            <div classname="project-links">
                <a href={deployedLink} target="_blank">View Project</a>
                <a href={deployedLink} target="_blank">Github Repo</a>
            </div>
        </div>
    )
}

export default Project