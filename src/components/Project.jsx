import React from 'react';

function Project({ title, image, deployedLink, repoLink }) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={`project`} />
            <div classname="project-links">
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">Github Repo</a>
            </div>
        </div>
    )
}

export default Project