import React from "react";
import "./UpcommingEvents.css";
import AMImg from "./../../../images/al_meet.jfif";

function Upcoming() {
    return (
     <>
       <div className="Overlay"></div>
       <div className="container_ue">
          <div className="eventsdetails">
            <div className="eventsdetails--sub">
              <h1>Alumni-Meet 22</h1>
              <div>
                <span>Sep.</span>
                <span>3-4</span>
              </div>
            </div>
          </div>
          <div className="container_ue--sub">
            <div className="enhancer"></div>
            <div>
              <img src={AMImg} alt=""></img>
            </div>
            <div>
              <h2>About the event</h2>
              <p>The Alumni Meet 2022 will be conducted for two days during 3-4 September 2022.
                 The meet will essentially be an offline event but the online component will also 
                 be available for those who cannot make it physically. 
                 The event will be organized by the Alumni and International Affairs Department 
                 of NIT Srinagar and will be held in the NIT campus with a focus on the theme as
                “Alumni Leading NIT Srinagar to the Pinnacle”. The event will be filled with activities,
                 entertainment, and fun attractions. 
                 All the participants will have to register for the event.</p>
            </div>
          </div>
       </div>
     </>
    );
}

export default Upcoming;