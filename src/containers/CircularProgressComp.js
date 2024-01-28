import React,{useEffect, useState} from "react";
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';

export default function CircularProgressComp(props){
    const {reload,endValue,name} = props;
    const { value: value2, reset } = useCountUp({
        isCounting: true,
        duration: 3,
        start: 0,
        end: endValue,
      });
    useEffect(() =>{
        reset()
        console.log(reload)
    },[reload])
    
    return(
        <CircularProgress 
        color = "primary"
        sx={{
            "--CircularProgress-size": "110px",
            "--CircularProgress-trackThickness": "10px",
            "--CircularProgress-progressThickness": "10px",
          }}
          determinate value={value2}>
                <div>{value2}%</div>
            </CircularProgress>
    )
}