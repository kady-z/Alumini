import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./componentsstyle/Header.css";
import Img from "./componentsimages/NitAlumini.jpg"
function Header(){
  const [DisplayPresent1,setDisplayPresent1]=useState('none')
  const [DisplayPresent2,setDisplayPresent2]=useState(false)
  function Onclick(){
    if(DisplayPresent1==='none'){
      setDisplayPresent1('block');
    }else{
      setDisplayPresent1('none');
    }
  }
  function Onhamclick(){
   if(DisplayPresent2===false){
     setDisplayPresent2(true);
   }
   else{
    setDisplayPresent2(false);
   }
  }

    return(
        <div className="header">
   <div className="hamborgerlogoresponsive">
   <div className="nitlogodiv">
     <span className="CollegeName">NITSXR</span><span ><b>ALUMINI</b></span>
     </div>
      <div className="hamburgerBox" onClick={Onhamclick}>
      <span>
<div className="hamburger"></div>
<div className="hamburger"></div>
<div className="hamburger"></div>
    </span>
      </div>
   </div>
  <div className={DisplayPresent2?"hamburgerresponsivedatashow":"hamburgerresponsivedata"}>
  <div className="menu">
     <ul  className="upperul">
       <li className="upper">Home</li>
       <a href="#" style={{textDecoration:'none',color:'inherit'  }}>
       <li  className="upper"   onClick={Onclick}>Events <span style={{fontSize:'1.2rem'}} id='btn'  onClick={Onclick}>&#9660;</span>
        <ul style={{display:DisplayPresent1,zIndex:1,position:'absolute',border:'1px solid grey',borderRadius:'5px', backgroundColor:'white',width:'10rem',textAlign:'center',boxShadow: '0px 8px 16px 0px black'}}>
          <li style={{padding:'0.6rem',fontSize:'1rem',color:'black'}}>Meet'22</li>
          <hr  style={{height:'1px',backgroundColor:'grey'}}/>
          <li style={{padding:'0.6rem',fontSize:'1rem',color:'black'}}>Past Events</li>
        </ul>
       </li>
       </a>
       <li  className="upper">Roles</li>
     </ul>
   </div>
   <div className="registerbtn">
     <button className="btn">Register Now</button>
   </div>
  </div>
<hr style={{height:'0.1rem',backgroundColor:'red'}}/>

         
        </div>
    )
}
export default Header;