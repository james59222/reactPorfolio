import React from "react";
import image from "./pawsClawstails.PNG";
import image2 from "./sbc2.jpg";
// import image3 from "https://as1.ftcdn.net/v2/jpg/00/75/04/04/1000_F_75040475_GT4SN0IArz77DrSgrC174lfBt2IPpjrv.jpg"
function Portfolio() {
  return (
    <div className="Portfolio">
      
      <h2>Professional Portfolio</h2>
      <div class="wk2Challenge">
      
      <br /><br />
      <p>Animal Adoption</p>
        <a href="https://pawsclawstails.herokuapp.com/home/"><img src={image} alt="Paws, Claws, and Tails" class="thumbnail" height="200" width="200" /></a>
        <br />
        <br />
        <p>World Weather and Facts</p>
        <a href="https://cameronoberlies.github.io/Realtime-Weather-and-Country-Facts"><img src={image2} alt="Paws, Claws, and Tails" class="thumbnail" height="200" width="200" /></a>
        <p>petGTP</p>
        <a href="https://pet-matcher1-248c77335236.herokuapp.com/"><img src="https://as1.ftcdn.net/v2/jpg/00/75/04/04/1000_F_75040475_GT4SN0IArz77DrSgrC174lfBt2IPpjrv.jpg" alt="petGTP" class="thumbnail" height="200" width="400" /></a>

    </div>

    </div>
    
  );
}

export default Portfolio;
