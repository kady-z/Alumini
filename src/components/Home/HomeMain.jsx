import React, { useState } from "react";
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import "./HomeMain.css";
import Img1 from "./../../images/nit1.jpg";
import Img2 from "./../../images/nit2.jpg";
import Img3 from "./../../images/nit3.jpg";
import Img4 from "./../../images/nit4.jpg";
import Img5 from "./../../images/nit5.jpg";
import Img6 from "./../../images/nit6.jpg";

function HomeMain() {
   const imagesArray=[Img1,Img2,Img3,Img4,Img5,Img6]
   const [ImgSlide, setImgSlide] = useState(0);

   useEffect(() => {
      var i=0;
     const interval = setInterval(() => {
      i = i + 1;

      if (i === imagesArray.length) {
        i = 0;
      }
      setImgSlide(i);
     }, 2000);
   }, []);
 
 
   return (
      <>
       <div className="part1">
         <div className="imageSlider">
 <img src={imagesArray[ImgSlide]} alt="nitEvents" className="homeslideshow"/>
            
         </div>
         <div className="aluminiregbox">
            <h3 style={{fontSize:'2rem',textDecoration:'underline',color:'#76a5af'}}>Alumini Meet 2022</h3>
            <p>NIT Srinagar is going to conduct an Alumni Meet for its alumni on 3-4 September 2022. The registration for the same is going to start soon.</p>
            <button className="btn2">Register Now</button>
         </div>
      </div>
      <div className="videoFrames">
      <h1 style={{fontSize:'3rem',color:'grey',textDecoration:'underline'}}>Events</h1>
      <div className="videoboxes">
      <iframe width="100%" height="50%" src="https://www.youtube.com/embed/zOtcs8gvjbw" allowFullScreen>
      </iframe>
      <h3 style={{color:'rgba(8,39,89,1)'}}>Alumini Meet 2021</h3>
      <p style={{color:'grey'}}>Alumni Meet 2021 was scheduled on 15 Feb 2021. The meet was be conducted online using a video conferencing / communication platform. Some Alumni (especially in-house alumni), NIT Faculty and staff participated in the meet in person in the institute campus premises. In this Alumni Meet pass-out Batches 1969 & 1970 were invited as Golden Jubilee batches
          whereas the pass-out Batches 1991, 1992, 1993 and 1994 are invited as Silver Jubilee batches.</p>
      </div>
      <div className="videoboxes">
      <iframe width="100%" height="50%"  src="https://www.youtube.com/embed/zOtcs8gvjbw" allowFullScree>
      </iframe>
      <h3 style={{color:'rgba(8,39,89,1)'}}>Alumini Meet 2021</h3>
      <p style={{color:'grey'}}>Alumni Meet 2021 was scheduled on 15 Feb 2021. The meet was be conducted online using a video conferencing / communication platform. Some Alumni (especially in-house alumni), NIT Faculty and staff participated in the meet in person in the institute campus premises. In this Alumni Meet pass-out Batches 1969 & 1970 were invited as Golden Jubilee batches
          whereas the pass-out Batches 1991, 1992, 1993 and 1994 are invited as Silver Jubilee batches.</p>
      </div>
      <div className="videoboxes">
      <iframe width="100%" height="50%"  src="https://www.youtube.com/embed/zOtcs8gvjbw" allowFullScree>
      </iframe>
      <h3 style={{color:'rgba(8,39,89,1)'}}>Alumini Meet 2021</h3>
      <p style={{color:'grey'}}>Alumni Meet 2021 was scheduled on 15 Feb 2021. The meet was be conducted online using a video conferencing / communication platform. Some Alumni (especially in-house alumni), NIT Faculty and staff participated in the meet in person in the institute campus premises. In this Alumni Meet pass-out Batches 1969 & 1970 were invited as Golden Jubilee batches
          whereas the pass-out Batches 1991, 1992, 1993 and 1994 are invited as Silver Jubilee batches.</p>
      </div>
      </div>
      </>
   )

}

export default HomeMain;