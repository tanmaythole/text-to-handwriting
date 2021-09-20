import React from 'react'

const OutPut = (props) => {
    
    return (
        <div style={{width:"794px", height:"1123px", margin:"auto"}} id="outputSection">
            <div style={{width:"100%", height:"100%", backgroundSize:"cover", backgroundImage:"url(/paper-1.png)"}}>
                <div style={{height:"95%", overflow:"hidden"}}>
                    <div style={{padding: "108px 16px 30px 132px", lineHeight: "1.85", fontSize:"18px", fontFamily:props.fontFamily, whiteSpace:'pre-wrap'}}>
                        {props.text}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default OutPut
