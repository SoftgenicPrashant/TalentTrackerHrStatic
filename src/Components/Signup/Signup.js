import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom';
import './Signup.css'
import { useForm } from "react-hook-form";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { TextField } from '@mui/material';
import IconButton from "@material-ui/core/IconButton";
import MuiPhoneNumber from "material-ui-phone-number";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { RadioGroup, FormLabel, FormControlLabel, Radio, FormControl  } from '@mui/material';
const Signup = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    confirmPassword: "",
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [phone, setPhone] = React.useState("");
  console.log(phone)

  const handleOnChange = value => {
    setPhone(value);
  };
  return (
    <div>
    <Container fluid>
        <Row>
        <Col sm={7} className="signup-left">
        <h5 class="fw-bold text-warning mt-3 mx-3 ">Key Features:</h5>
            <ul className='list-unstyled'>
                <li><i className="fas fa-check me-3"></i>Free sign up</li>
                <li><i className="fas fa-check me-3"></i>Free use of our 2 Million candidate database PAN India</li>
                <li><i className="fas fa-check me-3"></i>Transparency: Client coordination is to be done by you in majority cases</li>

                <li><i className="fas fa-check me-3"></i>Exclusive JDs: 1 recruiter- 1 JD in majority cases</li>
                <li><i className="fas fa-check me-3"></i>Scope: 500+ clients & hundreds of JDs available to unlock every day. (IT/non IT- PAN India)</li>
                <li><i className="fas fa-check me-3"></i>We are exclusive partner to clients in many cases</li>
                <li><i className="fas fa-check me-3"></i>Communication: Live chat support, Allocation of SPOC (single point of contact) to you, <span className='mx-4'>phone call, whats app, sms support from our HQ/ admin desks for strong communication</span></li>
                <li><i className="fas fa-check me-3"></i>Emailing- End-to-End Email communication with clients/candidates through our in-house <span className='mx-4'>portal</span></li>
                <li><i className="fas fa-check me-3"></i>Vision: To provide Recruiters/Consultancies an assured income per month, build loyalties and <span className='mx-4'>achieve mutual revenue growth</span></li>
                <li><i className="fas fa-check me-3"></i>Client servicing as the top work ethic</li>
            </ul>
          </Col>
          <Col sm={5} className="signup-right">
  
            <Container className='mt-3 '>
                <div className='d-flex'>
                <img src='images/logo.jpeg'  className='mb-3' alt='logo'></img><h5 className=' mt-3 fw-bold  mb-0 mx-2' style={{fontSize:"18px"}}>Talent Trackers Consulting Pvt Ltd</h5>
                </div>
              <Row className='align-items-center justify-content-center form-cont'>
                <Col md={8}>
                  <div className='mb-3'>
                    <h3 className='fw-bold'>Sign Up</h3>
                    <p className='mb-3 text-muted'>Sign Up For New Account</p>
                  </div>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <TextField type="text" variant="standard" label="First Name" fullWidth className='mb-1' 
                      {...register("FirstName", { required: "First Name is required.",pattern: /^[A-Za-z]+$/i   })}
                      error={Boolean(errors.FirstName)}
                      helperText={errors.FirstName?.message}
                     />
                      {errors?.Name?.type === "pattern" && (
                        <p style={{color:"red", fontSize:"0.75rem"}}>Alphabetical characters only</p>
                      )}
                    <TextField type="text" variant="standard" label="Last Name" fullWidth className='mb-1' 
                      {...register("LastName", { required: "Last Name is required.",pattern: /^[A-Za-z]+$/i   })}
                      error={Boolean(errors.LastName)}
                      helperText={errors.LastName?.message}
                     />
                      {errors?.Name?.type === "pattern" && (
                        <p style={{color:"red", fontSize:"0.75rem"}}>Alphabetical characters only</p>
                      )}
                    <TextField type="email" variant="standard" label="Personal Email/Work Email" fullWidth className='mb-1' />
                    <br></br>
                    <br></br>
                    <Input 
                      type={values.showPassword ? "text" : "password"}
                      onChange={handlePasswordChange("password")}
                      value={values.password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      fullWidth variant="standard" placeholder='Password'
                    />
                    <br></br>
                    <br></br>
                    <Input 
                      type={values.showPassword ? "text" : "password"}
                      onChange={handlePasswordChange("confirmPassword")}
                      value={values.confirmPassword}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      fullWidth variant="standard" placeholder='Confirm Password'
                    />
        <TextField type="address" variant="standard" label="Current location" fullWidth className='mb-1' 
                      {...register("Location", { required: "Current Location is required."  })}
                      error={Boolean(errors.Location)}
                      helperText={errors.Location?.message}
                     />
                    <Row>
                        <Col xs={5} className="mt-3">
                          
                        <MuiPhoneNumber defaultCountry={"in"} onChange={handleOnChange} name="countrycode" />                  
                        </Col>
                        <Col xs={7} className="mb-3">
                        <TextField type="tel" variant="standard" label="Number" fullWidth onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} />
                        </Col>
                    </Row>

      <FormControl >
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        className='d-flex' 
      ><div className='d-flex'>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        </div>
      </RadioGroup>
    </FormControl>
                    
                    <div className='mb-3 d-flex'>
                      <span className='me-auto'><Link to="/" style={{textDecoration:'none'}}>Already Have account?</Link></span>
                    </div>
                    <Button variant="primary" type="submit">
                      Sign Up
                    </Button>
            </Form>
                </Col>
              </Row>
            </Container>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Signup