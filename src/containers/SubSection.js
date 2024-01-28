import React from "react"
import LinearProgress from '@mui/joy/LinearProgress';
const SubSection = (props) =>{
    const {name,value} = props;
    return(
        <div>
                <div>
                    {name}
                </div>
                <div>
                <LinearProgress determinate value={value} />
                </div>
        </div>
    )
  }
export default SubSection;