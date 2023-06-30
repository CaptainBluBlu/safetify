import React, { useState } from "react";
import Link from "next/link";
import { Row, Col, Card, Form, Button, InputGroup } from "react-bootstrap";
import { Password } from "../shared/data/Authenticatepage/DataAuthentication";
import Seo from "@/shared/layout-components/seo/seo";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";

const Register = () => {
  // Basic Form validation
  const supabaseClient = useSupabaseClient();

  const [validated, setValidated] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [gender, setGender] = useState("");
  const state = [{ value: ".....", label: "....." }];
  const [data, setData] = useState({
    authUserId: null,
    email: "",
    password: "",
    ic: "",
    gender: "",
    phone: "",
    address: "",
    username: "",
    fullName: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    console.log(data);
  };

  const handleSubmit = (event) => {
    // Stopping default form submission
    event.preventDefault();
    event.stopPropagation();

    // setting the gender value before submit
    data.gender = gender;
    console.log(data);

    if (!isAgree) {
      alert("Please agree to the terms and conditions");
      return;
    }

    if (data.email && data.password) {
      handleSignUpSupabase();
    } else {
      alert("Please fill in all the required fields");
    }

    // // Dont know what is happening here
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // setValidated(true);
  };

  const handleSignUpSupabase = async () => {
    const res = await supabaseClient.auth
      .signUp({
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log("success");
        console.log(response.data.error);

        if (response.error) {
          alert(response.error.message);
          new Error(response.error.message);
          return;
        }

        alert("Check your email for confirmation!");
        // set the authUserId
        console.log(response.data.user.id);
        data.authUserId = response.data.user.id;
      })
      .then(() => {
        createNewUser().then((response) => {
          if (response.error) {
            alert(response.error.message);
            new Error(response.error.message);
            return;
          }

          alert("User created successfully!");
        });
      });
  };

  const createNewUser = async () => {
    if (data.authUserId === null) {
      new Error("authUserId is null");
      return;
    }

    const response = await fetch("/api/create/user", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      new Error(response.statusText);
      return;
    }

    return response.json();
  };

  const Gender = [
    { value: "0", label: "Male" },
    { value: "1", label: "Female" },
  ];

  return (
    <div>
      <Seo title="Register" />

      {/* <!-- CONTAINER OPEN --> */}
      <Col className="col-login mx-auto mt-7">
        <div className="text-center">
          <img
            src={"../../../assets/images/brand/safetify-white.png"}
            className="header-brand-img m-5"
            alt=""
            style={{ height: "100px" }}
          />
        </div>
      </Col>
      <div className="container-login100">
        <div className="wrap-login100 p-6">
          <Card>
            <Card.Body>
              <span className="login100-form-title">Registration</span>
              <Form noValidate validated={validated}>
                <div className="form-row">
                  <Col xl={12} className="mb-3">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Full name"
                      name="fullName"
                      onChange={changeHandler}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Col>
                </div>
                <div className="form-row">
                  <Col xl={12} className="mb-3">
                    <Form.Label>IC</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="IC"
                      name="ic"
                      onChange={changeHandler}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Col>
                </div>
                <div className="form-row">
                  <Col xl={6} className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Select
                      classNamePrefix="Select"
                      options={Gender}
                      placeholder="Gender"
                      name="gender"
                      onChange={(e) => setGender(e.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {" "}
                      Please select your gender.
                    </Form.Control.Feedback>
                  </Col>
                  <Col xl={6} className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Phone Number"
                      required
                      name="phone"
                      onChange={changeHandler}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid phone number.
                    </Form.Control.Feedback>
                  </Col>
                </div>
                <div className="form-row">
                  <Col xl={12} className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      required
                      name="address"
                      onChange={changeHandler}
                    />
                    <Form.Control.Feedback type="invalid">
                      {" "}
                      Please provide a valid address.{" "}
                    </Form.Control.Feedback>
                  </Col>
                </div>
                <div className="form-row">
                  <Col xl={12} className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Username"
                      name="username"
                      onChange={changeHandler}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Col>
                </div>
                <div className="form-row">
                  <Col xl={12} className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={changeHandler}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Col>
                </div>
                <div className="form-row">
                  <Col xl={12} className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={changeHandler}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Col>
                </div>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    onClick={() => setIsAgree(!isAgree)}
                  />
                </Form.Group>
                <div className="text-center">
                  <Button type="submit" onClick={handleSubmit}>
                    Submit form
                  </Button>
                </div>
                <div className="text-center pt-3">
                  <p className="text-dark mb-0">
                    Already have account?
                    <Link
                      href={`/components/pages/login`}
                      className="text-primary ms-1"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
                <label className="login-social-icon">
                  <span>Register with Social</span>
                </label>
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
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* <!-- CONTAINER CLOSED --> */}
    </div>
  );
};
Register.layout = "Authenticationlayout";
export default Register;
