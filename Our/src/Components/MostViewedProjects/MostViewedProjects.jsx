import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'; 
import styles from './MostViewedProjects.module.css'; 
import axios from 'axios';

export default function MostViewed() {
   const [mostViewedProjects, setMostViewedProjects] = useState([]);
   const [imagePaths, setImagePaths] = useState([]);
   useEffect(() => {
     const mockProjects = [
       { id: 1, title: 'Project 1', description: 'Description for Project 1', thumbnail: require('../../Assets/images/project.png') },
       { id: 2, title: 'Project 2', description: 'Description for Project 2', thumbnail: require('../../Assets/images/project.png') },
       { id: 3, title: 'Project 3', description: 'Description for Project 3', thumbnail: require('../../Assets/images/project.png') },
       { id: 4, title: 'Project 4', description: 'Description for Project 4', thumbnail: require('../../Assets/images/project.png') },
       { id: 5, title: 'Project 5', description: 'Description for Project 5', thumbnail: require('../../Assets/images/project.png')},
       { id: 6, title: 'Project 6', description: 'Description for Project 6', thumbnail: require('../../Assets/images/project.png') },
     ];
 
     setMostViewedProjects(mockProjects);
   }, []);
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,        
      autoplaySpeed: 3000, 
    };
     return (
    
      <>
      {/* Most Viewed Projects Section */}
    <div className={styles.mostViewedContainer}>
        <h2><b>Most Viewed Projects</b></h2>
        <Slider {...settings}>
          {mostViewedProjects.map(project => (
             <div key={project.id} className={styles.projectCard}>
              <Link to={`/projects/${project.id}`}>
                <img src={project.thumbnail} alt={`Thumbnail of ${project.title}`}className={styles.projectImage} />
                <h3>{project.title}</h3>
                <p2>{project.description}</p2>
              </Link>
            </div>
          ))}
        </Slider>
  </div>
      </>
);
}
