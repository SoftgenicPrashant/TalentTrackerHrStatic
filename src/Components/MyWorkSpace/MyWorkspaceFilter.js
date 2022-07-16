import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import {Container , Row , Col, Form,Button} from 'react-bootstrap'
const MyWorkspaceFilter = () => {
  return (
    <div>
        <NavbarMenu />
        <Sidebar />
    
            <Container style={{marginTop:"10rem"}}>
            <Form>
                <Row>
                 
                    <Col xs={6}>
                        <Form.Label className='fw-bold '>Date -time of locking the JD </Form.Label>
                        <Row>
                          <Col xs={6}>
                          <Form.Label className='fw-bold '>From</Form.Label>
                          <Form.Control type="date"></Form.Control>

                          </Col>
                          <Col xs={6}>
                          <Form.Label className='fw-bold '>To</Form.Label>
                          <Form.Control type="date"></Form.Control>

                          </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                      <Row>
                        <Col>
                        <Form.Label className='fw-bold'>Time</Form.Label>
                        <Form.Control type="time"></Form.Control>
                        </Col>
                      </Row>
                        
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={6}>
                        <Form.Label className='fw-bold mt-5'>Client Name</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Col>
                    </Row>
                <Button variant='primary' className='mx-2 mt-4'>Save</Button> 
                <Button variant='dark' className='mx-2 mt-4'>Close</Button>                  
                 
                  </Form>
                
            </Container>
    </div>
  )
}

export default MyWorkspaceFilter