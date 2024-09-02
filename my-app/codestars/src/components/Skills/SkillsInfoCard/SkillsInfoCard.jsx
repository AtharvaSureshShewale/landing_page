import React from 'react';
import './SkillsInfoCard.css';

function SkillsInfoCard({heading, details}) {
  return (
    <div className='skills-info-card'>
      <h6>{heading}</h6>
      <div className="skills-info-content">
                <div className="skill-info">
                    <p>{details}</p>
                </div>

      </div>
    </div>
  )
}

export default SkillsInfoCard