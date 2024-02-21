import React, { useEffect, useState } from 'react';
import localImage from '../../Assets/images/homepage.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './WelcomeSenior.module.css';


export default function WelcomeSenior() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
        <h1 style={{ color: 'rgb(27 93 165)' }}><b>Welcome Senior</b></h1>
        <div className={styles.descriptionContainer}></div>
          <p>
            In this seniors portal, you can access various features such as
            adding your project, navigating old projects students, getting
            recommended project ideas. Take full advantage of the resources
            available here and Good Luck Senior!
          </p>
          <Link to="/login" className={styles.loginButton}>
            Login
          </Link>
          <Link to="/register" className={styles.getStartedButton}>
              Get Started
            </Link>
        </div>
        <div className={styles.imageContainer}>
          <img  src={localImage} alt="Description of the picture" className={styles.image} />
        </div>
      </div>
      </>
);
}