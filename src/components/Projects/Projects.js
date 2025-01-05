import React from "react";
import ProjectCard from "./ProjectCards";

import urs1 from "../../Assets/Projects/urs_page.png";
import urs2 from "../../Assets/Projects/urs_2.png";
import urs3 from "../../Assets/Projects/urs_3.png";
import devops1 from "../../Assets/Projects/devops_1.png";
import devops2 from "../../Assets/Projects/ci_node_redis.png";
import devops3 from "../../Assets/Projects/monitoring_azure.png";
import devops4 from "../../Assets/Projects/gitkraken.png";
import webapp from "../../Assets/Projects/alibobo.png";
import saboteur1 from "../../Assets/Projects/saboteur_1.png";
import saboteur2 from "../../Assets/Projects/saboteur_2.png";
import saboteur3 from "../../Assets/Projects/saboteur_3.png";
import saboteur4 from "../../Assets/Projects/saboteur_4.png";
import healthsense1 from "../../Assets/Projects/healthsense_1.png";
import healthsense2 from "../../Assets/Projects/healthsense_2.png";
import healthsense3 from "../../Assets/Projects/healthsense_3.png";


function Projects() {
    return (
        <div className="projects-container project-section">
            <h1 className="projects-heading">My <strong>Projects</strong></h1>
            <div className="projects-grid">
                <ProjectCard
                    imgPaths={[urs1, urs2, urs3]}
                    title="Unified Resource Sphere"
                    description="A global knowledge management system leveraging AI and blockchain technologies. I developed the Urs V0 architecture, incorporating modern solutions for input validation, retrieval-augmented generation (RAG), large language models (LLM) for content generation, and data storage. The system is structured across functional, application, and technical layers. I conducted benchmarking and selected technologies to ensure scalability, robustness, and data security."
                   
                />
                <ProjectCard
                    imgPaths={[devops1, devops2, devops3, devops4]}
                    title="DevOps Automation"
                    description="DevOps automation project using Docker, Kubernetes, Jenkins, Azure, GitHub, and Ansible. I automated deployment and continuous integration/continuous delivery (CI/CD) pipelines using GitHub Actions. The project included containerization with Docker, orchestration with Kubernetes, and cloud environment management with Azure. I also implemented infrastructure as code (IaC) practices using Ansible to ensure scalability, reliability, and streamlined infrastructure management."
                    ghLink="https://github.com/marcolap13/projet-devops-2023/"
                />
                <ProjectCard
                    imgPaths={[webapp ]}
                    title="Web Application"
                    description="web application with Node.js for server-side request management and Supabase for data handling and user authentication. The project focused on efficient backend performance, secure data storage, and seamless user authentication, ensuring a scalable and robust architecture."
                    ghLink="https://github.com/marcolap13/ece-webtech-2023-fall-gr03-10/"
                />
                <ProjectCard
                    imgPaths={[healthsense1,healthsense2, healthsense3]}
                    title="HealthSense"
                    description="Application integrating AI and sensory sensors to correlate data with emotional states. I developed a data-driven system capable of analyzing emotional patterns, enhancing user well-being through personalized insights and recommendations."
                />
                <ProjectCard
                    imgPaths={[saboteur1, saboteur4, saboteur3 , saboteur2]}
                    title="Saboteur Game"
                    description="Saboteur video game inspired by the universe of Fallout Shelter, programmed in C++ using object-oriented programming (OOP) principles. The game features dynamic resource management, AI-driven character behavior, and an interactive 2D environment."
                />
            </div>
        </div>
    );
}

export default Projects;
