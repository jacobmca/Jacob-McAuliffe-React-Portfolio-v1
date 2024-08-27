import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            title: 'Jake\'s Mongo DB Network Backend',
            image: './project-1-mongodb.png',
            deployedLink: '',
            repoLink: 'https://github.com/jacobmca/The-Jake-MongoDB-Network'
        },
        {
            title: 'Employee Tracker SQL Database Sample',
            image: './project-2-sql.png',
            deployedLink: '',
            repoLink: 'https://github.com/jacobmca/Employee-Tracker-Database'
        },
        {
            title: 'Weather Dashboard',
            image: 'project-3-weather.png',
            deployedLink: '',
            repoLink: 'https://github.com/jacobmca/Weather-Dashboard-Project'
        },
        {
            title: 'Personal Blog Sampler',
            image: 'project-4-blog.png',
            deployedLink: '',
            repoLink: 'https://github.com/jacobmca/04-Personal-Blog'
        },
        {
            title: 'README Generator',
            image: 'project-5-readme-generator.png',
            deployedLink: '',
            repoLink: 'https://github.com/jacobmca/Inquirer-README-Generator'
        },
        {
            title: 'Genie Text-Based Game!',
            image: 'project-6-genie.png',
            deployedLink: '',
            repoLink: 'https://github.com/jacobmca/genie-videogame'
        },
    ]

    return (
        <section className="container">
            <h1 className="text-center mt-3 mb-5">Portfolio</h1>
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