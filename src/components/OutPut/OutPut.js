import React from 'react';
import './OutPut.css';

const OutPut = (props) => {
    
    return (
        <div className="shadow" id="outputSection">
            <div className="background" style={{backgroundImage:"url(/assets/images/"+props.paper+")"}}>
                <div className="textBox" style={{color:props.color, fontFamily:props.fontFamily}}>
                    <div className="text-center" style={{height:"100px", fontSize:"25px"}}>
                        {props.heading}
                    </div>
                    <div style={{paddingTop:"5px", lineHeight: "1.85", fontSize:"18px"}}>
                        {props.text}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default OutPut
