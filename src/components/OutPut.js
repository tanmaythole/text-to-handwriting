import React from 'react'

const OutPut = (props) => {
    return (
        <div style={{width:"794px", height:"1123px", margin:"auto"}}>
            <div style={{width:"100%", height:"100%", backgroundSize:"cover", backgroundImage:"url(/paper-1.png)"}}>
                <div style={{padding: "105px 16px 30px 132px", lineHeight: "1.85", fontSize:"20px", fontFamily:props.fontFamily}}>
                    {props.fontFamily}
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default OutPut
