import React from 'react';
import Project from './Project';

function Portfolio() {
    const projects = [
        {
            title: 'Jake\'s Mongo DB Network Backend',
            image: 'path_to_image_1',
            deployedLink: '',
            githubLink: 'https://github.com/jacobmca/The-Jake-MongoDB-Network'
        },
        {
            title: 'Employee Tracker SQL Database Sample',
            image: 'path_to_image_1',
            deployedLink: '',
            githubLink: 'https://github.com/jacobmca/Employee-Tracker-Database'
        },
        {
            title: 'Weather Dashboard',
            image: 'path_to_image_1',
            deployedLink: '',
            githubLink: 'https://github.com/jacobmca/Weather-Dashboard-Project'
        },
        {
            title: 'Personal Blog Sampler',
            image: 'path_to_image_1',
            deployedLink: '',
            githubLink: 'https://github.com/jacobmca/04-Personal-Blog'
        },
        {
            title: 'README Generator',
            image: 'path_to_image_1',
            deployedLink: '',
            githubLink: 'https://github.com/jacobmca/Inquirer-README-Generator'
        },
        {
            title: 'Genie Text-Based Game!',
            image: 'path_to_image_1',
            deployedLink: '',
            githubLink: 'https://github.com/jacobmca/genie-videogame'
        },
    ]

    return (
        <section>
            <h1>Portfolio</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <Project />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;