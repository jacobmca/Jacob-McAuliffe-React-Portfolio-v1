import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            title: 'Jake\'s Mongo DB Network Backend',
            image: 'path_to_image_1',
            deployedLink: '',
            repoLink: 'https://github.com/jacobmca/The-Jake-MongoDB-Network'
        },
        {
            title: 'Employee Tracker SQL Database Sample',
            image: 'path_to_image_1',
            deployedLink: '',
            repoLink: 'https://github.com/jacobmca/Employee-Tracker-Database'
        },
        {
            title: 'Weather Dashboard',
            image: 'path_to_image_1',
            deployedLink: '',
            repoLink: 'https://github.com/jacobmca/Weather-Dashboard-Project'
        },
        {
            title: 'Personal Blog Sampler',
            image: 'path_to_image_1',
            deployedLink: '',
            repoLink: 'https://github.com/jacobmca/04-Personal-Blog'
        },
        {
            title: 'README Generator',
            image: 'path_to_image_1',
            deployedLink: '',
            repoLink: 'https://github.com/jacobmca/Inquirer-README-Generator'
        },
        {
            title: 'Genie Text-Based Game!',
            image: 'path_to_image_1',
            deployedLink: '',
            repoLink: 'https://github.com/jacobmca/genie-videogame'
        },
    ]

    return (
        <section className="container">
            <h1 className="text-center">Portfolio</h1>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <Project
                            title={project.title}
                            image={project.image}
                            deployedLink={project.deployedLink}
                            repoLink={project.repoLink}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;