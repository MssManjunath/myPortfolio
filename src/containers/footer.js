import React from "react"
import github from "../assests/github.png";
import linkdein from "../assests/linkdein.png";
import medium from "../assests/mediumm.png";
import instagram from "../assests/instagram.png";
export default function Footer(){
    return (
        <>
        <div className="footer-container">
        <div className="footer-upper">
            <div className="footer-navigations">
                <div className="footer-header">Navigations</div>
                <ul>
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Hobbies</li>
                </ul>
            </div>
            <div className="footer-contact">
                <div className="footer-header">Contact Me</div>
                <ul>
                    <li><a href="mailto:manur.sa@northeastern.edu">Email : manur.sa@northeastern.edu</a></li>
                    <li>Location: Boston,MA</li>
                </ul>
            </div>
            <div className="footer-social">
                <div className="footer-header">Follow Me</div>
                    <a href = "https://www.linkedin.com/in/mss-manjunath-929a99153/" target="_blank">
                        <img src = {linkdein} className="social-media"></img>
                    </a>
                    <a href="https://medium.com/@saimmanjunath" target="_blank">
                        <img src = {medium} className="social-media"></img>
                    </a>
                    <a href="https://www.instagram.com/mss_manjunath/" target="_blank">
                        <img src = {instagram} className="social-media"></img>
                    </a>
                    <a href="https://github.com/MssManjunath" target="_blank">
                        <img src = {github} className="social-media"></img>
                    </a>

            </div>
        </div>
        <div className="footer-bottom">
            <div>
            Built using React
            </div>
            <div>
                Download Resume
            </div>
        </div>
        </div>
        </>
    )
}