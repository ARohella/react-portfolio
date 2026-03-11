import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/headshot.jpg`} alt="Akshat Rohella" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ARohella" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/akshatrohella/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Akshat Rohella</h1>
          <p>Aspiring SWE | CS + SDS @ UT Austin '26</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ARohella" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/akshatrohella/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
