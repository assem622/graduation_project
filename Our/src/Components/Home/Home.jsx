import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'; 
import MostViewed from '../MostViewedProjects/MostViewedProjects';
import WelcomeSenior from '../WelcomeSenior/WelcomeSenior';

export default function Home() {
  return (
    <>
      <WelcomeSenior/>
      <MostViewed/>
  <br/>
    <br/>
    <br/>
</>
);
}
