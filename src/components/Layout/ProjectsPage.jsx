import React, { useState } from 'react';
import './ProjectPage.css';
import projectData from '../../ProjectData/ProjectData.js';


const ProjectsPage = () => {
    const [projectTitle, setProjectTitle] = useState('');
    const [demoLink, setDemoLink] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [technologiesUsed, setTechnologiesUsed] = useState('');
    const [gitHubLink, setGitHubLink] = useState('');
    const [isSelected, setIsSelected] = useState(false);


    const spudbudHandler = () => {
        setProjectTitle(projectData.projectData[0].projectTitle);
        setDemoLink(projectData.projectData[0].demoLink);
        setProjectDescription(projectData.projectData[0].projectDescription);
        setTechnologiesUsed(projectData.projectData[0].technologiesUsed);
        setGitHubLink(projectData.projectData[0].gitHubLink);
        setIsSelected(true);

        // console.log(projectTitle);
    }

    const campanionHandler = () => {
        setProjectTitle(projectData.projectData[1].projectTitle);
        setDemoLink(projectData.projectData[1].demoLink);
        setProjectDescription(projectData.projectData[1].projectDescription);
        setTechnologiesUsed(projectData.projectData[1].technologiesUsed);
        setGitHubLink(projectData.projectData[1].gitHubLink);
        setIsSelected(true);

        // console.log(projectTitle);

    }


    return (
        <div id='project-page' className='project-container-max-div'>
            <div className='project-container'>
                <div className="top-project-info-contain">
                    <div className='flex-projects'>
                        <h1 className='projects-h1'>PROJECTS</h1>
                        <div className="projects-title-contain">
                            <button className={projectTitle === 'SpudBud' ? 'selected-project-css' : 'project-name'} onClick={spudbudHandler}>SpudBud</button>

                            <button className={projectTitle === 'Campanion' ? 'selected-project-css' : 'project-name'} onClick={campanionHandler}>Campanion</button>
                        </div>
                        {isSelected &&
                            <form className='github-link-btn'>
                                <button formAction={gitHubLink} className='github-btn'>GITHUB</button>
                            </form>
                        }

                    </div>
                    <div className='selected-project-div'>
                        <h2 className='selected-title'>{projectTitle}</h2>
                        {!isSelected &&
                            <h2>Please select a project</h2>
                        }
                        <iframe width="560"
                            height="315"
                            src={demoLink}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <div className="bottom-project-info-contain">
                    <p>{projectDescription}</p>
                    <p>{technologiesUsed}</p>
                </div>
            </div>
            <div className="arrow-projects">
                <a href="#contact-page"><div className="arrow about-me-arrow project-arrow"></div></a>
                <a href="#contact-page"><div className="arrow about-me-arrow project-arrow"></div></a>
                <a href="#contact-page"><div className="arrow about-me-arrow project-arrow"></div></a>
            </div>
        </div>
    )
};

export default ProjectsPage;