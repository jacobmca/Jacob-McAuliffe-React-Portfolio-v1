import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            title: 'Employee Payroll Tracker',
            image: 'project-1-payroll.png',
            deployedLink: 'https://jacobmca.github.io/Employee-Payroll-Tracker/',
            repoLink: 'https://github.com/jacobmca/Employee-Payroll-Tracker'
        },
        {
            title: 'Task Board',
            image: 'project-2-taskboard.png',
            deployedLink: 'https://jacobmca.github.io/Task-Board-Challenge/',
            repoLink: 'https://github.com/jacobmca/Task-Board-Challenge'
        },
        {
            title: 'Weather Dashboard',
            image: 'project-3-weather.png',
            deployedLink: 'https://jacobmca.github.io/Weather-Dashboard-Project/',
            repoLink: 'https://github.com/jacobmca/Weather-Dashboard-Project'
        },
        {
            title: 'Personal Blog Sampler',
            image: 'project-4-blog.png',
            deployedLink: 'https://jacobmca.github.io/04-Personal-Blog/',
            repoLink: 'https://github.com/jacobmca/04-Personal-Blog'
        },
        {
            title: 'Note Taker Program',
            image: 'project-5-notetaker.png',
            deployedLink: 'https://note-taker-program-1.onrender.com/',
            repoLink: 'https://github.com/jacobmca/Note-Taker-Program'
        },
        {
            title: 'Genie Text-Based Game!',
            image: 'project-6-genie.png',
            deployedLink: 'https://jacobmca.github.io/The-Genie-Text-Game-Updated/',
            repoLink: 'https://github.com/jacobmca/The-Genie-Text-Game-Updated'
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