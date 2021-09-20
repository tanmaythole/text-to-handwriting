import React from 'react'
import { Container, Form } from 'react-bootstrap'

const TextBox = ({heading, setHeading, textArea, setTextArea}) => {
    return (
        <Container className="col-md-6 m-auto mt-5">
            <Form.Group className="mb-3">
                <h5>Enter Heading:</h5>
                <Form.Control onChange={(e)=>setHeading(e.target.value)} value={heading} />
            </Form.Group>
            <Form.Group className="mb-3">
                <h5>Enter Your Text Here</h5>
                <Form.Control as="textarea" rows={7} onChange={(e)=>setTextArea(e.target.value)} value={textArea} />
            </Form.Group>
        </Container>
    )
}

export default TextBox
