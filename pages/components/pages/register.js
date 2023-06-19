import React, { useState } from 'react'
import Link from 'next/link'
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { Password } from '../../../shared/data/Authenticatepage/DataAuthentication';
import Seo from '@/shared/layout-components/seo/seo';

import { Formik } from 'formik';
import *as Yup from 'yup';
import Select from 'react-select';


const Register = () => {

  // Basic Form validation

  const [validated, setValidated] = useState(false);
  const state = [
    { value: ".....", label: "....." },
  ];
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const Gender = [
    { value: "0", label: "Male" },
    { value: "1", label: "Female" },
  ];

  const Option = [
    { value: "One", label: "One" },
    { value: "Two", label: "Two" },
    { value: "Three", label: "Three" },
    { value: "Four", label: "Four" },

  ];



  return (

  <div >
      <Seo title="Register"/>

    {/* <!-- CONTAINER OPEN --> */}
    <Col className="col-login mx-auto mt-7">
      <div className="text-center">
        <img src={"../../../assets/images/brand/xlogo-white.png"} className="header-brand-img m-0" alt=""/>
      </div>
    </Col>
    <div className="container-login100">
      <div className="wrap-login100 p-6">
      <Card>
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="form-row">
                <Col xl={6} className="mb-3">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control required type="text" placeholder="Full name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
                <Col xl={6} className="mb-3">
                  <Form.Label>IC</Form.Label>
                  <Form.Control required type="text" placeholder="IC" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
              </div>
              <div className="form-row">
              <Col xl={3} className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Select classNamePrefix="Select" options={Gender} placeholder='Gender' />
                  <Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
                </Col>
                <Col xl={3} className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Phone Number" required />
                  <Form.Control.Feedback type="invalid">Please provide a valid phone number.</Form.Control.Feedback>
                </Col>
                <Col xl={6} className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Address" required />
                  <Form.Control.Feedback type="invalid"> Please provide a valid address. </Form.Control.Feedback>
                </Col>
              </div>
              <div className="form-row">
                <Col xl={9} className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control required type="text" placeholder="Username" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
              </div>
              <div className="form-row">
                <Col xl={9} className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required type="text" placeholder="Email" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
              </div>
              <div className="form-row">
                <Col xl={9} className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control required type="text" placeholder="Password" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
              </div>
              <Form.Group className='mb-3'>
                <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>

          </Card.Body>
        </Card>
        <form className="login100-form validate-form">
          <span className="login100-form-title">
            Registration
          </span>
          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
            <Link href="#" className="input-group-text bg-white text-muted">
              <i className="mdi mdi-account" aria-hidden="true"></i>
            </Link>
            <input className="input100 border-start-0 ms-0 form-control" type="text" placeholder="Full Name"/>
          </div>
          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
            <Link href="#" className="input-group-text bg-white text-muted">
              <i className="mdi mdi-account-card-details" aria-hidden="true"></i>
            </Link>
            <input className="input100 border-start-0 ms-0 form-control" type="int" placeholder="IC"/>
          </div>
          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
            <Link href="#" className="input-group-text bg-white text-muted">
              <i className="fa fa-venus-mars" aria-hidden="true"></i>
            </Link>
            <input className="input100 border-start-0 ms-0 form-control" type="text" placeholder="Gender"/>
          </div>
          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
            <Link href="#" className="input-group-text bg-white text-muted">
              <i className="mdi mdi-phone" aria-hidden="true"></i>
            </Link>
            <input className="input100 border-start-0 ms-0 form-control" type="text" placeholder="Phone Number"/>
          </div>
          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
            <Link href="#" className="input-group-text bg-white text-muted">
              <i className="mdi mdi-account-card-details" aria-hidden="true"></i>
            </Link>
            <input className="input100 border-start-0 ms-0 form-control" type="text" placeholder="Username"/>
          </div>
          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
            <Link href="#" className="input-group-text bg-white text-muted">
              <i className="zmdi zmdi-email" aria-hidden="true"></i>
            </Link>
            <input className="input100 border-start-0 ms-0 form-control" type="email" placeholder="Email"/>
          </div>
          <Password/>
          <label className="custom-control custom-checkbox mt-4">
            <input type="checkbox" className="custom-control-input"/>
              <span className="custom-control-label">Agree the <Link href={`/components/pages/extension/terms/`}>terms and policy</Link></span>
          </label>
          <div className="container-login100-form-btn">
            <Link href={`/`}className="login100-form-btn btn-primary">
              Register
            </Link>
          </div>
          <div className="text-center pt-3">
            <p className="text-dark mb-0">Already have account?<Link href={`/components/pages/login`} className="text-primary ms-1">Sign In</Link></p>
          </div>
          <label className="login-social-icon"><span>Register with Social</span></label>
          <div className="d-flex justify-content-center">
            <Link href="#">
              <div className="social-login me-4 text-center">
                <i className="fa fa-google"></i>
              </div>
            </Link>
            <Link href="#">
              <div className="social-login me-4 text-center">
                <i className="fa fa-facebook"></i>
              </div>
            </Link>
            <Link href="#">
              <div className="social-login text-center">
                <i className="fa fa-twitter"></i>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
    {/* <!-- CONTAINER CLOSED --> */}
  </div>
)
};
Register.layout = "Authenticationlayout"
export default Register;