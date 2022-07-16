import React, {useState} from 'react'
import Sidebar from '../Sidebar/Sidebar';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import { Container, Button, Tooltip,OverlayTrigger, Form, Table, Modal, Row, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
// import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import Pdf from "../pdf/pdf1.pdf"
import ReactAudioPlayer from "react-audio-player";
const Listofjd2 = () => {
    function refreshPage(){ 
        window.location.reload(); 
    }
 

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

 
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);
    const [show9, setShow9] = useState(false);
    const handleClose9 = () => setShow9(false);
    const handleShow9 = () => setShow9(true);
    
    const [show8, setShow8] = useState(false);

    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);    

    const [theme] = useLocalStorage('theme' ? 'dark' : 'light')
    const notify = () => toast.success("Locked");
    // const options =[
    // {value:'Telephonic', label:'Telephonic'},
    // {value:'virtual (Teams meeting/Zoom call/ Google meet/ skype etc)', label:'virtual (Teams meeting/Zoom call/ Google meet/ skype etc)'},
    // {value:'Face to Face', label:'Face to Face'},
    // {value:'HR/Final round with Top Management', label:'HR/Final round with Top Management'},
    // ]
  return (
    <div data-theme={theme} style={{overflow:'hidden', height:'100vh'}}>
       <ToastContainer position={'top-center'}/>
    <Sidebar />
        <NavbarMenu />
        <Container className='jd-list'>
            <div className='d-flex text mb-2'>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Number of JD's</Tooltip>}><p >Number of JDs (7)</p></OverlayTrigger><span className='mx-3 fw-bold'>|</span>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Reload Page</Tooltip>}>
            <Button variant='light' size='sm' onClick={refreshPage}><i className="fas fa-redo-alt mb-3"></i></Button>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Filter Search of Jd list</Tooltip>}>
         <Link to="/JdListFilter"><Button variant='danger' className='mx-3' size='sm'><i className="fas fa-filter me-2"style={{color:'#fff'}} ></i>Filter</Button></Link>
         </OverlayTrigger>
         <div className='ms-auto' onClick={handleShow9}><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Guidelines For List Of JDS</Tooltip>}><i className='fas fa-info-circle'></i></OverlayTrigger><span className='text-small text-primary mx-3'>Guidelines to add candidate</span></div>

            </div>
            </Container>
            <div className='jd-wraper' >
            <Container  className='table-data' fluid data-theme={theme}>
                <Table responsive className='data-table' hover >
                    <thead >
                        <tr>
                          <th></th>
                            <th>Status</th>
                            <th>JD No.</th>
                            
                            <th>JDs upload<br></br> date and time</th>
                            <th>Client Details</th>
                            <th>JD Details</th>
                            <th>Special <br></br>Comments/Remarks<br></br> by admin about JD</th>
                            <th>Term of JD</th>
                            <th>My payout</th>
                            <th>JD Discription</th>
                            
                            
                            <th>Assured delivery<br></br> required by<br></br> the client (TAT)</th>
                           
                            <th>Client coordination <br></br>to be done by whom?</th>
                            <th>CVs quality<br></br> check required<br></br> by Admin?</th>
                            <th>Lock for me</th>
                        
                        </tr>
                    </thead>
                    <tbody data-theme={theme}>
                        <tr>
                          <td className='text-danger fw-bold text-center'>(P)</td>
                            <td className='jdstatus'><Button variant='warning' className='me-2'>open</Button></td>
                            <td>1</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Automobile</span> |</span> 1000+</td>
                            <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 10000+</Tooltip>}><span className='fw-bold text-muted'>₹ 10000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            
                            
                            <td>N/A</td>
                            <td>Admin</td>
                            <td >yes</td>
                            <td><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                        <tr>
                          <td></td>
                            <td className='jdstatus'><Button variant='danger' className='me-2'>Pending delivery</Button></td>
                            <td>2</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name 1<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Banking</span> |</span> 500+</td>
                             <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 30000+</Tooltip>}><span className='fw-bold text-muted'>₹ 30000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            <td>N/A</td>
                            <td>Admin</td>
                            <td >yes</td>
                            <td ><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                        <tr>
                        <td className='text-danger fw-bold text-center'>(P)</td>
                        <td className='jdstatus'><Button style={{backgroundColor:'cyan', color:'black', border:'none'}}>Delivery done-await client feedback</Button></td>
                            <td>3</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name 3<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Tech</span> | </span> 2000+</td>
                             <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 20000+</Tooltip>}><span className='fw-bold text-muted'>₹ 20000+</span></OverlayTrigger>| <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            <td>N/A</td>
                           
                            <td>user</td>
                            <td>No</td>
                            <td ><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                        <tr>
                        <td className='text-danger fw-bold text-center'>(P)</td>
                        <td className='jdstatus'><Button variant='secondary'>Interview stage</Button></td>
                            <td>4</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name 4<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Social Marketing</span> | </span>3000+</td>
                              <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 40000+</Tooltip>}><span className='fw-bold text-muted'>₹ 40000+</span></OverlayTrigger>| <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                              <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            <td>N/A</td>
                            
                            <td>user</td>
                            <td>No</td>
                            <td ><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                        <tr>
                          <td></td>
                        <td className='jdstatus'><Button variant='success'>Offer stage</Button></td>
                            <td>5</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name 5<br></br> <span >  <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Marketing</span> | </span>9000+</td>
                            <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com'><i className="fas fa-map-marker-alt me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Salary $ 500</Tooltip>}><i class="far fa-money-bill-alt ms-2 me-2"></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            <td>N/A</td>
                         
                            <td>user</td>
                            <td>No</td>
                            <td ><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
             
                        <tr>
                        <td className='text-danger fw-bold text-center'>(P)</td>
                        <td className='jdstatus'><Button style={{backgroundColor:'pink', color:'black', border:'none'}}>JD successfully closed</Button></td>
                            <td>6</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name 6<br></br> <span >  <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Mobile shop</span> | </span>200+</td>
                             <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 80000+</Tooltip>}><span className='fw-bold text-muted'>₹ 80000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            <td>N/A</td>
                           
                            <td>user</td>
                            <td>No</td>
                            <td ><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                        <tr>
                        <td className='text-danger fw-bold text-center'>(P)</td>
                        <td className='jdstatus'><Button >Open-Rework</Button><br></br>Client changed the JD criteria</td>
                            <td>7</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name 7<br></br> <span >  <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Web Tech</span> | </span>100+</td>
                                                        <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com'><i className="fas fa-map-marker-alt me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Salary $ 100</Tooltip>}><i class="far fa-money-bill-alt ms-2 me-2"></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            <td>N/A</td>
                           
                            <td>user</td>
                            <td>No</td>
                            <td ><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            </div>
        <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-building me-3" ></i>Company Name / Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-user me-3"></i> Client Id: <span className='text-muted'>001</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-building me-3"></i> Company Name: <span className='text-muted'>Automobile</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-building me-3"></i> Industry: <span className='text-muted'>n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-user me-3"></i> Client type: <span className='text-muted'>Client type</span></h6>

            <h6 className='fw-bold mt-5 mb-3 mx-2'>Employee Size : <span className='text-muted'>1000+</span></h6>
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-map me-2"></i> Company location- HQ: <span className='text-muted'>India</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-map me-2"></i> Company address: <span className='text-muted'>Patna</span></h6>
            <h6 className='fw-bold mt-5 '> <i className="fab fa-firefox me-2"></i> Website: </h6>
            <a href="https://example.com">https://example.com</a>
            <h6 className='fw-bold mt-5 '> <i className="fab fa-linkedin me-2"></i>LinkedIn: </h6>
            <a href="https://linkedin.com" className='mx-3'>https://linkedin.com</a>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Second Modal for jd details */}
      <Modal show={show1} onHide={handleClose1} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-suitcase me-3" ></i>Jd's Name Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user"></i> Client name: <span className='text-muted'> pk</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> JD title: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-comment me-2"></i> Special comments/remarks by Admin about JD: <span className='text-muted'> Awesome</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-list me-2"></i> List of preferred companies to source candidates?: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-audio me-2"></i> Audio JD: <span className='mt-5'> <ReactAudioPlayer
      src="http://slider.kz/download/214/psv4.vkuseraudio.net/c815526/u211915439/audios/8e9a9be0b9e5/Caballero%20&%20Jeanjass%20(Chef)%20-%201.Chef.mp3"
      autoPlay
      controls
      style={{height:"4vh"}}
    /></span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Salary Budget : <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-sort-amount-down me-2"></i> Experience: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-book me-2"></i> Education: <span className='text-muted'> n/a</span></h6>
            </Col>
            <Col xs={6}>
            
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Work location of JD: <span className='text-muted'> Patna, Bihar , India</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Company address <span className='text-primary text-small'><i className='fas fa-info ms-2 me-2' onClick={()=>{toast.info("Interview location address can be different from this address")}}/></span>: <span className='text-muted'> N/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-building"></i> Client company name can be disclosed to the candidate? : <span className='text-muted'> Yes</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-file-csv"></i> Minimum number of CVs submission as required by the client? : <span className='text-muted'> 10</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fab fa-intercom"></i> Rounds of an interview: <span className='text-muted mt-2'> Face to Face</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-sticky-note"></i> Notice period preference given by the client: <span className='text-muted'> n/a</span></h6>
<h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-list"></i> No. of Vacancies : <span className='text-muted'> 50</span></h6>
<h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-sort-numeric-up-alt me-2"></i> No. of working days
: <span className='text-muted'> 20</span></h6>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    
      {/* Jd terms modal */}
      <Modal show={show4} onHide={handleClose4} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Terms Of JD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i>  Sign up rate with client: <span className='text-muted'> 0</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> payment terms: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Replacement period: <span className='text-muted'> n/a</span></h6>
          </Col>
          <Col xs={6}>
          <h6 className='fw-bold mt-5 mb-5 mx-3'>  Number of submissions required: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'>Your payout : <span className='text-muted'> n/a</span></h6> 
            <h6 className='fw-bold mt-5 mb-5 mx-3'>Assured delivery required by client (TAT) : <span className='text-muted'> 23-05-2022 6:00 P.M</span></h6> 
            
          </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Lock For me yes/no Modal  */}
      <Modal show={show5} onHide={handleClose5} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Lock For Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className='text-center'>Would you like to use “Own portal” (Naukri,linkedin, Monster, Times jobs, Shine etc) or use “Talent Tracker’s Candidate Database?</h4>
            <div className='d-flex justify-content-center mt-5 mb-5'>
              <Button variant='success' className='me-5' onClick={handleShow6} size='sm' >Own Database (Naukri,linkedin, Monster, Times Jobs, Shine etc)</Button>
            <Button variant="danger"  className='me-5' onClick={handleShow8} size='sm'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Talent Tracker’s Candidate Database &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Button>
            </div>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
      {/* After Clicking Yes Lock For me yes open jd lock modal with check box */}
      <Modal show={show6} onHide={handleClose6} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Lock For Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mt-3 mb-3 mx-3'>
              <Form.Check type='checkbox' label="% Payout if use our candidate database." />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label="% Payout if use your own portal naukri/monster/times job etc." />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label="Absolute value payout if user uses own portal, " />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label="Absolute value payout---if use our database" />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Check type='checkbox' label="I accept the assured delivery date" />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Check type='checkbox' label=" I accept the terms of JD" />
            </Form.Group>
            <Button variant='success' onClick={notify}><i className='fas fa-lock me-2'></i>Lock</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show7} onHide={handleClose7} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>MY Payout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mt-3 mb-3 mx-3'>
              <Form.Check type='checkbox' label="Payout .......- if you use Own Portal" />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label=" Payout......-if you use talent trackers candidate database" />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show8} onHide={handleClose8} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Lock For Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mt-3 mb-3 mx-3'>
              <Form.Check type='checkbox' label="Your payout will be ........ for this JD" />
            </Form.Group>
            
            <Button variant='success' onClick={notify}><i className='fas fa-lock me-2'></i>Lock</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose8}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show9} onHide={handleClose9} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title><i className='fas fa-info-circle'></i>Guidlines For List Of JDS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><span className='fw-bold'>T</span>he purpose of “List of JDs’ is to enable you pick up the right JD/JDs based on your skills, interest, location and experience. Admin keeps on adding new JDs every day and you can lock the right one in the “List of JDs” area. Given below detailed explanation of important fields in “list of JDs.”

          <span className='fw-bold'>A] Terms of JD- </span>It will help you decide whether to work on a particular JD or not! To ensure the upmost transparency in operations, we mention in the JD our sign up rate with client, agreed Payment terms, agreed Replacement period. (Generally, we have 8.33% sign up rate, 30 days payment terms, 3 months replacement period).  You need to click on the icon “Terms of JD” to view these details.

          <span className='fw-bold'>B] JD details- </span> It will help you decide whether to work on a particular JD or not! Once clicked the icon “JD details”, you will get all the information about JD. Example- JD title, CTC budget, experience, education, No. of vacancies, Notice period preference given by client, list of preferred companies to source candidates if any, client address, work location of JD, Minimum number of CVs submission required, Rounds of interview, audio JD, any special information about JD.

          <span className='fw-bold'>C] Client details-</span> Once click on client details icon, you will come to know the information bout client. Example- Client name, address, website, Linkedin URL, industry, employee size, company type etc. 

          <span className='fw-bold'>D] Lock for me- </span>This is the actual step to lock a particular JD on a particular day. Once you decide, “I wish to work on this JD”, you need to click this button. Once clicked, a page will pop up- asking, whether you want to use your “Own portal” (Naukri, Monster, Times Jobs , shine etc) to handle this JD or Talent Tracker’s database? Depending upon your selection, the pay-outs will vary & shall be mentioned in the next window. Once you decide to lock the JD, it will prompt you to tick “I have understood the terms & conditions of JD and I agree the assured delivery date”. Once the JD is locked, the “Open” status in “list of JDs” will change to “pending delivery”. It means, this JD will be grey listed for other Recruiters to pick up. 

          <span className='fw-bold'>E] Assured delivery date-time required by client:</span> It is always 24 hours from the date-time of locking the JD by you. If no delivery within 24 hours of locking the JD, then system will open the JD for other users to lock affecting your rating. 

          <span className='fw-bold'>F] CVs quality check required by Admin?- </span> If mentioned “Yes” in the JD, then system will prompt you to send cvs to Admin first, via our in-built Email panel in “submit”area. Once admin approves the CVs for quality, you can send CVs to the client. If mentioned “No”, then CVs quality check is not required for this JD & you can directly send CVs to client from the official Email ID assigned to you. 

          <span className='fw-bold'>G] Client coordination to be done by whom? – </span> If mentioned “by user” in the JD,  it means you need to send CVs to client from the official Email ID assigned to you, with a default CC marked to admin. If mentioned “Admin”, then admin shall send CVs to client with a default CC marked to you. In either cases, you will be a part of the written communication with client. The second scenario exists predominantly, if there are multiple JDs in circulation from the same client & many recruiters are working together, then client wishes to have a single point of contact from Talent Trackers, which is generally admin.

          <span className='fw-bold'>H] Special comments by admin about JD- </span> This is a very important field where admin will write any special comments/remarks/information they received from client about the JD. It helps you to improve your sourcing and tap the right candidates.

          <span className='fw-bold'>I] Status- </span> There are 9 status bar mentioned in list of JDs. It indicates the different stages a JD is progressing at the moment. Example- screening, shortlisting, interviewing, selection, offer, joining etc. The status automatically changes in the system as the progress happens on a particular JD towards closure. 

          <br/>    <span className='fw-bold'>Explanation of “Status” fields:</span>

1. Open – JD is not accepted by any user and you can lock it. 
2. Pending delivery- JD is locked by some user but CVs submission is yet not done. 
3. Delivery done-await client feedback- CVs submission is done, however waiting for client’s feedback on candidate shortlisting. 
4. Interview stage-  Rounds of interviews have started (Telephonic, virtual, Face to Face, HR/Management round etc.)
5. Offer stage- Candidate is selected, offer in discussion.
6. Offer accepted- Serving Notice Period
7. Joined
8. Invoice raised, await payment
9. Rework (with reasons)<br/>

<span className='fw-bold'>Rework reasons: </span><br/>

1] CVs quality not found good by client- Earlier CVs were rejected and client asked us to rework.
2] No delivery made by the user who accepted the JD – System automatically unlocked the JD for fresh locking as the earlier Recruiter didn’t make the delivery within 24 hours of JD acceptance. His/her rating is affected.
3] Client changed the JD criteria- Sometime it happens that client changes the specifications of the JD- like the skill sets, CTC budget, education, location, years of experience etc. We can’t help in such cases but rework. 
4] Candidates backed out/didn’t turn up for the interview/rejected by client- Recruiter loses rating, & JD is rework.
5] Delay from client in giving the feedback, now fresh sourcing required
6] Any other reason not covered above 

J] My pay-out : Pay- out is the most important section in “List of JDs”. It will let you know what pay out/commission/incentives you can expect if successfully close the particular JD. Admin reserves rights to decide the pay out at the time of JD addition & assign a pay out as –a). the percentage (%) of “invoice value” or b). an absolute amount as mentioned in the particular JD. Pay outs are same for all users without any discrimination. They can vary from JD to JD / Client to Client. Pay out is completely Admin management’s prerogative & it depends on few factors. 1. Long term strategic relation with the client. 2. Aging of JD (Fresh or Rework). 3. CTC budget. 4. Niche/Difficulty level of JD. 5. Sing up rate. 6. Exclusivity we have with client. 
a). Percentage (%) pay out:  <br/>

Example-  

If 40% is the offered pay-out to you as mentioned in the JD.
If say, CTC of the selected candidate- 10 lakh
If say, Our sign up rate with client – 8.33%,
<br/>
Then,
 
Invoice value: 10 lakh * 8.33% = INR 83,300/- (without GST)
Your pay out (40%) – INR 33,320/-
We credit you pay out immediately once payment is received by us. (Payment terms are generally 30 days from the date of joining of candidate) 
We don’t deduct any TDS while making payment to you

To explain above calculation in a formula-

Your pay out = Base Invoice value (without GST) * %  pay out as mentioned in the JD.

Base Invoice value= Gross Annual CTC of the offered candidate * the % sign up rate with client.


b. Calculation of Absolute pay out: Admin may offer you an “Absolute pay out” instead of percentage (%) 

Example- 
If say, CTC budget for a JD is 10-12 lakhs 
If say, the pay-out range offered to you as mentioned in the JD: 35k-40k 
Based on the actual CTC offered to the candidate, your pay-out will vary between 35-40k.
Once closure is done,  the pay- out is calculated and updated to you in an auto generated email.

K] Priority tag (P)- It indicates the JD is critical & on fire- which guides your decision to pick up the JD.
Filters- You can apply filters in “list of JDs” to narrow down your search to decide which JD/JDs you wish to pick on a given day.
………………………………………………………………………………………………………………………………………………………………………………Finish……………………………………………………………………
</p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose9}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Listofjd2