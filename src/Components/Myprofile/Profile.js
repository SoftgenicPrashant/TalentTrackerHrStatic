import React, { useState } from 'react'
import { Container, Tooltip,OverlayTrigger, Row, Col, Card, Form, Button, Tab, Tabs, Dropdown,Modal} from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Navigate } from 'react-router-dom'
import './MyProfile.css'
import Select from 'react-select';
const Profile = (props) => {
    const token = localStorage.getItem("token")
    let loggedIn = true
    if(token ==  null){
      loggedIn= false
    }
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
 
const [select, setselect] = useState(false);
const handleSelect = () => {
    setselect(!select)
}
const [select1, setselect1] = useState(true);
const handleSelect1 = () => {
    setselect1(!select1)
}
const handleSelect2 = () => {
    setselect1('showticked')
}
// Option for List of Industries in dropdown, Multi selection allowed

const opionforindustries = [
    // {value:'Services', label:"Services"},
    // {value:'manufacturing', label:"manufacturing"},
    // {value:'IT-Information Technology', label:"IT-Information Technology"},
    // {value:'Education/E-Learning', label:"Education/E-Learning"},
    // {value:'Real estate/Construction', label:"Real estate/Construction"},
    // {value:'', label:""},
    // {value:'', label:""},
    // {value:'', label:""}
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
const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
        {loggedIn? <></>: <Navigate to="/"/>}
         <Sidebar />
        <NavbarMenu />
        <Container className='myprofile'>
          <div className='ms-auto' onClick={handleShow1}><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Guidelines For Admin Assigned Information</Tooltip>}><i className='fas fa-info-circle'></i></OverlayTrigger><span className='text-small text-primary mx-3'>Guidelines to add candidate</span></div>

            <Row>
                <Col sm={12}>
                <div className='right-side'>

                <Card>
                    <Card.Body>
                      
                    <Tabs defaultActiveKey="Admin assigned Information" id="uncontrolled-tab-example" className="shadow">
                <Tab eventKey="Admin assigned Information" title="Admin assigned Information">
                <Form>
                    <Row>
                        <Col xs={4}>
                       <Form.Group>
                           <Form.Label className='mt-2' >My User ID </Form.Label>
                           <Form.Control type='number' value="002" name="user_id" disabled />
                       </Form.Group>
        
                        </Col>
                        <Col xs={4}>
                   
                       <Form.Group>
                           <Form.Label className='mt-2' >My category</Form.Label>
                           <Form.Control type='text' defaultValue="C" name="category" disabled  />
                       </Form.Group>
                   
                        </Col>
                        <Col xs={4}>
                        
                       <Form.Group>
                           <Form.Label className='mt-2' >My official email ID  </Form.Label>
                           <Form.Control type='email' defaultValue="name@domain.com" name="user_id" disabled />
                       </Form.Group>
                   
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                       
                       <Form.Group>
                           <Form.Label className='mt-2' >Default Email password </Form.Label>
                           <Form.Control type='password' value="123445" name="user_id" disabled />
                       </Form.Group>
               
                        </Col>
                        <Col xs={6}>
                       <Form.Group>
                           <Form.Label className='mt-2' >No. of JDs I can lock per day-  </Form.Label>
                           <Form.Control type='number' defaultValue="1" name="category"disabled />
                       </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>

                       <Form.Group>
                           <Form.Label className='mt-2' >Admin’s CVs quality check is required in my category?  </Form.Label>
                           <Form.Control type='text' defaultValue="No" name="cv_check"  disabled/>
                       </Form.Group>
                        </Col>
                        <Col xs={6}>
                       <Form.Group>
                           <Form.Label className='mt-2' >Am I privileged to see the full content of JD before I pick/lock it?</Form.Label>
                           <Form.Control type='text' defaultValue="yes" name="jd_lock" disabled />
                       </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>

                       <Form.Group>
                           <Form.Label className='mt-2' >What will be my designation in the email signature for client/candidate coordination</Form.Label>
                           <Form.Control type='text' defaultValue="Recruiter" name="designation" disabled />
                       </Form.Group>
                        </Col>
                        {/* <Col xs={6}>
                       <Form.Group>
                           <Form.Label className='mt-2' >Allow user to remove candidate’s mobile number from the tracker sheet</Form.Label>
                           <Form.Control type='text'  name="removecandidate" disabled />
                       </Form.Group>
                        </Col> */}
                    </Row>
                    <Row>
                        <Col xs={6}>

                       <Form.Group>
                           <Form.Label className='mt-2' >Am I allowed  to write special remarks, comments in the tracker sheet?</Form.Label>
                           <Form.Control type='text' defaultValue="No" name="comment" disabled />
                       </Form.Group>
                        </Col>
                        <Col xs={6}>
                       <Form.Group className='mt-3'>
                           <Form.Label className='mt-2' >Am I allowed to give One candidate submissiont?</Form.Label>
                           <Form.Control type='text' defaultValue="No" name="candidatesubmissiont" disabled />
                       </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>

                      
                           <Form.Label className='mt-2' >Am I allowed to update the 'status' field in my workspace?</Form.Label>
                            <Form.Control value="yes" disabled />
                      
                        </Col>
                        <Col xs={6}>
                        <Form.Label className='mt-2' >Am I allowed to do the client coordination on case to case basis?</Form.Label>
                        <Form.Control value="yes" disabled />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mt-3'>
                                <Form.Label className='mt-2'>How many mobile numbers I can unlock in a day if I am using Talent Tracker’s Candidate Database</Form.Label>
                                <Form.Control type='number' defaultValue="25" name="numberunlock" disabled  />
                            </Form.Group>
                            
                        </Col>

                        <Col md={6}>
                            <Form.Group className='mt-3'>
                                <Form.Label>Based on my KYC, I am assigned as a </Form.Label>
                                <Form.Control value="Consultancy" disabled />
                                    {/* <option value="consultancy">Consultancy</option>
                                    <option value="individual">Individual</option> */}
                                {/* </Form.Select> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className='mt-3'>
                                <Form.Label className='mt-2'>Am I assigned a fixed payout irrespective of the JD I handle? </Form.Label>
                                <Form.Control value="No, payout will change from JD to JD" disabled />
                                    {/* <option value="Yes, I am assigned a fix payout">Yes, I am assigned a fix payout</option>
                                    <option value="No, it will change from JD to JD">No, it will change from JD to JD</option> */}
                                {/* </Form.Select> */}
                            </Form.Group>
                            
                        </Col>

                        <Col md={6}>
                            <Form.Group className='mt-3'>
                                <Form.Label>Am I allowed to view Client SPOC’s mobile number in the JD </Form.Label>
                                    <Form.Control defaultValue="yes" disabled/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        
                    <Col md={6}>
                            <Form.Group className='mt-3'>
                                <Form.Label>Am I allowed to do the CVs submission to the client?   </Form.Label>
                                    <Form.Control defaultValue="yes" disabled />
                            </Form.Group>
                        </Col>
                    </Row>

                    </Form>
                    
                </Tab>
                <Tab eventKey="personal information" title="Personal Information" >
                    <Form>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type='text' name="firstname" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type='text' name="lastname" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Personal Email</Form.Label>
                                    <Form.Control type='email' name="email" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Mobile No.</Form.Label>
                                    <Form.Control type='tel' name="phone" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Gender</Form.Label>
                                    <div className='d-flex'>
                                    <Form.Check type='radio' value='Male' name="gender" label="Male"  />
                                    <Form.Check type='radio' value='Female' name="gender" label="Female" />
                                    </div>
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Current Location</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="address"/>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Button variant='primary'>Save</Button>
                    </Form>
                   
                </Tab>
                <Tab eventKey="Work information " title="Work information" >
                   <Form>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Highest qualification</Form.Label>
                           <Form.Control type='text' value='mba' name="qualification" />
                       </Form.Group>
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Graduation</Form.Label>
                           <Form.Control type='text' name="graduation" />
                       </Form.Group>        
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Date of birth</Form.Label>
                           <Form.Control type='Date' name="dob" />
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Languages known </Form.Label>
                           <Form.Control type='text' value='Hindi, English' name="lang" />
                       </Form.Group>
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Attach adhar card</Form.Label>
                           <Form.Control type='file' name="adhar" />
                       </Form.Group>        
                        </Col>
                        <Col xs={4} className={select1?'showticked':'showticked1'}>
                        <Form.Group className='mb-3 mt-2' >
                           <Form.Label>Certificate of incorporation (if consultancy)</Form.Label>
                           <Form.Control type='file' name="coi" />
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} className={select1?'showticked':'showticked1'}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>GST number </Form.Label>
                           <Form.Control type='number' value='12345566' name="gnumber" />
                       </Form.Group>
                        </Col>
                        <Col xs={4} className={select1?'showticked':'showticked1'}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>GST certificate </Form.Label>
                           <Form.Control type='file' name="gcertificate" />
                       </Form.Group>        
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>No. of years Recruitment experience (India/international)</Form.Label>
                           <Form.Control type='number' name="no_ofexperience" value="4" />
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Preference</Form.Label>
                           <div className='d-flex'>
                           <Form.Check type='radio'  name="prefrence" label="IT"/>
                           <Form.Check type='radio'  name="prefrence" label="Non IT" className='mx-3'/>
                           <Form.Check type='radio'  name="prefrence" label="Both" className='mx-3'/>
                           </div>
                       </Form.Group>
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Currently employed for some organization as a full time employee ?</Form.Label>
                           <div className='d-flex'>
                           <Form.Check type='radio'  name="currentlyemployed" label="Yes"/>
                           <Form.Check type='radio'  name="currentlyemployed" label="No" className='mx-3'/>
                           </div>
                       </Form.Group>        
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Are you a consultancy or an individual? </Form.Label>
                           <div className='d-flex'>
                           <Form.Check type='radio'  name="consultancy" label="Consultancy" onClick={handleSelect1} />
                           <Form.Check type='radio'  name="consultancy" label="Individual" className='mx-3'onClick={handleSelect2} />
                           </div>
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Own portal available? </Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
                                Choose
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark">

                                <Dropdown.Item onClick={handleSelect}>Yes</Dropdown.Item>
                                <Dropdown.Item onClick={handleSelect }>No</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            <div className={select?'showselect1':'showselect'}>
                           <Form.Select type='text'  name="Ownportal" className='mt-3'>
                               <option value="Naukri">Naukri</option>
                               <option value="Monsterkkb">Monster</option>
                               <option value="Shine">Shine</option>
                               <option value="Times jobs">Times jobs</option>
                               <option value="etc">etc</option>
                           </Form.Select>
                           </div>
                       </Form.Group>
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Preferred industries to take JDs</Form.Label>
                           <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={opionforindustries}
                            isMulti
                        />
                       </Form.Group>        
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Handle PAN India/Regional JDs or only regional?</Form.Label>
                           <div className='d-flex'>
                           <Form.Check type='radio'  name="consultancy" label="Pan India"/>
                           <Form.Check type='radio'  name="consultancy" label="Regional" className='mx-3'/>
                           </div>
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Button className='mt-2'>Save</Button>
                   </Form>
                   </Tab>
                   <Tab eventKey="Bank Details" title="Bank Details" >
                   <Form>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Name Of Bank</Form.Label>
                                    <Form.Control type='text' value='State Bank' name="bankname" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Branch Location</Form.Label>
                                    <Form.Control type='text' value='Patna' name="branch" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Name as per bank account</Form.Label>
                                    <Form.Control type='text' value='Prashant' name="name" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Account No.</Form.Label>
                                    <Form.Control name="tel" value="1234-xxxx-xxxx" type='text' />
                                </Form.Group>
                            </Col>
                            {/* <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type='tel' name="phone" />
                                </Form.Group>
                            </Col> */}
                        </Row>
                        <Row>
                           
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>IFSC</Form.Label>
                                    <Form.Control name="ifcc" value="SBIN0007" type='text' />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Account type</Form.Label>
                                    <Form.Select name="accounttype">
                                        <option>Select</option>
                                        <option value="savings">Savings</option>
                                        <option value="Current">Current</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                       
                        <Row>
                            <Col xs={12}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="address" value="patna, Bihar"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant='primary'>Save</Button>
                    </Form>
                   </Tab>
                </Tabs>
                    </Card.Body>
                </Card>
                </div>
                </Col>
            </Row>
        </Container>
        <Modal show={show1} onHide={handleClose1} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-user me-3" ></i>Guidlines</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p><span className='fw-bold'>T</span>he purpose of “Admin Assigned Information” is to make you aware the assigned settings to your account. Admin reserves rights to grand you the privileges based on your category, performance and ratings. These settings change time to time as you progress with us.

Definition of terms:

User/Recruiter- It is “You”, who is signed up with Talent Trackers Consulting as a Freelance Partner
Client- The client company who’s JDs we are handling
Admin- My SPOC (Single point of Contact) in Talent Trackers Consulting for the particular JD 

Number of JDs I can lock per day- If your account is assigned to lock max 1 JD/day, & you make the submission on the same day, you can immediately lock the next JD & so on. If your account is assigned to handle 2 JDs/day & you make the submission on 1 JD on the same day, you can immediately lock the 3rd JD. The same applies to 4,8,16 JDs. Based on your speed of delivery, consistency and quality- Admin can increase the number of JDs “to be locked”  per day. More JDs you handle, your engagement with the platform increases leading to higher probability of closures!

Admin’s CVs quality check required for my account?- It changes from JD to JD and user account to user account. Few JDs are simple, & admin doesn’t think that CVs validation is required, you can directly send the CVs to client. Also we observe your sourcing skills and the quality of candidates you submit- Once there is mutual trust, we don’t check your CVs and you can directly make the CVs submission to client from your official email ID.

Am I privileged to see the full content of JD before I pick/lock it?- We have 100s of JDs on the platform and 100s of Users. From the server capacity point of view, it is not possible to display the full content of JD (pdf/doc) to all the users at the same time. Admin can decide whether your category can view the full JD under “Job Description” header in “List of JDs”. However, if & once you lock the JD, by default, the full JD will be viewed in your “My Workspace”.

What will be my Designation in the email signature for client/candidate coordination?- Admin will decide this & based on your suggestion, both can change it. 

Am I allowed to write the special remarks/ comments in the tracker sheet?- The default setting is “No”. Based on your performance, admin can give you the rights to update special remarks in the tracker sheet. We want to maintain the standardization in the tracker sheet remarks go to the client, & also want to be absolutely sure that you are capable enough to update tailored made remarks/comments about the candidate in the tracker sheet.

Am I allowed to give One candidate submission?- The default is “No”. On case to case basis, admin might allow you 1 CVs submission if the client is ok take 1 CV. Else, minimum 3 CVs delivery submission is what we request.

Default Email Password- You can change account password from settings.

How many mobile numbers I can unlock in a day if I am using Talent Tracker’s Candidate Database?- This applies when you are using “Talent Trackers” candidate database on a particular day. The detailed process of unlocking mobile numbers/emails is available in the “database” section. 

Based on my KYC, I am assigned as a consultancy or individual? – Admin verifies your documents and assigns you the status. If you are a consultancy, your name and address on the company incorporation certificate (Shop act license as a proprietor, partnership deed in case of a partnership firm, MOA/AOA in case of a private limited company/LLP) should tally with the name and address on your individual Aadhar card. Both consultancies and individuals have different privileges and rights in our set up. Individuals need to provide only Aadhar card as a KYC. 

Am I assigned a fixed payout irrespective of the JD I handle? Default is “No”. Admin reserves rights to grand you this setting based on your performance, number of hours you work, number of JDs you handle per day/week, your rating and the revenue generated. 

Am I allowed to view Client SPOC’s mobile number in the JD?  Default is “Yes”. In a rare case, admin can restrict you from viewing client SPOC’s mobile number- especially when multiple JDs from the same client are in circulation and multiple recruiters are working on the same. In such case, client doesn’t want many recruiters to coordinate together.

Am I allowed to do the CVs submission to the client?- Default is “Yes”. It is you, who will be sending the CVs to client from the official Email ID assigned to you (marking CC to admin), or it is the admin who will send CVs to client (marking a CC to you). In either cases, you are a part of the written communication with client. This is as per our “Transparency” policy in client coordination. It is mentioned in the JD how the client coordination will happen. If there are multiple JDs from the same client in circulation and multiple recruiters are working on the same, then generally, admin is doing the coordination.
…………………………………………………………………………………………………………………………………………………………………………………Finish…………………………………………………………………
</p>
        </Modal.Body>
        
        <Modal.Footer>
      
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Profile