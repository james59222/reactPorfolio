import React from "react";
import image from "./githubLogo.png";
import image2 from "./linkedInLogo.png"
function Contact() {
  return (
    <div>
      <div>
      <br></br>
      <br></br>
      <h1>Contact Information</h1>
        <div class="contact">
    `   <p>
        <li>email: james59222@gmail.com</li>
        <ul><a href="mailto:james59222@gmail.com">james59222@gmail.com</a></ul>

        <li>phone: 214-287-0754 </li>
        {/* <li>github: https://github.com/james59222</li> */}
        <a href="https://github.com/james59222"><img src={image} alt="Github Logo" class="thumbnail2" height="100" width="100" /></a>
        {/* <li>linkedIn: www.linkedin.com/in/james-pierce-217a9879</li> */}

        <a href="http://www.linkedin.com/in/james-pierce-217a9879"><img src={image2} alt="LinkedIn Logo" class="thumbnail2" height="150" width="150" /></a>
      <p>
      </p>
      
      </p>
      </div>
      </div>
 
    </div>
  );
}

export default Contact;