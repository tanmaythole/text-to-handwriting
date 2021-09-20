import React from 'react'

const OutPut = (props) => {
    
    return (
        <div style={{width:"794px", height:"1123px", margin:"auto"}} id="outputSection">
            <div style={{width:"100%", height:"100%", backgroundSize:"cover", backgroundImage:"url(/paper-1.png)"}}>
                <div style={{padding: "0px 16px 0 132px",height:"95%", overflow:"hidden", fontFamily:props.fontFamily, whiteSpace:'pre-wrap'}}>
                    <div className="text-center" style={{lineHeight: "4", fontSize:"25px"}}>
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
