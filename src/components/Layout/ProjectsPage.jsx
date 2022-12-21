import React from 'react';

const ProjectsPage = () => {

    return (
        <div>
            <div></div>
            <div>
                <div className="top-project-info-contain">
                    <div className="projects-title-contain">
                        <h1>PROJECTS</h1>
                        <p>Spudbud</p>
                        <p>Campanion</p>
                        <p>Swenco</p>
                    </div>
                    <div>
                        <h2>Spudbud</h2>
                        <iframe width="560"
                            height="315"
                            src="https://www.youtube.com/embed/0c3RmzH738U"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <div className="bottom-project-info-contain">
                    <p>SpudBud is a children's adventure game involving a traveling potato.  It is designed to help children learn context clues by matching appropriate items to a specific location.  You can enter your name to create a user account in my database and then from there you will be provided a random location and a randomized list of items.  You need to correctly match what the potato needs to pack for that location.  For example, if the potato is going to school it might need a backpack, notebook, and pencil.  If the correct items are selected your Spudbud will teleport to that location with the correct items.  You can also save all the places you have been to with your specific username.</p>
                    <p>JavaScript | HTML | CSS | Node.js | Express | Axios | Sequelize  | Heroku </p>
                </div>
            </div>
        </div>
    )
};

export default ProjectsPage;