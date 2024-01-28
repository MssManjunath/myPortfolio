import { useState,useEffect,useRef } from "react";
import socialNet from "../assests/social_net.jpg"
import quad from "../assests/quad_1.png"
import linearRegression from "../assests/linear_Regression.jpg"
import eCommerce from "../assests/e-commerce.jpg"
import chatBot from "../assests/ChatBot.png";
import resImage from "../assests/restaurant-website.jpg";

const Projects = () => {

    return (
      <div className="sec-projects-container">
            {/* <div className="sec-name">
                    <h1>Projects</h1>
            </div> */}
            <div className="sec-cards">
                <a href="https://github.com/Boston-Gang/Ambiencee-UI" target="_blank" >
                {/* <div className={hoverCard?"proc-card-background-hovering":"proc-card-background"} ></div> */}
                {/* <div className={hoverCard?"proc-card-background-2-hovering":"proc-card-background-2"} ></div> */}
                <div className="card1">
                    <div className="proc-image">
                        <img src={resImage} />
                    </div>
                    <div className="proc-title">
                        Ambieencee Website
                    </div>
                    <div className="proc-tags-container">
                        <div className="proc-tag">
                            ReactJs
                        </div>
                        <div className="proc-tag">
                            NodeJs
                        </div>
                        <div className="proc-tag">
                            FrontEnd
                        </div>
                    </div>
                    
                </div>
                </a>
                <div>
                {/* <div className={hoverCard2?"proc-card-background-hovering":"proc-card-background"} ></div> */}
                {/* <div className={hoverCard2?"proc-card-background-2-hovering":"proc-card-background-2"} ></div> */}
                <div className="card1">
                    <div className="proc-image">
                        <img src={eCommerce} />
                    </div>
                    <div className="proc-title">
                        NEU-Deals
                    </div>
                    <div className="proc-tags-container">
                        <div className="proc-tag">
                            React
                        </div>
                        <div className="proc-tag">
                            NodeJs
                        </div>
                        <div className="proc-tag">
                            SpringBoot
                        </div>
                    </div>
                    
                </div>
                </div>
                
                <a href = "https://github.com/MssManjunath/Chat_Bot" target="_blank" >
                {/* <div className={hoverCard3?"proc-card-background-hovering":"proc-card-background"} ></div> */}
                {/* <div className={hoverCard3?"proc-card-background-2-hovering":"proc-card-background-2"} ></div> */}
                <div className="card1">
                    <div className="proc-image">
                        <img src={chatBot} />
                    </div>
                    <div className="proc-title">
                        Chat-Bot
                    </div>
                    <div className="proc-tags-container">
                        <div className="proc-tag">
                            Python
                        </div>
                        <div className="proc-tag">
                            NLP
                        </div>
                        <div className="proc-tag">
                            TensorFlow
                        </div>
                    </div>
                    
                </div>
                </a>
                
                <a href = "https://github.com/MssManjunath/Social-Network-Site" target ='_blank' >
                {/* <div className={hoverCard4?"proc-card-background-hovering":"proc-card-background"} ></div> */}
                {/* <div className={hoverCard4?"proc-card-background-2-hovering":"proc-card-background-2"} ></div> */}
                <div className="card1">
                    <div className="proc-image">
                        <img src={socialNet} />
                    </div>
                    <div className="proc-title">
                        Social Network
                    </div>
                    <div className="proc-tags-container">
                        <div className="proc-tag">
                            HTMl
                        </div>
                        <div className="proc-tag">
                            PHP
                        </div>
                        <div className="proc-tag">
                            MySql
                        </div>
                    </div>
                    
                </div>
                </a>
                <a href="https://github.com/MssManjunath/Quadratic-Equations" target="_blank">
                {/* <div className={hoverCard5?"proc-card-background-hovering":"proc-card-background"} ></div> */}
                {/* <div className={hoverCard5?"proc-card-background-2-hovering":"proc-card-background-2"} ></div> */}
                <div className="card1" >
                    <div className="proc-image">
                        <img src={quad} />
                    </div>
                    <div className="proc-title">
                        App to Solve Quadratic Equations
                    </div>
                    <div className="proc-tags-container">
                        <div className="proc-tag">
                            Java
                        </div>
                    </div>
                    
                </div>
                </a>
                <a href="https://github.com/MssManjunath/Linear-Regression-Representation-OpenGl" target="_blank">
                {/* <div className={hoverCard6?"proc-card-background-hovering":"proc-card-background"} ></div> */}
                {/* <div className={hoverCard6?"proc-card-background-2-hovering":"proc-card-background-2"} ></div> */}
                <div className="card1">
                    <div className="proc-image">
                        <img src={linearRegression} />
                    </div>
                    <div className="proc-title">
                        Live Demo of Linear Regrssion
                    </div>
                    <div className="proc-tags-container">
                        <div className="proc-tag">
                            Java
                        </div>
                        <div className="proc-tag">
                            Open GL
                        </div>
                    </div>
                    
                </div>
                </a>
            </div>
      </div>
    );
  }
  
  export default Projects;
  