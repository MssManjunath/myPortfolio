import React,{useEffect, useRef, useState} from 'react';
import CircularProgressComp from "./CircularProgressComp";
import SubSection from './SubSection';

function Skills() {
    const ref1 = useRef(null);
    const [reload,setReload] = useState(false);
      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
        setReload(!reload)
        );
        observer.observe(ref1.current);
        return () => {
          observer.disconnect();
        };
      }, [ref1]);

      const array = [
        {
            name:"React",
            value:90
        },
        {
            name:"Node Js",
            value:80
        },
        {
            name:"Express Js",
            value:80
        },
        {
            name:"Python",
            value:90
        },

        {
            name:"SpringBoot",
            value:90
        },
        {
            name:"Flask/Django",
            value:75
        },
        {
            name:"DevOps",
            value:80
        },
        {
            name:"MySql/PostGres/MongoDb",
            value:90
        },
        {
            name:"React Native",
            value:83
        }
      ]

  return (
    <div ref={ref1}>
        <div className="sec-skills">
            {/* <div className="heading-skills">
                <h1>Skills</h1>
            </div> */}
            <div className="skills-sec">
            {
            array.map(items =>(
            <div className='skill-subSection'>
            <CircularProgressComp name = {"React"} endValue = {items?.value} reload = {reload}/>
            <div style={{marginTop:"16px",wordBreak:"break-word",width:"100%",display:"flex",justifyContent:"center"}}>
                {items?.name}
            </div>  
            </div>
            ))
            }
            
                            {/* <CircularProgressComp name = {"React"} endValue = {90} reload = {reload}/> */}

                {/* <div className="skills-card frontEnd">
                    <div className="exp-title">
                        Front End
                    </div>
                    <div className="exp-content">
                        <div className="content-title">
                            <ul>
                                <li>
                                    React JS
                                </li>
                                <li>
                                    Three JS
                                </li>
                                <li>
                                    SWING
                                </li>
                                <li>
                                    CSS/SASS
                                </li>
                                <li>
                                    MUI
                                </li>
                                <li>
                                    BootStrap
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="skills-card backend">
                    <div className="exp-title">
                        Back End
                    </div>
                    <div className="exp-content">
                        <div className="content-title">
                        <ul>
                                <li>
                                    Node JS
                                </li>
                                <li>
                                    Express JS
                                </li>
                                <li>
                                    SPRING BOOT
                                </li>
                                <li>
                                    Django
                                </li>
                                
                            </ul>
                        </div>
                       
                    </div>
                </div>

                <div className="skills-card devOps">
                    <div className="exp-title">
                        DevOps
                    </div>
                    <div className="exp-content">
                        <div className="content-title">
                            <ul>
                                <li>
                                    Jenkins
                                </li>
                                <li>
                                    Kubernetes
                                </li>
                                <li>
                                    Docker
                                </li>
                                
                            </ul>
                        </div>
                       
                    </div>
                    
                </div>
                
                <div className="skills-card database">
                    <div className="exp-title">
                        DataBase
                    </div>
                    <div className="exp-content">
                        <div className="content-title">
                        <ul>
                                <li>
                                    My Sql
                                </li>
                                <li>
                                    PostGre Sql
                                </li>
                                <li>
                                    MongoDb
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                   
                </div>
                 */}

            </div>
        </div>        
    </div>
  );
}

export default Skills;
