import React, {useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Table, Modal, Button, Form ,Row, Col , Tooltip,OverlayTrigger, Badge} from 'react-bootstrap'
import './MyWorkSpace.css'
import { renderToString } from "react-dom/server";
import { ToastContainer, toast } from 'react-toastify';
import Pdf from "../pdf/pdf1.pdf"
import { Link } from 'react-router-dom'
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';
import ReactAudioPlayer from "react-audio-player";
import jsPDF from "jspdf";

const MyWorkSpace = () => {
  const Prints = () => (
    <Table  >
                    <thead >
                        <tr>
                            <th>*</th>
                            <th>Candidate ID </th>
                            <th>JD number </th>
                            <th>Client name</th>
                            <th>JD title </th>
                            <th>JD location </th>
                            <th>Recruiter ID </th>
                            <th>Candidate name </th>
                            <th>Current designation </th>
                            <th>Current salary (Fix)</th>
                            <th>Current salary (Variable)</th>
                            <th>Total salary </th>
                            <th >Last Appraisal of the candidate </th>
                            <th>Expected salary </th>
                            <th>Dropdown</th>
                            <th>Total experience </th>
                            <th>Education</th>
                            <th>Current organization </th>
                            <th>Current location </th>
                            <th>Candidate mobile number</th>
                            <th>Notice period </th>
                            <th>JD sent to candidate</th>
                            <th>candidate availability for the interview </th>
                            <th>Recruiter’s remarks </th>
                            <th>Date and time of adding a candidate</th>
                            <th>Special comments</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    </Table>
  )
  const print = () => {
    const string = renderToString(<Prints />);
    const pdf = new jsPDF("p", "mm", "a4");
 
  pdf.fromHTML(string);
  pdf.save("pdf");
  };
  const options = [
    {label:"Virtual/Telephonic- Any mutually decided time. (this week/next week)", value:"Virtual/Telephonic- Any mutually decided time. (this week/next week)"},
    {label:"F2F- Any mutually decided time (this week/next week)", value:"F2F- Any mutually decided time (this week/next week)"},
    {label:"Create", value:""}
  ]
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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const [checked, setchecked] = useState(false)
 const handleChecked = () => setchecked(!checked)
 const [show1, setShow1] = useState(false);
 const handleClose1 = () => setShow1(false);
 const handleShow1 = () => setShow1(true);
 const [show2, setShow2] = useState(false);
 const handleClose2 = () => setShow2(false);
 const handleShow2 = () => setShow2(true);
 const [show3, setShow3] = useState(false);
 const handleClose3 = () => setShow3(false);
 const handleShow3 = () => setShow3(true);
 const [showdropdown, setshowdropdown] =useState(false);
 const handleShowdropdown = () => 
   setshowdropdown(!showdropdown)
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
   const [show8, setShow8] = useState(false);
   const handleClose8 = () => setShow8(false);
   const handleShow8 = () => setShow8(true);
   const [show9, setShow9] = useState(false);
   const handleClose9 = () => setShow9(false);
   const handleShow9 = () => setShow9(true);
   const [show10, setShow10] = useState(false);
   const handleClose10 = () => setShow10(false);
   const handleShow10 = () => setShow10(true);
   const [show11, setShow11] = useState(false);
   const handleClose11 = () => setShow11(false);
   const handleShow11 = () => setShow11(true);
  const [showskill, setshowskill]=useState(false);
  const handleShowskill = ()=> setshowskill(!showskill)
  return (
    <div  style={{overflow:'hidden', height:'100vh'}}>
     <ToastContainer position='top-center' />
      <Sidebar />
      <NavbarMenu />
      
      <Container  className='jd-list'>
        <h5 className='mt-5 fw-bold text-center'>My Workspace</h5>
        <div className='d-flex text mb-4'>
        <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Number of JD's</Tooltip>}><p >Number of JDs (7)</p></OverlayTrigger><span className='mx-3 fw-bold'>|</span>

            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Download table data into csv formate</Tooltip>}><Button variant='success' size='sm'><i className="fas fa-download me-2"/>CSV Download</Button></OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Reload Page</Tooltip>}>
            <Button variant='light' size='sm' ><i className="fas fa-redo-alt"></i></Button>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">My Workspace filter</Tooltip>}>
         <Link to="/MyWorkspace/filter"><Button variant='danger' className='mx-3' size='sm'><i className="fas fa-filter me-2"style={{color:'#fff'}} ></i>Filter</Button></Link>
         </OverlayTrigger>
         <div className='ms-auto' onClick={handleShow9}><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Guidelines For My Workspace</Tooltip>}><i className='fas fa-info-circle'></i></OverlayTrigger><span className='text-small text-primary mx-3'>Guidelines to add candidate</span></div>

            </div>
      </Container>
      
 <div className='jd-wraper' >
            <Container  className='table-data' fluid >
                <Table responsive className='data-table' hover >
          <thead >
            <tr>
              <th >JD number</th>
              <th>Date-Time of JD locking</th>
              <th>Final Status</th>
              <th>User ID/User name</th>
              <th>Company Details</th>
              <th>JD details</th>
              <th>Terms of JD</th>
              <th>List of candidates</th>
              <th>Job Description</th>
              <th>Client Spoc details</th>
              <th>Admin Spoc details</th>
              <th>Payout</th>
              <th>Add candidate </th>
              <th>Download <br></br>Tracker Sheet</th>
              <th>Submit</th>
              <th>No. of <br></br>submissions</th>
              <th>Status as per Recruiter</th>
              <th>Date -time of submission</th>
              <th>Feedback from Client</th>
              <th>Exchange notes<br></br> with admin</th>
              <th>Offer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>23-05-2022 / 12:00 A.M</td>
              <td><Badge bg='success'>Offer stage</Badge></td>
              <td>user001</td>
              <td className='position'>Company Name<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Company Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow7}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Tech</span> | </span> 1000+</td>
              <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 10000+</Tooltip>}><span className='fw-bold text-muted'>₹10000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View JD details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><Link to="/ListOfCandidate"><i className="fas fa-list " ></i></Link></td>
            
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td>na</td>
              <td>na</td>
              <td>na</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td onClick={print} className='text-center'><i className="fas fa-chart-area" ></i></td>
              <td><Link to="/submit"><Button size='sm'><i className="fas fa-at"></i></Button></Link></td>
              <td><Form><Form.Control type='text'></Form.Control></Form></td>
              <td className='jdstatus'><Button variant='danger' className='me-2'>Pending delivery</Button></td>
              <td>19-05-2022 7:00.PM</td>
              
              <td onClick={handleShow11}><i className='fas fa-edit'></i></td>

              <td onClick={handleShow8}><i className='fas fa-edit'></i></td>
              <td><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">“ Please fill the offer sheet only if the candidate has accepted the offer and given you/client the date of joining.</Tooltip>}><Button variant='outline-danger' size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></OverlayTrigger></td>
              <td><Button variant='outline-primary' size='sm' as={Link} to="/MyWorkspace/edit"><i className='fas fa-edit me-2'/>Edit</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>24-05-2022 / 12:00 A.M</td>
              <td><Badge bg='success'>Offer stage</Badge></td>
              <td>user002</td>
              <td className='position'>Company Name<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Company Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow7}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Automobile</span> |</span> 2000+</td>
              <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 20000+</Tooltip>}><span className='fw-bold text-muted'>₹20000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><Link to="/ListOfCandidate"><i className="fas fa-list " ></i></Link></td>
            
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td>na</td>
              <td>na</td><td>na</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td></td>
              <td>10</td>
              <td className='jdstatus'><Button variant='danger' className='me-2'>Pending delivery</Button></td>
              <td>19-05-2022 7:01.PM</td>
              
              <td onClick={handleShow11}><i className='fas fa-edit'></i></td>

              <td onClick={handleShow8}><i className='fas fa-edit'></i></td>
              <td><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">“ Please fill the offer sheet only if the candidate has accepted the offer and given you/client the date of joining.</Tooltip>}><Button variant='outline-danger' size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></OverlayTrigger></td>

              <td><Button variant='outline-primary' size='sm' as={Link} to="/MyWorkspace/edit"><i className='fas fa-edit me-2'/>Edit</Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>25-05-2022 / 12:00 A.M</td>
              <td><Badge bg='warning' ><span className='mx-3 ml-3'>Open</span></Badge></td>
              <td>user003</td>
              <td className='position'>Company Name3<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Company Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow7}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Banking</span> | </span> 4000+</td>
              <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 30000+</Tooltip>}><span className='fw-bold text-muted'>₹30000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><Link to="/ListOfCandidate"><i className="fas fa-list " ></i></Link></td>
            
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td>na</td>
              <td>na</td><td>na</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td></td>
              <td>16</td>
              <td className='jdstatus'><Button style={{backgroundColor:'pink', color:'black', border:'none'}}>JD successfully closed</Button></td>
              <td>19-05-2022 7:04.PM</td>
              
              <td onClick={handleShow11}><i className='fas fa-edit'></i></td>

              <td onClick={handleShow8}><i className='fas fa-edit'></i></td>
              <td><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">“ Please fill the offer sheet only if the candidate has accepted the offer and given you/client the date of joining.</Tooltip>}><Button variant='outline-danger' size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></OverlayTrigger></td>

              <td><Button variant='outline-primary' size='sm' as={Link} to="/MyWorkspace/edit"><i className='fas fa-edit me-2'/>Edit</Button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>26-05-2022 / 12:00 A.M</td>
              <td><Badge bg='warning' ><span className='mx-3 ml-3'>Open</span></Badge></td>
              <td>user004</td>
              <td className='position'>Company Name4<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Company Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow7}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Web-x</span> | </span> 5000+</td>
              <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 40000+</Tooltip>}><span className='fw-bold text-muted'>₹40000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><Link to="/ListOfCandidate"><i className="fas fa-list " ></i></Link></td>
            
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td>na</td>
              <td>na</td><td>na</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td></td>
              <td>14</td>
              <td className='jdstatus'><Button >Open-Rework</Button><br></br>Client changed the JD criteria</td>
              <td>19-05-2022 7:00.PM</td>
              
              <td onClick={handleShow11}><i className='fas fa-edit'></i></td>

              <td onClick={handleShow8}><i className='fas fa-edit'></i></td>
              <td><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">“ Please fill the offer sheet only if the candidate has accepted the offer and given you/client the date of joining.</Tooltip>}><Button variant='outline-danger' size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></OverlayTrigger></td>

              <td><Button variant='outline-primary' size='sm' as={Link} to="/MyWorkspace/edit"><i className='fas fa-edit me-2'/>Edit</Button></td>
            </tr>
            <tr>
              <td>5</td>

              <td>27-05-2022 / 12:00 A.M</td>
              <td><Badge bg='secondary' ><span>Interview Stage</span></Badge></td>
              <td>user005</td>
              <td className='position'>Company Name5<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Company Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow7}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Tech solution</span> | </span> 6000+</td>
              <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 50000+</Tooltip>}><span className='fw-bold text-muted'>₹50000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><Link to="/ListOfCandidate"><i className="fas fa-list " ></i></Link></td>
            
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td>na</td>
              <td>na</td><td>na</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td></td>
              <td>5</td>
              <td className='jdstatus'><Button variant='success'>Offer stage</Button></td>
              <td>19-05-2022 7:05.PM</td>
              
              <td onClick={handleShow11}><i className='fas fa-edit'></i></td>

              <td onClick={handleShow8}><i className='fas fa-edit'></i></td>
              <td><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">“ Please fill the offer sheet only if the candidate has accepted the offer and given you/client the date of joining.</Tooltip>}><Button variant='outline-danger' size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></OverlayTrigger></td>

              <td><Button variant='outline-primary' size='sm' as={Link} to="/MyWorkspace/edit"><i className='fas fa-edit me-2'/>Edit</Button></td>
            </tr>
            <tr>
              <td>6</td>

              <td>28-05-2022 / 12:00 A.M</td>
              <td><Badge bg='secondary' ><span>Interview Stage</span></Badge></td>
              <td>user006</td>
              <td className='position'>Company Name6<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Company Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Marketing</span> | </span> 10000+</td>
              <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 60000+</Tooltip>}><span className='fw-bold text-muted'>₹60000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><Link to="/ListOfCandidate"><i className="fas fa-list " ></i></Link></td>
            
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td>na</td>
              <td>na</td><td>na</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td></td>
              <td>9</td>
              <td className='jdstatus'><Button variant='warning' className='me-2'>open</Button></td>
              <td>19-05-2022 7:06.PM</td>
              
              <td onClick={handleShow11}><i className='fas fa-edit'></i></td>

              <td onClick={handleShow8}><i className='fas fa-edit'></i></td>
              <td><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">“ Please fill the offer sheet only if the candidate has accepted the offer and given you/client the date of joining.</Tooltip>}><Button variant='outline-danger' size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></OverlayTrigger></td>

              <td><Button variant='outline-primary' size='sm' as={Link} to="/MyWorkspace/edit"><i className='fas fa-edit me-2'/>Edit</Button></td>
            </tr>
            <tr>
              <td>7</td>
              <td>29-05-2022 / 12:00 A.M</td>
              <td><Badge bg='secondary' ><span>Interview Stage</span></Badge></td>
              <td>user007</td>
              <td className='position'>Company Name7<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Company Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Company LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Mobi Tech</span> | </span> 9000+</td>
              <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 70000+</Tooltip>}><span className='fw-bold text-muted'>₹70000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><Link to="/ListOfCandidate"><i className="fas fa-list " ></i></Link></td>
            
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td>na</td>
              <td>na</td><td>na</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td></td>
              <td>4</td>
              <td className='jdstatus'><Button variant='secondary'>Interview stage</Button></td>
              <td>19-05-2022 7:07.PM</td>
              
              <td onClick={handleShow11}><i className='fas fa-edit'></i></td>

              <td onClick={handleShow8}><i className='fas fa-edit'></i></td>
              <td><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">“ Please fill the offer sheet only if the candidate has accepted the offer and given you/client the date of joining.</Tooltip>}><Button variant='outline-danger' size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></OverlayTrigger></td>

              <td><Button variant='outline-primary' size='sm' as={Link} to="/MyWorkspace/edit"><i className='fas fa-edit me-2'/>Edit</Button></td>
            </tr>
            
          </tbody>
        </Table>
      </Container>
      </div>
      {/* Add candidate Modal Box */}
      <Modal show={show} onHide={handleClose} size='xl'>
        <Modal.Header closeButton>     
          {/* <Image src="/images/logo.jpeg" alt="logo" style={{width:"70px", height:"70px"}}/> */}
          <Modal.Title className='mx-3'>Talent Trackers Consulting Pvt ltd</Modal.Title>
          <div className='ms-auto' onClick={handleShow10}><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Guidelines to add candidate</Tooltip>}><i className='fas fa-info-circle'></i></OverlayTrigger><span className='text-small text-primary mx-3'>Guidelines to add candidate</span></div>
        </Modal.Header>
        <Modal.Body>

          <Row>
            {/* <Col md={6} className="modal-bg">
            <h5 className='text-warning text-center mb-3 px-5'>Get instant access to Millions of Verified Emails and Direct Dials Powered by Lead Intelligence</h5>
              <div className='inner-item'>
                
            <div className='result-one'>
          <img src='/images/result_one.png' alt='result-one' />
          </div>
          <div className='result-two'>
          <img src='/images/result_two.png' alt='result-two' />
          </div>
          </div>
            </Col> */}
            <Col md={12}>
        <Form>
        <Row>
            <Col xs={12}>
              <Form.Group className='mt-2 mb-2'>
                <Form.Label className='fw-bold'>Candidate ID </Form.Label>
                <Form.Control type='text' name="alphnumericid" placeholder='(8 digit alpha numeric ID generated by system)' />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Form.Group>
                <Form.Label className='fw-bold mb-3'>JD number </Form.Label>
                <Form.Control type="text" defaultValue="1" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Label className='fw-bold mb-3'>Client name </Form.Label>
                <Form.Control type="text" defaultValue="Pkrs" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Label className='fw-bold mb-3'>JD title  </Form.Label>
                <Form.Control type="text" defaultValue="testing" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3'>JD location </Form.Label>
                <Form.Control type="text" defaultValue="India" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3'>Recruiter ID  </Form.Label>
                <Form.Control type="text" defaultValue="001" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3'>Candidate name  </Form.Label>
                <Form.Control type="text" defaultValue="Prashant Kumar" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col xs={12}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3'>Current designation  </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Label className='fw-bold mb-3 mt-3'>Current salary <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Current Salary in lacs/annum</Tooltip>}><span><i className='fas fa-info-circle ms-2'/></span></OverlayTrigger></Form.Label>
               <Row>
                 <Col xs={4}>
                  <h6>Fix</h6>
                  <Form.Control />
                  <span style={{fontSize:"0.75rem", color:"blue"}}>lacs per annum</span>
                 </Col>
                 <Col xs={4}>
                  <h6>variable</h6>
                  <Form.Control />
                  <span style={{fontSize:"0.75rem", color:"blue"}}>lacs per annum</span>
                 </Col>
                 <Col xs={4}>
                  <h6>Total salary </h6>
                  <Form.Control />
                  <span style={{fontSize:"0.75rem", color:"blue"}}>lacs per annum</span>
                 </Col>
               </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={7}>
            <Form.Label className='mt-3 fw-bold'>Last Appraisal of the candidate </Form.Label>
              <div className='d-flex'>
                
                <Form.Select>
                  <option value="January">January</option>
                  <option value="feb">Feb</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </Form.Select>
                <Form.Select>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2021">2022</option>
                  <option value="2022">2020</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3' >Expected salary (Percentage growth or number - lacs per annum ) </Form.Label> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">lacs per annum</Tooltip>}><span><i className='fas fa-info-circle ms-2'/></span></OverlayTrigger>
                <div className='d-flex'>
                  <Form.Control type='text' />
                  <Form.Select>
                    <option value="Negotiable">Negotiable</option>
                    <option value="Non-Negotiable">Non-Negotiable</option>
                  </Form.Select>
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Total Experience </Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Education </Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Current organization  </Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Current location </Form.Label>
                <Form.Control as="textarea" rows={3} type="address"  />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Candidate mobile number </Form.Label>
                <Form.Control type="tel" placeholder='Phone Number' />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Notice period ?  </Form.Label>
                <Form.Select>
                  <option value='Immediate'>Immediate</option>
                  <option value='15 days'>15 days</option>
                  <option value='21 days '>21 days </option>
                  <option value='30 days'>30 days</option>
                  <option value='45 days'>45 days</option>
                  <option value='2 months'>2 months</option>
                  <option value='75 days'>75 days</option>
                  <option value='90 days'>90 days</option>

                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
            <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Negotiable to  </Form.Label>
                <Form.Select>
                  <option value='Immediate'>Immediate</option>
                  <option value='15 days'>15 days</option>
                  <option value='21 days '>21 days </option>
                  <option value='30 days'>30 days</option>
                  <option value='30 days'>45 days</option>
                  <option value='2 months'>2 months</option>
                  <option value='75 days'>75 days</option>
                  <option value="Non Negotiable">Non Negotiable</option>

                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
           <Form.Label className='mt-3 fw-bold'>JD sent to candidate ?</Form.Label>
           <div className='d-flex'>
            <Form.Check type="radio" label="Yes" Name="jdsent" value='Yes' />
            <Form.Check className='mx-3' type="radio" label="No" Name="jdsent" value='No' />
           </div>
            </Col>
            <Col xs={6}>
        
                <Form.Label className='fw-bold mt-3'>Candidate availability for the interview ?</Form.Label>
                {/* <Form.Select>
                  <option >Select</option>
                  <option value='Virtual/Telephonic- Any mutually decided time. (this week/next week)'> </option>
                  <option value='F2F- Any mutually decided time (this week/next week)'></option>
                  <option value='Others'>Others</option>
                </Form.Select> */}
                  
                        
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options}
                            />
                            
                        
              <Form.Label className='fw-bold mt-3 mb-3'> </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className="fw-bold">Recruiter’s remarks <i className="fas fa-info-circle ms-3" style={{color:'black'}} onClick={handleShow3}></i></Form.Label>
                
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Date and Time of adding a candidate</Form.Label>
                <div className='d-flex'>
                  <Form.Control type="date" />
                  <Form.Control type="time" />
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} >
              
              <div className=' mt-3  '>
                <div className='d-flex'>
                <Form.Check type="checkbox" label='Candidate is currently Not working/Jobless ' className='mx-2' onClick={()=>{toast.error("Not working, immediate joiner")}}/> 
                <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">If you click this option,this means that the candidate is not currently working & an immediate joiner</Tooltip>}><span  style={{fontSize:'0.75rem', color:'black'}}><i className='fas fa-info-circle me-3' /></span></OverlayTrigger>
                </div>
                <div  className='d-flex'>
                <Form.Check type="checkbox" label='Is candidate having an offer/serving the notice period?' className='mx-2' onClick={()=>{toast.error("Found strong need factor for change")}}/>
                <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">If you click this option,this means that the candidate is having an offer/serving  notice period,and  an immediate joiner</Tooltip>}><span  style={{fontSize:'0.75rem', color:'black'}}><i className='fas fa-info-circle me-3' /></span></OverlayTrigger>
                </div>
                <div className='d-flex'>
                <Form.Check type="checkbox" label='Relocation case? ' className='mx-2' onClick={()=>{toast.warning("Relocation case")}} />
                <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Did you observe for some reason, candidate want to relocate to the place of JD? if yes, please tick this checkbox . it will indicate that ,it's a relocation case</Tooltip>}><span  style={{fontSize:'0.75rem', color:'black'}}><i className='fas fa-info-circle me-3' /></span></OverlayTrigger>
                
                </div>
                <div className='d-flex'>
                <Form.Check type="checkbox" label='Career stability? ' className='mx-2' onClick={handleShowdropdown} />
                <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">This is not a mandatory field. It is optional</Tooltip>}><span  style={{fontSize:'0.75rem', color:'black'}}><i className='fas fa-info-circle me-3' /></span></OverlayTrigger>
                </div>
                <div className={showdropdown? 'showdropdown1': 'showdropdown'}>
                  <Form.Check type='checkbox' label="Has the candidate spent more than 3 years is the current organization?" className='mx-5 mt-3 mb-3 fw-bold'/>
                  <Form.Check type='checkbox' label="Candidate has worked with how many companies in last how many years?" className='mx-5 mt-3 fw-bold'/>
                  <span className='mx-5' style={{fontSize:'0.75rem', color:'black'}}><i className='fas fa-info-circle me-3' />This is not a mandatory field. It is optional</span>
                  <span className='mx-5 mb-5' style={{fontSize:'0.75rem', color:'green'}} onClick={handleShow4}><i className="fas fa-question me-3"></i>Guideline- what is called career stability?</span>
                    <Row>
                      <Col sm={4} className="mx-5">
                      <Form.Label className='mt-2'>Work With:</Form.Label>
                  <Form.Select>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                  </Form.Select>
                      </Col>
                      <Col sm={4} className="mx-5">
                      <Form.Label className='mt-2'>Companies in last :</Form.Label>
                  <Form.Select>
                    <option value='1 year'>1 Year</option>
                    <option value='2 Years'>2 Years</option>
                    <option value='3 Years'>3 Years</option>
                    <option value='4 Years'>4 Years</option>
                    <option value='5 Years'>5 Years</option>
                    <option value='6 Years'>6 Years</option>
                    <option value='7 Years'>7 Years</option>
                    <option value='8 Years'>8 Years</option>
                    <option value='9 Years'>9 Years</option>
                    <option value='10 Years'>10 Years</option>
                    <option value='11 Years'>11 Years</option>
                    <option value='12 Years'>12 Years</option>
                    <option value='13 Years'>13 Years</option>
                    <option value='14 Years'>14 Years</option>
                    <option value='15 Years'>15 Years</option>
                    <option value='16 Years'>16 Years</option>
                    <option value='17 Years'>17 Years</option>
                    <option value='18 Years'>18 Years</option>
                    <option value='19 Years'>19 Years</option>
                    <option value='20 Years'>20 Years</option>
                    <option value='21 Years'>21 Years</option>
                    <option value='22 Years'>22 Years</option>
                    <option value='23 Years'>23 Years</option>
                    <option value='24 Years'>24 Years</option>
                    <option value='25 Years'>25 Years</option>
                    <option value='26 Years'>26 Years</option>
                    <option value='27 Years'>27 Years</option>
                    <option value='28 Years'>28 Years</option>
                    <option value='29 Years'>29 Years</option>
                    <option value='30 Years'>30 Years</option>
                    <option value='31 Years'>31 Years</option>
                    <option value='32 Years'>32 Years</option>
                    <option value='33 Years'>33 Years</option>
                    <option value='34 Years'>34 Years</option>
                    <option value='35 Years'>35 Years</option>
                    <option value='36 Years'>36 Years</option>
                    <option value='37 Years'>37 Years</option>
                    <option value='38 Years'>38 Years</option>
                    <option value='39 Years'>39 Years</option>
                    <option value='40 Years'>40 Years</option>
                  </Form.Select>
                      </Col>
                    </Row>
                </div>
                
                
                <div></div>
                <Form.Check type="checkbox" label='Is the candidate flexible to attend rounds of interview? ' className='mx-2' />
                <div className='d-flex'>
                <Form.Check type="checkbox" label='Communication skills? ' className='mx-2' onClick={handleShowskill} />
                <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">If you observe very strong or vewry average Communication, only then click this field. In normal cases, no need to tick this field.</Tooltip>}><span  style={{fontSize:'0.75rem', color:'black'}}><i className='fas fa-info-circle me-3' /></span></OverlayTrigger>
                </div>
                <div className={showskill? 'showskill1':'showskill'}>
                  <Form.Select>
                    <option value='Excellent'>Excellent</option>
                    <option value='Good'>Good</option>
                    <option value='Average'>Average</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Any special comments by user</Form.Label>
              <Form.Control as="textarea" row={3} />
              </Form.Group>
            </Col>
          </Row>

          <Button variant='success' className='mt-3'>Add candidate</Button>
        </Form>
        </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        <Modal show={show10} onHide={handleClose10} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title><i className='fas fa-info-circle'></i>Guidlines For Add Candidates</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p><span className='fw-bold'></span>The purpose of “Add Candidate” area is enabling the software to prepare the candidate tracker sheet which in turn, shall get sent to the client along with CVs. You can edit the added candidate details via header “list of candidates” before freezing the tracker sheet. Given below detailed explanation and guidelines for the important fields in “Add Candidate” area.
<br/>
<span className='fw-bold'>A] Candidate name- </span>- Please mention the full name of candidate (first name & last name/surname without any spelling mistakes)
<br/>
<span className='fw-bold'>B] Current salary- </span>You should very clearly ask the candidate about the break-up of Fix and Variable component in his/her Annual Total CTC. Please mention the “Fix” and “Variable” parts in textboxes and then the “Total salary”. The total salary should be the sum of Fix+ Variable components and the sum should tally. 
<br/>
<span className='fw-bold'>C] Last Appraisal of the candidate- </span>Client is very keen to know when last the candidate was appraised by the current/last organization. It helps them to offer the compensation. You need to fill up the Month/Year of last appraisal in the form after talking to the candidate.
<br/>
<span className='fw-bold'>D] Expected Salary- </span>Client is curious to know candidate’s expectations if he/she is selected. It can be a percentage (%) hike on the current CTC or an absolute value CTC as told to you by candidate. If the candidate is hesitant to quote any figure or percentage hike as his/her expected salary, as the last option, you can simply write “ As per the market standards” etc. However, you must insist candidates to quote some figure/percentage. Also you must ask if the expected salary is negotiable/non negotiable. 
<br/>
<span className='fw-bold'>E]Total Experience- </span>in Years.
<span className='fw-bold'>F] Candidate mobile number- </span>This is a mandatory field. We trust our clients & it is the best practice to provide candidate Mobile number/ Email ID in the tracker sheet. In case, there are clients where we avoid providing mobile numbers, the admin will inform you in a particular JD. Unless informed, user should fill up this field. 
<br/>
<span className='fw-bold'>G] Notice period- </span>it is important to ask candidate about the “negotiable” notice period.- Every client wants immediate joiner. It is good for our own revenue rolling.<br/>
<span className='fw-bold'>H] JD sent to candidate?- </span>As a practice, you should be sending the JD on email to the candidates.  
<br/>
<span className='fw-bold'>I] Candidate’s availability for the interview- </span>Clients are looking, is the candidate flexible to attend the rounds of interviews based on mutually convenient date-time. Candidate’s flexibility is a strong vote for his/ her high “need factor” for job change. You should insist candidate to agree the interview schedule as per client’s availability.
<br/>
<span className='fw-bold'>J] Recruiter’s remarks: </span>There are total 9 checkboxes, you are requested to tick max 3-4 checkboxes which you think, strongly apply in a particular case! It is not mandatory to fill these remarks at all! If you feel, none of the criteria strongly apply to a particular candidate, then you can keep the remarks field “empty/null”. It is better to keep empty remarks than providing unverified/unsure information to client. Based on which fields you tick, there will be standard comments get attached in the final tracker sheet. With practice, you will be able to fill up this data…Initially it might take little time. <br/>
<ul>
  <li>Candidate is currently not working/jobless- If you click this option, it means that the candidate is currently not working/jobless and an immediate joiner. Clients would prefer immediate joiners- hence we intend to provide this information to client in the tracker sheet.</li>
  <li>Is candidate having an offer/ Serving the notice period? - If you click this option, it means that the candidate is having an offer/ serving notice & an early/immediate joiner. Clients would prefer immediate joiners- hence we intend to provide this information to client in the tracker sheet.</li>
  <li>Relocation case: Did you observe, for some reason, the candidate wants to relocate to the place of JD? If yes, please tick this checkbox. It will indicate that it’s a relocation case. Relocation is considered as a strong motive for job change, & client should know about it.</li>
  <li>Career Stability : Every client wants stable candidates to join who have not hopped jobs frequently. The guidelines for “Career Stability” are given in the link on the same page. 
Once clicked “Career Stability”, there will be 2 checkboxes. 1. Has the candidate spent more than 3 years in the current organization?- If yes, Tick it & the information will be passed on to client with some standard comment. (Please don’t tick it if its not applicable & leave the checkbox empty!) 
2. Candidate has worked with how many companies in last how many years? Here you can fill in two dropdowns; - 1. Candidate has worked with how many organizations 2. In how many years? 
We have deliberately greyed out few number of companies & number of years which are not a strong indicator of stability. Leave this checkbox empty if candidate not fitting into the given criteria.
</li>
 <li>Is the candidate flexible to attend rounds of interview?-  Did you observe, the candidate is flexible to attend the rounds of interviews as per client’s schedule calendar? If yes, you should tick this checkbox. If no, please leave this empty. Candidate’s flexibility is a strong vote for his/ her high “need factor” for job change. You should insist candidate to agree the interview schedule as per client’s availability.</li>
<li>Candidate’s Communication skills? Did you observe, the candidate is strong in his/her English communication? There are 3 options in the dropdown…Excellent, Good , Average. Please fill up this field only if the communication is excellent. Strictly avoid bad communication skill candidates. All other JD parameters strongly matching, but average communication, then we can screen such candidate on case to case basis. 
</li>
</ul>
………………………………………………………………………………………………………………………………………………………………………………Finish……………………………………………………………………

</p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose10}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
      </Modal>
      {/* Modal for jd details */}
      <Modal show={show1} onHide={handleClose1} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>JD Details</Modal.Title>
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
      {/* Modal for offer by clients */}
      <Modal show={show2} onHide={handleClose2} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Offer By client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>JD number </Form.Label>
                  <Form.Control type='tel' defaultValue="01" />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>User ID  </Form.Label>
                  <Form.Control type='text' defaultValue="001userId" />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Candidate ID   </Form.Label>
                  <Form.Control type='tel' defaultValue="001" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Client ID  </Form.Label>
                  <Form.Control type='tel' defaultValue="10" />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Offer candidate name </Form.Label>
                  <Form.Control type='text' defaultValue="Prashant Kumar" />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Offered designation </Form.Label>
                  <Form.Control type='text' defaultValue="" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Candidate new work location </Form.Label>
                  <Form.Control as="textarea" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Offered ctc </Form.Label>
                  <Form.Control type='text' defaultValue="" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Sign up rate </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Base invoice value  </Form.Label>
                  <Form.Control type='text' defaultValue="" placeholder='offered ctc*sign up rate' />
                </Form.Group>
              </Col>
            
            </Row>
            <Row>
              <Col sm={4}>
                
                  <Form.Label className='fw-bold mb-3'>Offer accepted ?</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio' value="yes" name="offeraccepted" label="Yes" />
                  <Form.Check type='radio' value="No" name="offeraccepted" label="No" className='mx-3'/>
                    </div>
                
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>DOJ ? </Form.Label>
                  <Form.Control type='date'  />
                </Form.Group>
              </Col>
              <Col sm={4}>
              <Form.Label className='fw-bold mb-3'>Resigned ?</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio' value="yes" name="Resigned" label="Yes" />
                  <Form.Check type='radio' value="No" name="Resigned" label="No" className='mx-3'/>
                    </div>
              </Col>
            </Row>
            <Row>
            <Col sm={4}>
              <Form.Label className='fw-bold mb-3'>Copy of resignation received ?</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio' value="yes" name="resignation" label="Yes" />
                  <Form.Check type='radio' value="No" name="resignation" label="No" className='mx-3'/>
                    </div>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>User incentives (will be calculated by formula if %) ?</Form.Label>
                  <Form.Control type='number' placeholder='' />
                  <p className='text-muted'>please discuss with admin, if absolute value. </p>
                </Form.Group>
              </Col>
              <Col sm={4}>
              <Form.Label className='fw-bold mb-3'>Joined ?</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio' value="yes" name="Joined" label="Yes" />
                  <Form.Check type='radio' value="No" name="Joined" label="No" className='mx-3'/>
                    </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>User comments/remarks</Form.Label>
                  <Form.Control as="textarea" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant='success'>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal for Recruiter Remarks */}
      <Modal show={show3} onHide={handleClose3} size='lg'>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <h5 className='mt-3 mb-3 text-center'>While talking to candidate, did you observe any specific traits out of below options? </h5>
          <div className='d-flex justify-content-center'>
          <Button variant='success' onClick={handleChecked}>Yes</Button>
        <Button variant="secondary" onClick={handleClose3} className="mx-3">
            Close
          </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
      {/* Modal for Guidelines to add candidate */}
      <Modal show={show6} onHide={handleClose6} size='lg'>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
         <p className='mt-3 mb-2'>Current salary- You should ask the candidate about the break-up of Fix and Variable component in his/her Annual Total CTC. Please mention the “Fix” and “Variable” parts in textboxes and then the “Total salary”. The total salary should be the sum of Fix+ Variable components and the sum should tally</p>
         <p>Last Appraisal of the candidate- You should ask the candidate when his/her last appraisal happened in the current/ previous organization and fill up the Month/Year in the form.
Expected Salary- 
</p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose3} className="mx-3">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* what is called career stability? */}
      <Modal show={show4} onHide={handleClose4} size='md'>
        <Modal.Header closeButton>
        What is called career stability?
        </Modal.Header>
        <Modal.Body>
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>No of Companies candidate has worked (including the current company)</th>
                <th>Total No. of total years of career (Please ignore First two years job changes, if any, if the candidate is having more than 10 years of total career)</th>
              </tr>
              
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Stable- irrespective of no. of years career</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Stable If 4 years or more</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Stable If 8 years or more</td>
              </tr>
              <tr>
                <td>4</td>
                <td>stable if 12 years or more</td>
              </tr>
              <tr>
                <td>5</td>
                <td>stable if 15 years or more</td>
              </tr>
              <tr>
                <td>6</td>
                <td>stable if 20 years or more</td>
              </tr>
              <tr>
                <td>7 or more</td>
                <td>Unstable</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose4} className="mx-3">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Jd terms modal */}
      <Modal show={show5} onHide={handleClose5} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Terms Of JD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i>  Sign up rate with client: <span className='text-muted'> 0</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> payment terms: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Replacement period: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> The assured delivery date is .....: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'>  The minimum number of cvs submission required ....: <span className='text-muted'> N/A</span></h6>

          </Col>
          <Col xs={6}>
          <h6 className='fw-bold mt-5 mb-5 mx-3'>  Client coordinationwill be done by ..... <span className='text-muted'> N/A</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'>  Cvs quqlity by admin is required / not required for this JD?: <span className='text-muted'> N/A</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'>  My admin spoc(Single point of contact) for this JD is ...: <span className='text-muted'> N/A</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'>  Payout ....: <span className='text-muted'> N/A</span></h6>

            <h6 className='fw-bold mt-5 mb-5 mx-3'>I have choosen to use own databse/our database. My payout will be .......for this JD : <span className='text-muted'> n/a</span></h6> 
            
          </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show7} onHide={handleClose7} size='lg'>
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
          <Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show8} onHide={handleClose8} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-user me-3" ></i>Exchange notes
with admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Control type="textarea"></Form.Control>
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={()=>toast.success("saved")}>
            save
          </Button>
          <Button variant="secondary" onClick={handleClose8}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show11} onHide={handleClose11} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-user me-3" ></i>Feedback From Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Control type="textarea"></Form.Control>
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={()=>toast.success("saved")}>
            save
          </Button>
          <Button variant="secondary" onClick={handleClose11}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show9} onHide={handleClose9} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Guidlines For My Workspace</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p><span className='fw-bold'>T</span>he JDs locked by you move to “My Workspace” which is the customized area for your own work. The purpose of “My Workspace” is enable you to understand what is my work done today, this week, last week, this month, quarter or a year. The “CVs submission” process is entirely managed from My Workspace.  Given below the explanation of important headers and their application.   
<br/><span className='fw-bold'>Add candidate</span>- In this area you can “Add Candidate” to the tracker sheet, which in turn, shall be sent to the client as the CVs submission. Detailed explanation of each field in “Add candidate” is available in the clickable link on “Add Candidate” page.<br/>
<span className='fw-bold'>List of candidates: </span>All “added candidates” for a particular JD can be viewed, edited, filtered and csv exported in list of candidates. There is a checkbox in front of every candidate row- if ticked, you can add a particular candidate to “tracker sheet”.<br/>
<span className='fw-bold'>Download tracker sheet- </span>Once clicked, the tracker sheet gets csv downloaded on your local machine which you can later attach in the Email panel while sending cvs submission to client.<br/>
<span className='fw-bold'>Submit- </span> The purpose of “Submit” area is to send the CVs submission to client for a particular JD. Once clicked, an Email Panel will open.  You need to attach the CVs from your local machine, upload the tracker sheet, select the template for email body content and click send. To, CC email IDs and your signature will automatically get picked up by the system. The email body is editable. Detailed explanation of the “Submit” area is available in the clickable link on “Submit” page.<br/>
<span className='fw-bold'>Status as per Recruiter- </span>This is editable field where user can update the “status” of the JD as per his/her understanding. This status should generally match with Admin’s status, who too is closely tracking the progress of your JD. If there is a gap in both “status” for a particular JD, the admin and user should communicate offline and arrive at the “Final status”.<br/>
<span className='fw-bold'>Admin spoc/Client spoc-  </span>Once clicked, user will come to know the information about admin/client contact details (Mobile number, Email ID, Designation, Name) . There will be a “single point of contact” at both the admin and client’s end for that particular JD.<br/>
<span className='fw-bold'>Feedback from client:  </span>Recruiter needs to update the “feedback from client” once he/she gets replies from the client/candidates etc . User should constantly check their official mailbox & get involved in the communication. There is a text field in “feedback from client” for user to update.<br/>

<span className='fw-bold'>Exchange notes with admin-  </span>This is a special area enabling user and admin to remain engaged on the progress of a particular JD. This is like a mini chat box, where both can exchange notes in a text….It can speed up the communication instead of talking to each other on a phone call or a live chat or whatsapp etc.- However, all the means of communication are welcome to exchange information.<br/>
<span className='fw-bold'>Offer- </span>- The purpose of “offer” area is to formally capture the information on the offered candidate for a particular JD. This information gets registered and stored in admin’s database. Once submitted by Recruiter, admin and user, both can view the same n their respective “Reports” area. <br/>

<span className='fw-bold'>Edit/Filter/CSV download- </span>These are standard features in “My Workspace” where user can edit forms from “Action” tab or export the filtered data etc.<br/>
…………………………………………………………………………………………………………………………………………………………………………………Finish…………………………………………………………………

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

export default MyWorkSpace