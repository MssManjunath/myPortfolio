import React,{useState,useEffect} from "react"
import mainLogo from "../assests/main_logo.png"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function CaraouselComponent(props){
    const {image1,image2,image3,image4,image5} = props;
    
    return (
        <Carousel autoPlay = {true} 
        infiniteLoop = {true} 
        showArrows = {false} 
        showIndicators = {false} 
        stopOnHover = {true} 
        showThumbs = {false} 
        showStatus = {false}>

                <div>
                    <img src={image1} />
                </div>
                <div>
                <img src={image2}/>
                </div>
                <div>
                <img src={image3?image3:image1}/>
                </div>
                <div>
                <img src={image4?image4:image2} />
                </div>
                <div>
                <img src={image5?image5:image2} />
                </div>
            </Carousel>
      );
    }