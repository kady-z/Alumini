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
import Imagestory1 from "./../../images/stories.png";
import Imagestory2 from "./../../images/stories2.png"

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



      <div className="storiesbox">
         <h1 style={{padding:'1rem'}}>Top Stories</h1>
            <div className="boxstory-closer">
               <img src={Imagestory1} className="imgstory1"/>
               <div className="story1">
                  <h3>
             Topper among 110 students from NIT Srinagar qualify GATE exam
                  </h3>
                  <p>
                  Mohit Patidar, a B Tech student from the Metallurgical and
                   Materials Engineering (MME) Department has secured all India first rank (AIR-1)
                    in GATE 2022 and Ayush Kumar Mall from Information Technology (IT) Department secured AIR-94.
                     The qualified students comprise 28 students of Civil Engineering, 21 in Electrical Engineering, 
                     16 from the Electronics and Communications Department,14 in Mechanical Engineering, 10 of Chemical Engineering 
                     Department, 8 from Information Technology, seven from Metallurgical and Materials Engineering Department,
                   and two students from Computer Science and Engineering Departments have qualified the GATE exams.
                  </p>
               </div>
            </div>
          <hr style={{height:'0.1rem',backgroundColor:'grey',width:'100%'}}/>
            <div className="boxstory-closer">
               <img src={Imagestory2} className="imgstory1"/>
               <div className="story1">
                  <h3>
                  IIT Delhi, NIT Srinagar Sign MoU for Academic and Research Collaboration
                  </h3>
                  <p>
                  Indian Institute of Technology (IIT) Delhi and National Institute of Technology (NIT) Srinagar, J&K have
                   signed an MoU for collaboration on academic and research activities in the areas of mutual interest including 
                   collaborative research works, joint supervision of Ph.D. students, joint workshops, and seminars, etc. 
                   NITS students, with a CGPA of 8.00 at the end of their 6th semester (three years), will be eligible to apply 
                   for a project in summer/winter and complete their fourth year (7th and 8th semesters) at IIT Delhi. After that,
                    they will be considered for early admission to the IIT Delhi Ph.D. programs.
                  </p>
               </div>
            </div>
      </div>

      <hr style={{height:'0.2rem',backgroundColor:'orange',width:'100%'}}/>
        <div className="finaldivtexture">
               <div className="finalinfo">
                <h1  className="h11" style={{textDecoration:'underline'}}>Dean, Alumni and International Affairs</h1>
                <p style={{padding:'1rem'}}>Dr. Mohammad Shafi Mir is a professor in the department of Civil engineering at NIT Srinagar. 
                   He also runs the Transportation engineering and Planning Division in Civil
                    Engineering Department at NIT Srinagar.
                    </p>
               </div>
               <div className="finalinfo">
               <h1 className="h12" style={{textDecoration:'underline'}}>GET IN TOUCH WITH US</h1>
                <p style={{padding:'0.1rem'}}>Address:  AIA, NIT Srinagar, Hazratbal - 190006</p>
                <p style={{padding:'0.1rem'}}>Email: alumnidean@nitsri.ac.in</p>
               </div>
        </div>


      </>
   )

}

export default HomeMain;