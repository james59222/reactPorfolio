import React from "react";
import image from "./githubLogo.png";
import image2 from "./linkedInLogo.png";

function Contact() {
  
  return (
    <div className ="Contact">
    <div>
      <div>
      <br></br>
      <br></br>
      
      <h1>Contact Me</h1>
        <div class="Contact">
        <p>
        <li>email: james59222@gmail.com</li>
        <li><a href="mailto:james59222@gmail.com">james59222@gmail.com</a></li>

        <li>phone: 214-287-0754 </li>
        {/* <li>github: https://github.com/james59222</li> */}
      
        <a href="https://github.com/james59222"><img src={image} alt="Github Logo" class="thumbnail" height="200" width="200" /></a>
        {/* <li>linkedIn: www.linkedin.com/in/james-pierce-217a9879</li> */}
        <a href="http://www.linkedin.com/in/james-pierce-217a9879"><img src={image2} alt="LinkedIn Logo" class="thumbnail" height="200" width="200" /></a>
        
        </p>
      </div>
      </div>
      </div>

    </div>
  );
}

export default Contact;