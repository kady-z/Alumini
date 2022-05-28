import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./HomeMain.css";
import Img from "./../../images/nitsxrhd1.png";

function HomeMain() {
  
   return (
       <div className="part1">
         <div className="imageSlider">
            <img src={Img} alt="nitEvents" style={{width:'100%'}}/>
         </div>
         <div className="aluminiregbox">
            <h3 style={{fontSize:'2rem',textDecoration:'underline',color:'#76a5af'}}>Alumini Meet 2022</h3>
            <p>NIT Srinagar is going to conduct an Alumni Meet for its alumni on 3-4 September 2022. The registration for the same is going to start soon.</p>
            <button className="btn2">Register Now</button>
         </div>
      </div>
   )

}

export default HomeMain;