import * as React from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import AluminiImg from "./../../images/alumni.png";
import UEImg from "./../../images/up_img.jpg";
import PEImg from "./../../images/pt_img.jfif";
import AMImg from "./../../images/al_meet.jfif";

export default function Events() {
    return (
        <>
           <div className="Overlay"></div>
        <section className="container">
            <div className="container_sub">
                <div className="container_sub--Events">
                    <h1>Events</h1>
                    <ul>
                        <li> 
                            <Link to="/UpcommingEvents" className="events-link">Alumni-Meet 22</Link>
                            <div className="link-border"></div>
                        </li>
                        <li> 
                            <Link to="/UpcommingEvents" className="events-link">Upcoming Events</Link>
                            <div className="link-border"></div>
                        </li>
                        <li>
                            <Link to="/PastEvents" className="events-link">Past Events</Link>  
                            <div className="link-border"></div>
                        </li>
                        <li>
                            <a href="https://www.nitsri.ac.in/Pages/DisplayPages.aspx?page=cg&ItemID=36" className="events-link"> Contact Us</a> 
                    
                        </li>
                    </ul>
                </div>
                <div className="container_sub--Details">
                    <img src={AluminiImg} alt="alumin icon" className="container-img"></img>
                    <div>
                       <h1>You're Invited!</h1>
                       <p>From regional club events to Tech Reunions,
                          the NIT Srinagar Alumni Association offers a host of events–and endless ways to engage.
                       </p>
                    </div>
                </div>
            </div>   
        </section>

        <div className="container_sub container_detailed">
            <div className="card">
                <img className="card-img" src={UEImg} alt=" a calendar of upcoming events"></img>
                <div className="card-details">
                    <Link to="/UpcommingEvents"><h2>Upcoming Events</h2></Link>
                    <p>Check out the Association's full listing of in-person and online events. There's something for everyone!</p>
                </div>
            </div>
            <div className="card">
                <img className="card-img" src={PEImg} alt="everyone has a story"></img>
                <div className="card-details">
                    <Link to="/PastEvents"><h2>Past Events</h2></Link>
                    <p>lorem dolor ipsum sit amet</p>
                </div>
            </div>
            <div className="card">
                <img className="card-img" src={AMImg} alt="Alumni meet text with animated humans"></img>
                <div className="card-details">
                    <Link to="/UpcommingEvents"><h2>Alumni-Meet 22</h2></Link>
                    <p>Join your fellow NIT Srinagar volunteers for two days of learning, inspiration, and achievement. Find out about the Alumni-meet 22.</p>
                </div>
            </div>
        </div>
        </>
    );
}