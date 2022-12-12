import React from "react";
import "./Reasons.css";
import pic1 from "../../assets/image1.png";
import pic2 from "../../assets/image2.png";
import pic3 from "../../assets/image3.png";
import pic4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
const Reasons = () => {
  return (
    <div className="Reasons" id="Reasons">
      <div className="left-r">
        <img src={pic1} alt="pic1" />
        <img src={pic2} alt="pic2" />
        <img src={pic3} alt="pic3" />
        <img src={pic4} alt="pic4" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>
         <div className="details-r">
           <div>
             <img src={tick} alt="tickPic"/>
             <span>OVER 140+ EXPERT COACHS</span>
           </div>
           <div>
             <img src={tick} alt="tickPic"/>
             <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
           </div>
           <div>
             <img src={tick} alt="tickPic"/>
             <span>1 FREE PROGRAM FOR NEW MEMBER</span>
           </div>
           <div>
             <img src={tick} alt="tickPic"/>
             <span>RELIABLE PARTNERS </span>
           </div>
         </div>
         <span style={{
           color:"var(--gray)",
           fontWeight:"normal"
         }}>
           OUR PARTNERS
         </span>
         <div className="partners"> 
            <img src={nb} alt="nb"/>
            <img src={nike} alt="nike"/>
            <img src={adidas} alt="adidas"/>
         </div>
      </div>
    </div>
  );
};

export default Reasons;
