import React from "react"
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Caraousel from "./caraousel";



export default function Hobbies(){
    const video = "https://res.cloudinary.com/dwf2vdotu/video/upload/v1706223933/vm3n2zndjxwit7rmce2o.mp4";
    const video1 = "https://res.cloudinary.com/dwf2vdotu/video/upload/v1706223931/mpack8eyl2lg5a3zp3t9.mp4";
    const blender1 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224436/hobbies/blender/vuqlv9xyuipbil1t3o5g.png";
const blender2 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224436/hobbies/blender/sktti6vuilsvjo1lgkjj.jpg";
const blender3 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224436/hobbies/blender/aisz9tjdbx91mcx8vnk6.jpg";
const photo1 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224305/hobbies/photography/ptgtttncr5goyu6px96k.jpg";
const photo2 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224305/hobbies/photography/pxnmgvdl4x4gfwmbzcmh.jpg";
const photo3 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224305/hobbies/photography/y8pwbkstfgg7aqms3zpe.jpg";
const photo4 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224305/hobbies/photography/v9wsf9nhfcyivsdpec2w.jpg";
const photo5 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224305/hobbies/photography/w333c9a6rraoujvg3jno.jpg";
const canva1 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224484/hobbies/photoshop/xsw5qsnuoqceyrykksw7.jpg"
const canva2 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224484/hobbies/photoshop/zehsvck4dbgr8ped7fvg.jpg"
const canva3 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224484/hobbies/photoshop/euydghwghi4d7najmgvs.jpg"
const canva4 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224484/hobbies/photoshop/dnjz8owquan5wixjijiu.jpg"
const canva5 = "https://res.cloudinary.com/dwf2vdotu/image/upload/v1706224484/hobbies/photoshop/y8ctkymmaggjet3p17uz.jpg"

    
    return (
        <>

        <div className="hobbies-container">
        {/* <div className="hobbies-name">
            <h1>My Hobbies</h1>
        </div> */}
        <div>
            <div className="hobbie-circle-container1">
                    <div className="hobbie-circle">
                    <div className="hobbie-title">
                            Blender
                        </div>
                        <Caraousel image1 = {blender1} image2 = {blender2} image3 = {blender3}/>
                    </div>
                    <div className="hobbie-circle">
                    <div className="hobbie-title">
                            Photography
                        </div>
                    <Caraousel image1 = {photo1} image2 = {photo2} image3 = {photo3} image4 = {photo4} image5 = {photo5} />
                    </div>
                    <div className="hobbie-circle">
            <div className="hobbie-title">
                            Travelling
                        </div>
            <video controls = {false} width="100%" autoplay="autoplay" controlsList="false" className="Video1" muted = {true} loop = {true}>
                    <source src={video1} type="video/mp4"/>
                    </video>
                    
            </div>
                    
            </div> 
            <div className="hobbie-circle-container2">
                    <div className="hobbie-circle">
                    <div className="hobbie-title">
                            Premier Pro
                        </div>
                    <video controls = {false} width="100%" autoplay="autoplay" controlsList="false" className="Video" muted = {true} loop = {true}>
                    <source src={video} type="video/mp4"/>
                    </video>
                    
                    </div>  
                    <div className="hobbie-circle">
                    <div className="hobbie-title">
                            Digital Marketing
                    </div>
                    <Caraousel image1 = {canva1} image2 = {canva2} image3 = {canva3} image4 = {canva4} image5 = {canva5}/>
                    </div>                  
            </div>
        </div>
        </div>
        </>
    )
}