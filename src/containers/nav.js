import React, { useEffect, useRef, useState } from 'react';
import me from "../assests/me.jpeg";
import education from "../assests/education.gif";
import experience from "../assests/experience2.gif"
import carrer from "../assests/rocket.gif"
import hobbie from "../assests/hobbie.gif"
import contactMe from "../assests/contactMe.gif"
import undergrad from "../assests/cap.png"
import grad from "../assests/graduated.png"
import mbLogo from "../assests/mbLogo.png"
import Skills from "./skills";
import Projects from "./projects";
import Hobbies from "./hobbies";
import Footer from "./footer";



export default function Nav(){

    const [isVisible, setIsVisible] = useState(true);



    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
           window.removeEventListener("scroll", listenToScroll);
      }, [])

    const listenToScroll = () => {
        let heightToHideFrom = 1100;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
      
        if (winScroll > heightToHideFrom) {
           isVisible &&      // to limit setting state only the first time
             setIsVisible(false);
        } else {
             setIsVisible(true);
        }
      };

   
    
    return (
        <>
        <div  className='aboutMe-container' id='third'>
        <a className="circle deg-0" href="#skills">
        <img src = {experience} alt="exp" />
        </a>
        <a className="circle deg-45" href="#skills">
        <img src={carrer} alt="carrer"/>
        </a>
        <a className="circle deg-90" href="#ed">
        <img src={education} alt="edu"/>
        </a>
        <a className="circle deg-135" href="#hobbies">
        <img src = {hobbie} alt="hobbie" />
        </a>
        <a className="circle deg-180" href="#contact">
        <img src={contactMe}/>
        </a>
        <div className="aboutMe-image">
            <img src={me} />
        </div>
        </div>  
        <div className='main'>
        <section id="skills" className = "section-skills">
            <div className='section-header'>Experience</div>
        <div className="section-experience">
        <div className="sec-content">
            <h1>2.3+</h1>
            <div>Years Of Experience</div>
        </div>
        <div className="exp-detail" >
        Starting as a Front-end Developer, I progressed into a Full Stack Developer, proficient in React.js, Node.js, Spring Boot, Docker, Jenkins, and Kafka. I embraced Agile methodologies, took on team leadership roles, and occasionally acted as an Architect, overseeing system design and critical technical decisions. This diverse journey has equipped me with a comprehensive skill set and a deep understanding of software development, making me adaptable and well-prepared to address a variety of challenges in the dynamic technology landscape.        </div>
        <div className="exp-logo">
        <img src = {mbLogo} />
        </div>
        </div>
        </section>
        <section>
            <div className='section-header'>Skills</div>
            <Skills/> 
        </section>
        <section>
        <div id="projects" className = "sec-projects">
            <div className='section-header'>Projects</div>
        <Projects/>
        </div>
        </section>
        <section>
            <div className='section-header'>Education</div>
        <div id = "ed" className = "section-education">
        <div className="sec-ed">
        {/* <div className="heading-sec">
        <h1>Education</h1>
        </div> */}
        <div className="ed-sec-con">
        
        <div className="undergrad">
            <div className="small-icon">
                <img src = {grad}/>
            </div>
            <div className="header">
            Post Graduation
            </div>
            <div className="time-period">
            August 2023 - 
            </div>
            <div className="content">
            I am currently pursuing a Master's program in Information Systems at Northeastern University  Boston          </div>
        </div>
        <div className="undergrad">
            <div className="small-icon">
                <img src = {undergrad}/>
            </div>
            <div className="header">
            Undergraduate
            </div>
            <div className="time-period">
            August 2016 - Sep 2020
            </div>
            <div className="content">
            Completed Bachelors of Engineering in Computer science from JSS Academy of Technical Education, Bangalore, India
            </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        <section>
            <div className='section-header'>Hobbies</div>
            <div id = "hobbies" className = "hobbies">
                <Hobbies/>
            </div>
        </section>
        </div>
        <div id="contact">
            <Footer/>
        </div>
        <div className= 'showNav'>
        <div  className={isVisible?'aboutMeNav-container hidden':'aboutMeNav-container show'} >
        <a className="circle deg1-0" href="#skills">
        <img src = {experience} alt="exp" />
        </a>
        <a className="circle deg1-45" href="#skills">
        <img src={carrer} alt="carrer"/>
        </a>
        <a className="circle deg1-90" href="#ed">
        <img src={education} alt="edu"/>
        </a>
        <a className="circle deg1-135" href="#hobbies">
        <img src = {hobbie} alt="hobbie" />
        </a>
        <a className="circle deg1-180" href="#contact">
        <img src={contactMe}/>
        </a>
        </div>
        </div>

        </>
    )
}