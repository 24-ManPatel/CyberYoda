import React from 'react';
import './Team.css'; // Import the CSS file

const Team = () => {
  const teamMembers = [
    {
      name: 'NARAYANAN AYIPUZHA',
      position: 'Co-Founder & Mentor',
      description: 'Narayanan Ayipuzha, with more than 35 years in a wide variety of assignments in corporate and academic worlds, as management consultant and educator. Until recently, was Global Head of Business Excellence at TCS.',
      imageClass: 'member1',
      linkedin: '#', // LinkedIn URL
    },
    {
      name: 'AKHILESH PATHAK',
      position: 'Co-Founder, MD & CEO',
      description: 'Akhilesh Pathak, with 18+ years in a wide variety of assignments in Manufacturing, Govt. & Large Enterprises working with TEGA, GSPC Group, TCS & ORACLE in senior sales roles. Until recently he was Key Accounts Director with TERADATA (San Diego based Data & Analytics Leader). Mechanical Engineering - NIT Durgapur, MDP- IIM Ahmedabad.',
      imageClass: 'member2',
      linkedin: '#', // LinkedIn URL
    },
    {
      name: 'Ronak Patel',
      position: 'Co-Founder, MD & COO',
      description: 'Ronak Patel, with over 14+ years in Program management in eGovernment & Private organizations related to IT. He is passionate about farming specifically organic farming.',
      imageClass: 'member3',
      linkedin: '#', // LinkedIn URL
    },
    {
      name: 'Ankit Kanodia',
      position: 'Co-Founder, MD & CFO',
      description: 'Ankit Kanodia, an MBA from Xavier Institute of Management, Bhubaneswar (XIMB) with over 10 years experience of researching and investing in the stock market of India.',
      imageClass: 'member4  ',
      linkedin: '#', // LinkedIn URL
    },
  ];

  return (
    <div className="team-section">
      <h2 className="team-title">Our Team</h2>
      <p className="team-description">Our cybersecurity team ensures robust protection for your assets.</p>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className={`card-header ${member.imageClass}`}>
              <div className={`member-image ${member.imageClass}`}></div>
            </div>
            <div className="card-body">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
              <p className="member-description">{member.description}</p>
              <center><a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
              </a>
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
