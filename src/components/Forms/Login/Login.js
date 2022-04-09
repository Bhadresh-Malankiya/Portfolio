import React from 'react'
import { Form, Button, Card, Row, Col } from 'react-bootstrap'

const Login = () => {
    return (
        <Col xs={10} md={8} lg={4} className="">
            <Card className="p-4 bg-white shadow-sm rounded" >
            <Row>
            <Form>
            <Form.Label className="w-100 text-center">
                <h2>
                Login
                </h2>
            </Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" className="bg-light" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  className="bg-light" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remeber me" />
            </Form.Group>
            <Button variant="primary" type="submit" className='w-100'>
                Login
            </Button>
        </Form>
            </Row>
        
        </Card>
        </Col>
     

    )
}

export default Login