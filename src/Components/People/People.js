import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Button, Col, Container , Row, Form} from 'react-bootstrap'
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';
import './People.css';
import { Link } from 'react-router-dom';
const options = [
    { value: ' ' },
  
  ]
  const options4 = [
    { value: 'Services', label: 'Services' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'IT- Information Technology', label: 'IT- Information Technology' },
    { value: 'Education', label: 'Education' },
    { value: 'Real estate/Construction', label: 'Real estate/Construction' },
    { value: 'Finance/BFSI', label: 'Finance/BFSI' },
    { value: 'Healthcare/Pharm', label: 'Healthcare/Pharm' },
    { value: 'Retail', label: 'Retail' },
    { value: 'Hospitality', label: 'Hospitality' },
    { value: 'Public Sector/Philonthropy/Associations', label: 'Public Sector/Philonthropy/Associations' },
    { value: 'FMCG', label: 'FMCG' },
    { value: 'Textile', label: 'Textile' },
    { value: 'Telecom', label: 'Telecom' },
    { value: 'logistics/supply chain', label: 'logistics/supply chain' },
    { value: 'Media/Publishing/Entertainment', label: 'Media/Publishing/Entertainment' },
    { value: 'Others', label: 'Others' }
]
  const options1 = [
    { value: 'Patna', label:'Patna'},
    { value: 'Ranchi', label:'Ranchi'},
    { value: 'Delhi', label:'Delhi'},
    {value:'Punjab', label:'Punjab'},
    {value:'Pune', label:'Pune'},
    {value:'Hydrabaad', label:'Hydrabaad'},
    {value:'Haryana', label:'Haryana'},
    {value:'Gujrat', label:'Gujrat'},
    {value:'Bhopal', label:'Bhopal'},
    {value:'Chennai', label:'Chennai'},
  
  ]
  const options2 = [
    { value: ' 8.33%', label:'8.33%'},
    { value: ' 7%', label:'7%'},
    { value: ' 7.5 %', label:'7.5 %'},
    { value: ' 7.25 %', label:'7.25 %'},
    { value: ' 6 %', label:'6 %'},
    { value: ' 10 %', label:'10 %'},
    
  
  ]
  const paymentterms = [
    {value:'30 days', label:'30 days'},
    {value:'45 days', label:'45 days'},
    {value:'60 days', label:'60 days'},
    {value:'75 days', label:'75 days'},
    {value:'90 days', label:'90 days'},
  ]
  const Yourpayout = [
    {value:'25%', label:'25%'},
    {value:'30%', label:'30%'},
    {value:'35%', label:'35%'},
    {value:'40%', label:'40%'},
    {value:'45 %', label:'45%'},
    {value:'50 %', label:'50%'},
    {value:'55 %', label:'55%'},
    {value:'60 %', label:'60%'},
    { value: '65%', label:'65%'},
    { value: ' 70%', label:'70%'},

  ]
  const JDstatus = [
    {value:'Open (not accepted by any user)', label:'Open (not accepted by any user)'},
    {value:'Pending delivery (accepted but not yet delivered)', label:'Pending delivery (accepted but not yet delivered)'},
    {value:'delivery done-await client feedback', label:'Delivery done-await client feedback'},
    {value:'interview stage', label:'Interview stage'},
    {value:'Offer stage', label:'Offer stage'},
    {value:'JD successfully closed', label:'JD successfully closed'}, 
    {value:'rework (with reason)', label:'Rework (with reason)'}
  ]
const People = () => {
 const   handleChange = (
        newValue: OnChangeValue<ColourOption, false>,
        actionMeta: ActionMeta<ColourOption>
      ) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
      };
   const   handleInputChange = (inputValue: any, actionMeta: any) => {
        console.group('Input Changed');
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
      };
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <div className='people'>
          
   
        <Container className='search-contact'>
            <form>
                <div className='p-3 form-div' >
                  <Row>

                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label className='fw-bold'> JD upload date-time </Form.Label>
                        <Row>
                          <Col xs={6}>
                            <Row>
                              <Col xs={6}>
                              <Form.Label className='fw-bold'> From</Form.Label>
                              <Form.Control type='date' placeholder='date' />

                              </Col>
                              <Col xs={6}>
                              <Form.Label className='fw-bold'> To </Form.Label>
                              <Form.Control type='date' placeholder='date' />

                              </Col>
                            </Row>

                          </Col>
                          <Form.Label className='fw-bold'> Time </Form.Label>

                          <Col xs={6}><Form.Control type='time' placeholder='time' /></Col>
                        </Row>
                        
                        
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <h6 className="fw-bold mt-1">JD status</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={JDstatus}
                            />
                      </Col>
                  </Row>
                  <br></br>
                    <Row>
                        
                        <Col sm={4}>
                      
                      <h6 class="fw-bold">Client Name</h6>
                
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options}
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
                        <Col sm={4}>
                        <h6 class="fw-bold">Industry</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options4}
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
                        <Col sm={4}>
                      <h6 class="fw-bold"> Work location of JD</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options1}
                            />
                      </Col>
                    </Row>
                    <br></br>
                    <Row>
                     
                      <Col sm={4}>
                      <h6 class="fw-bold"> Sign up rate with client</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options2}
                            />
                      </Col>
                      <Col sm={4}>
                      <h6 class="fw-bold"> Salary- Greater than</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options}
                            />
                      </Col>
                      <Col sm={4}>
                      <h6 className="fw-bold">Payment terms</h6>
                        <CreatableSelect
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={paymentterms}
                            />
                      </Col>
                    </Row>
                    <br></br>
                    <Row>
     
                      <Col sm={4}>
                      <h6 className="fw-bold">My payout</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={Yourpayout}
                            />
                      </Col>

                    </Row>
                    <br></br>
                    <Row>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className='fw-bold'>Client coordination to be done by whom?</Form.Label>
                          <div className='d-flex'>
                          <Form.Check type="radio" label="Admin" />
                          <Form.Check type="radio" label="User" className='mx-3' />
                          </div>

                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                    <Form.Group>
                    <Form.Label className='fw-bold'>CVs quality check required by Admin? (Y/N)</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type="radio" name="cvcheck" label="YES" value="yes" />
                    <Form.Check type="radio" name="cvcheck" label="NO" value="No" className='mx-3' />
                    </div>
                  </Form.Group>
                    </Col>
                    </Row>
                </div>
                    <div className='d-flex justify-content-center title-absolute py-4 border-top'>
                        <Button variant='secondary' className='mx-3 text-white'>Reset</Button>
                        <Link to='/jdlist2'><Button variant='primary' className='mx-3 text-white'>Search</Button></Link>
                        <Link to='/jdlist2'><Button variant='danger' className='mx-3 text-white'>Colse</Button></Link>
                    </div>
            </form>
        </Container>
    </div>
    </div>
  )
}

export default People