import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row,Col, Button , Form  } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Filtercandidate = () => {
  return (
    <div>
     <Sidebar />
        <NavbarMenu />
        <div className='people'>
          <h4 className='mt-5 text-muted text-center mt-5'>Filter Candidates List</h4>
   
        <Container className='search-contact'>
            
            <Form>
        
        
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Date and Time of adding a candidate</Form.Label>
                <div className='d-flex'>
                  <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold'>From</Form.Label>
                    <Form.Control type="date" />

                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold'>To</Form.Label>
                    <Form.Control type="date" />

                    </Col>
                  </Row>
                  </div>
              </Form.Group>
            </Col>
          </Row>
                  <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3'>Company Name </Form.Label>
                <Form.Control type="text" defaultValue="India" />
              </Form.Group>
            </Col>
           
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3'>Candidate name  </Form.Label>
                <Form.Control type="text" defaultValue="Prashant Kumar" />
              </Form.Group>
            </Col>
          </Row>
               
         

        </Form>
        </Container>
        </div>
        <div className='d-flex justify-content-center title-absolute py-4 border-top'>
                        <Button variant='secondary' className='mx-3 text-white'>Reset</Button>
                        <Link to='/MyCandidate'><Button variant='primary' className='mx-3 text-white'>Search</Button></Link>
                        <Link to='/MyCandidate'><Button variant='danger' className='mx-3 text-white'>Colse</Button></Link>
                    </div>
    </div>
  )
}

export default Filtercandidate