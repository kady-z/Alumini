import * as React from "react";
import { Link } from "react-router-dom";
import "./PastEvents.css";
import PEImg from "./../../../images/pt_img.jfif";


export default function PastEvents() {
    return (
        <>
        <div className="Overlay"></div>
        <section className="container">
            <div className="container_sub">
                <div className="container_sub--Events">
                    <h1>Past Events</h1>
                    <ul>
                        <li>
                            <a href="https://youtu.be/zOtcs8gvjbw" className="events-link"> Alumni-Meet 21</a> 
                            <div className="link-border"></div>
                        </li>
                        <li>
                            <a href="https://youtu.be/WgbxYnSQYPc" className="events-link"> Alumni-Meet 18</a> 
                            <div className="link-border"></div>
                        </li>
                        <li> 
                            <Link to="/UpcommingEvents" className="events-link">Upcoming Events</Link>
                            <div className="link-border"></div>
                        </li>
                        <li>
                            <a href="https://www.nitsri.ac.in/Pages/DisplayPages.aspx?page=cg&ItemID=36" className="events-link"> Contact Us</a> 
                        </li>
                    </ul>
                </div>
                <div className="container_sub--Details pe_cont">
                    <img src={PEImg} alt="alumin icon" className="container-img"></img>
                    <div>
                       <h1>You're Invited!</h1>
                       <p>From regional club events to Tech Reunions,
                          the NIT Srinagar Alumni Association offers a host of events–and endless ways to engage.
                       </p>
                    </div>
                </div>
            </div>   
        </section>

        <div className="container_sub container_detailed container_pe">
            <div className="card">
                    <iframe src="https://www.youtube.com/embed/zOtcs8gvjbw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                <div className="card-details">
                    <h2>Alumni-Meet 21</h2>
                    <p>Alumni Meet 2021 was scheduled on 15 Feb 2021. The meet was be conducted online using
                       a video conferencing / communication platform. Some Alumni (especially in-house alumni), 
                       NIT Faculty and staff participated in the meet in person in the institute campus premises.
                       In this Alumni Meet pass-out Batches 1969 & 1970 were invited as Golden Jubilee batches whereas
                       the pass-out Batches 1991, 1992, 1993 and 1994 are invited as Silver Jubilee batches.
                    </p>
                </div>
            </div>
            <div className="card">
                    <iframe src="https://www.youtube.com/embed/WgbxYnSQYPc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                <div className="card-details">
                    <h2>Alumni-Meet 18</h2>
                    <p>Alumni Meet 2021 was scheduled on 15 Feb 2021. The meet was be conducted online using a 
                       video conferencing / communication platform. Some Alumni (especially in-house alumni), NIT
                       Faculty and staff participated in the meet in person in the institute campus premises. In 
                       this Alumni Meet pass-out Batches 1969 & 1970 were invited as Golden Jubilee batches whereas
                       the pass-out Batches 1991, 1992, 1993 and 1994 are invited as Silver Jubilee batches.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}