import React from 'react'
import { Form } from 'react-bootstrap';

const Properties = (props) => {
    return (
        <div>
            <Form.Select onChange={(e)=>props.handleChange(e.target.value)} className="bg-white" style={{fontFamily:props.isFontComponent?props.currValue:"'Poppins', sans-serif;"}}>
                {props.options.map((e)=>{
                    return <option value={e[0]} style={{fontFamily:props.isFontComponent?e[0]:"'Poppins', sans-serif;", color:props.isColorComponent?e[0]:"initial"}}>{e[1]}</option>;
                })}
            </Form.Select>
        </div>
    )
}

export default Properties
