import React,{useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {CSVLink} from "react-csv"
import { toast, ToastContainer } from 'react-toastify'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import {Link} from 'react-router-dom'
import { Container, Table, Button , Form ,OverlayTrigger, Tooltip, Pagination } from 'react-bootstrap'
const MyCandidate = () => {
  const Studentlist = [
    {id:1, jdno:"2", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"001",Candidatename:"Prashant", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
    {id:2, jdno:"003", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"002",Candidatename:"Neeraj", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
    {id:3, jdno:"33", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"003", Candidatename:"Prashant", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
    {id:4, jdno:"33", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"004", Candidatename:"Prashant", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
]
const [select, setselect]= useState([]);
const csvReport = {
    filename: 'MyCandidateTable.csv',
    data: Studentlist
}
console.log(select)

  return (
    <div>
      <ToastContainer position='top-center' />
      <NavbarMenu />
      <Sidebar />

      <Container className='myworkspace'>
        <h5 className='mt-5 fw-bold text-center'>My Candidates</h5>
        <div className='mt-2 d-flex'>
          <Button as={Link} to='/Filter-my-candidate' variant='danger' className='mx-2 mb-2'><i className='fas fa-filter'></i>Filter</Button>
        <CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><Button className='mx-2 mb-2' size='sm'><i className='fas fa-download'/>CSV Download</Button></CSVLink>
        </div>
      </Container>
      <div className='jd-wraper'>
      <Container className='table-data' fluid>
        <Table className='data-table' hover fluid>
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
                            <th>Current salary </th>
                            <th>Last Appraisal of the candidate </th>
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
                        </tr>
                    </thead>
                    <tbody>
                    {Studentlist.map((student)=>{return(
                       <>
                        <tr>
                            <td><Form.Check type='checkbox' value={student.id} onChange={(e)=>setselect(e.target.value)} onClick={()=>{toast.success(student.id + "Row of my candidate is selected")}} /></td>
                            <td>{student.id}</td>
                            <td>{student.jdno}</td>
                            <td>{student.Clientname}</td>
                            <td>{student.JDtitle}</td>
                            <td>{student.JDlocation}</td>
                            <td>{student.RecruiterID}</td>
                            <td>{student.Candidatename}</td>
                            <td>{student.Currentdesignation}</td>
                            <td>{student.Currentsalary}</td>
                            <td>May 2022</td>
                            <td>1 lacs/annum</td>
                            <td>Negotiable</td>
                            <td>4 Years</td>
                            <td>MBA</td>
                            <td>N/a</td>
                            <td>Patna, India</td>
                            <td>785878787</td>
                            <td>90 days</td>
                            <td>Yes</td>
                            <td>This week</td>
                            <td>candidate is currently Not working/Jobless </td>
                            <td>21-May-2022 3:45 P.M</td>
                            <td>Good</td>
                        </tr>
                     </>
                    )})}
                    </tbody>
             
        </Table>
        </Container>
        </div>
        <Container className='mt-3'>
        <Pagination>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item onClick={()=>{toast.info("Currently Not active")}}>{2}</Pagination.Item>
        <Pagination.Item onClick={()=>{toast.warn("Currently Not active")}}>{3}</Pagination.Item>
        <Pagination.Next onClick={()=>{toast.dark("Currently Not active")}} />
        <Pagination.Last onClick={()=>{toast.error("Currently Not active")}} />
        </Pagination>
        </Container>
    </div>
  )
}

export default MyCandidate