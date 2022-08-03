import React from "react";
import projectList from "../../assets/projects.json";

function ProjectCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} className="project-img" />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <p className="project-title">{props.name}</p>
                    </li>
                    <li>
                        <div className="project-icons">
                            <a href={props.github}>
                                <img
                                    src="https://img.icons8.com/sf-black-filled/48/github.png"
                                    alt="github-icon"
                                    id="port-icon"
                                />
                            </a>
                            <a href={props.heroku}>
                                <img
                                    src="https://img.icons8.com/ios/50/000000/domain.png"
                                    alt="app-icon"
                                    id="port-icon"
                                />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Projects() {
    return (
        <>
            <div className="project">
                <center>
                    <h1 className="projects-title">Projects</h1>
                </center>
            </div>

            <Wrapper>
                {projectList.map((project) => (
                    <ProjectCard
                        name={project.name}
                        key={project.id}
                        image={project.image}
                        github={project.github}
                        heroku={project.heroku}
                    />
                ))}
            </Wrapper>
        </>
    );
}

export default Projects;