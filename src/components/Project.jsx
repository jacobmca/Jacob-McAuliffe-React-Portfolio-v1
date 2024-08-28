import React from 'react';

function Project({ title, image, deployedLink, repoLink }) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={`title`} />
            <div className="card-body">
                <h2 className="card-title text-center">{title}</h2>
                <div classname="card-text">
                    <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary d-block mb-2">View Project</a>
                    <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary d-block mb-2">Github Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Project