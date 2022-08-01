import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Cards
function ProjectCards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <p className="card-title">{props.name}</p>
            <p class="proj-icons-container">
                <a href={props.github}><img class="project-icon" src="https://cdn.iconscout.com/icon/free/png-48/github-1884646-1596821.png" alt="GitHub Repo" /></a>
                <a href={props.deploy}><img class="project-icon" src="https://cdn.iconscout.com/icon/free/png-48/domain-2046258-1730026.png"alt="Live Application" /></a>
            </p>
            <p class="description">
                ({props.description})
                </p>
        </div>
        </div>
    )
}

export default Project;