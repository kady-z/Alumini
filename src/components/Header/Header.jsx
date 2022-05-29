import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <header>
    <div class="nav-container">
        <input type="checkbox" name="" id="check" />

        <div class="logo-container">
            <h3 class="logo">Brand<span>Name</span></h3>
        </div>

        <div class="nav-btn">
            <div class="nav-links">
                <ul>
                    <li class="nav-link nav-link-border">
                        <Link to="/"><i class="fas fa-home nav-icon"></i>Home</Link>
                        <span></span>
                    </li>

                    <li class="nav-link">
                        <Link to="/Roles"><i class="fas fa-archway nav-icon"></i><div>Roles</div></Link>
                    </li>

                    <li class="nav-link">
                        <Link to="Events"><i class="fab fa-servicestack nav-icon"></i><div>Events<i class="fas fa-caret-down"></i></div></Link>
                        <div class="dropdown">
                            <ul>
                                <li class="dropdown-link">
                                    <Link to="/UpcommingEvents">Meet 22</Link>
                                </li>
                                <li class="dropdown-link">
                                    <Link to="/PastEvents">Past Events</Link>
                                </li>
                                <div class="arrow"></div>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-link nav-link-border">
                        <a href="#"><i class="fas fa-address-card nav-icon"></i>About</a>
                        <span></span>
                    </li>
                </ul>
            </div>

            <div class="log-sign">
                <a href="#" class="btn transparent">Log in</a>
                <a href="#" class="btn solid">Sign Up</a>                    
            </div>
        </div>

        <div class="hamburger-menu-container">
            <div class="hamburger-menu">
                <div></div>
            </div>
        </div>

    </div>
    <hr />
</header>
  );
}