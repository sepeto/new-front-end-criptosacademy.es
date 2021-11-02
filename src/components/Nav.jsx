import React from "react";

import logo from "../assets/xstate.svg"
import '../styles/components/nav.css';
import {MdHome, MdCalculate, MdPerson, MdNoteAlt} from "react-icons/md";

function Nav () {
    return (
        <div className="nav">
            <div className="nav-container">
                <header className="header-site">
                    <a href="/" className="header-site-logo">
                        <img src={logo} alt="" />
                    </a>
                </header>
                <nav className="nav-site">
                    <ul className="nav-list">
                        <li className="nav-list-item"> <span><MdHome /></span> Home</li>
                        <li className="nav-list-item"> <span><MdCalculate /></span> Calculate</li>
                        <li className="nav-list-item"> <span><MdPerson /></span> About</li>
                        <li className="nav-list-item"> <span><MdNoteAlt /></span> Blog</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Nav;