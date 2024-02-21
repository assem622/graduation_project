import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import styles from './ProjectsCards.module.css'; 

export default function ProjectsCards() {
  const [ProjectsCards, setProjectsCards] = useState([]);
  
  useEffect(() => {
    const mockProjects = [
      { id: 1, title: 'Project 1', description: 'Description for Project 1', thumbnail: require('../../Assets/images/project.png') },
      { id: 2, title: 'Project 2', description: 'Description for Project 2', thumbnail: require('../../Assets/images/project.png') },
      { id: 3, title: 'Project 3', description: 'Description for Project 3', thumbnail: require('../../Assets/images/project.png') },
      { id: 4, title: 'Project 4', description: 'Description for Project 4', thumbnail: require('../../Assets/images/project.png') },
      { id: 5, title: 'Project 5', description: 'Description for Project 5', thumbnail: require('../../Assets/images/project.png')},
      { id: 6, title: 'Project 6', description: 'Description for Project 6', thumbnail: require('../../Assets/images/project.png') },
    ];

    setProjectsCards(mockProjects);
  }, []);

  return (
    <>
     {/*Projects Section */}
    <div className={styles.ProjectsCards}>
      <h2><b>Projects</b></h2>

      {ProjectsCards.map((project, index) => (
        <React.Fragment key={project.id}>
          <div className={styles.projectCard}>
            <Link to={`/projects/${project.id}`}>
              <img src={project.thumbnail} alt={`Thumbnail of ${project.title}`} className={styles.projectImage} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          </div>

          {/* Insert a line break after every 3 projects */}
          {index % 2 === 2 && <br />}
        </React.Fragment>
      ))}
    </div>
    <br/>
    <br/>
    <br/>
  </>
);
      }