import React from 'react'
import { Dropdown } from 'react-bootstrap';
import './Properties.css';

const Properties = (props) => {
    return (
        <div>
            <Dropdown  onSelect={(e) => {props.handleChange(props.options[e])}}>
                <Dropdown.Toggle className="dropdownbtn d-flex justify-content-between align-items-center" title={props.currValue[1]} style={{fontFamily:props.isFontComponent?props.currValue[0]:"'Poppins', sans-serif;"}}>
                    {props.currValue[1]}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {props.options.map((e, index)=>{
                        return <Dropdown.Item eventKey={index} className="dd-item d-flex" style={{fontFamily:props.isFontComponent?e[0]:"'Poppins', sans-serif;", color:props.isColorComponent?e[0]:"initial"}}>
                            {!props.isFontComponent?(
                                props.isColorComponent?(
                                    <div style={{background:e[0]}} className="colorBox" ></div>
                                ):(<img src={`/assets/images/${e[0]}`} alt={e[1]} />)
                            ):""}
                            {e[1]}
                        </Dropdown.Item>
                    })}    
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Properties
