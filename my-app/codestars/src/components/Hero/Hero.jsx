import React from 'react'
import './Hero.css';

function Hero() {
  return (
    <section className="hero-container" id="home">
        <div className="hero-content">
            <h2>Empowering Creativity Through Code</h2>
            <p>
            Innovative Events | Turning Concepts into Cutting-Edge Tech Experiences
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/img01.png" alt="Icon 1" />
                </div>
                <img src="./assets/images/djlogo.png" alt="Hero" className="hero-i"/>
            </div>

            <div>
                <div className="tech-icon">
                    <img src="./assets/images/img02.png" alt="Icon 2" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/img03.png" alt="Icon 3" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/img04.png" alt="Icon 4" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
