import React from 'react'
import { FloatingLabel } from 'react-bootstrap'

export const FloatLabel = () => {
    return (
        <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
        >
            <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
    )
}
