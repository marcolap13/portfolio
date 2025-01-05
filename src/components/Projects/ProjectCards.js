// ProjectCards.js
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCard({ imgPaths, title, description, ghLink, demoLink }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === imgPaths.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? imgPaths.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="project-card" style={{ marginTop: '100px' }}>
            <div className="project-card-image">
                <button className="nav-button left" onClick={prevImage}>❮</button>
                <img src={imgPaths[currentImageIndex]} alt={title} />
                <button className="nav-button right" onClick={nextImage}>❯</button>
            </div>
            <div className="project-card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="project-card-buttons">
                    {/* Condition pour afficher les boutons uniquement si les liens existent */}
                    {ghLink && (
                        <a href={ghLink} target="_blank" rel="noopener noreferrer" className="btn">
                            <BsGithub /> GitHub
                        </a>
                    )}
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn">
                            <CgWebsite /> Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
