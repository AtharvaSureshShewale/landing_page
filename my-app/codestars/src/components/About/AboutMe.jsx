import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-container" id="about">
      <h5>About Us</h5>
      <div className='content'>
        <img src="./assets/images/djlogo.png" alt="Hero" />
        <div className="info">
            <p>
            DJ Codestars is the vibrant coding club of DJ Sanghvi College of Engineering, dedicated to bringing together passionate students who love to code and innovate. We provide a collaborative space where members can explore new technologies, participate in coding challenges, and work on projects that ignite creativity and technical skill.
            <br/>
            <br/>
            Our club offers a range of activities, from workshops and hackathons to interactive sessions with industry professionals. Whether you're just starting out or have advanced coding experience, DJ Codestars is the place to enhance your skills, connect with like-minded peers, and be part of a community that is shaping the future of tech. 
            </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
