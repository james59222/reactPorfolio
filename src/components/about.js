import React from "react";
import image3 from "./myPic.jpg";
//jsx uses className for class,inputs and images must be self closing <div style={{width: "100%"}}> <img src="http/pic"/>
function About() {
  return (
  
    <div>
      <br></br>
      <br></br>
      <h1><img src={image3} alt="Github Logo" class="thumbnail2" height="200" width="200" /></h1>
      <h1>About Me</h1>
        <div class="aboutMe">
        
    `   <p>
        <li>Motivated Engineer with solid experience managing all levels of large-scale projects, including installation, configuration, maintenance and alarming. </li>

        <li>Worked to maximize uptime on network devices through performance monitoring on data centers, local operations hubs, and LTE tower equipment. </li>
        <li>Experienced Engineer with strong leadership and relationship-building skills.</li>
      <p>
      </p>
      
      <li>New training experience to include Full Stack Coding through University of Texas at Austin.</li>
      </p>
      </div>
      </div>

  );
}

export default About;