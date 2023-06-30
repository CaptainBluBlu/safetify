import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Col, Tabs, Form, Tab } from "react-bootstrap";
import { Password } from "../shared/data/Authenticatepage/DataAuthentication";
import Seo from "@/shared/layout-components/seo/seo";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

const Login = () => {
  const supabaseClient = useSupabaseClient(); // initialising supabase client

  // Defining the functions to set the data and to return any error message
  const [err, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const Login = async (e) => {
    if (data.email == null || data.password == null) {
      alert("Something went wrong please refresh the page and try again");
      return;
    }

    const { user, error } = await supabaseClient.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setError(error.message);
      alert(error.message);
    }
  };

  // const user = useUser();
  // const [data, setData] = useState();

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from("test").select("*");
      setData(data);
    }

    loadData();
    // Only run query once user is logged in.
    //if (user) loadData();
  }, []);

  return (
    <div>
      <Seo title="Login" />
      {/* <!-- CONTAINER OPEN --> */}
      <Col className="col-login mx-auto mt-7">
        <div className="text-center">
          <img
            src={"../../../assets/images/brand/safetify-white.png"}
            className="header-brand-img"
            alt=""
            height={100}
            width={100}
          />
        </div>
      </Col>
      <div className="container-login100">
        <div className="wrap-login100 p-6">
          <form className="login100-form validate-form">
            <span className="login100-form-title pb-5">Login</span>

            <div className="panel panel-primary">
              <div className="tab-menu-heading border-0">
                <div className="tabs-menu1">
                  {/* <!-- Tabs --> */}
                  <Tabs
                    defaultActiveKey="Email"
                    id="uncontrolled-tab-example"
                    className="tab-content"
                  >
                    <Tab eventKey="Email" title="Email" className="p-0 pt-5">
                      <div
                        className="wrap-input100 validate-input input-group"
                        data-bs-validate="Valid email is required: ex@abc.xyz"
                      >
                        <Link
                          href="#"
                          className="input-group-text bg-white text-muted"
                        >
                          <i
                            className="zmdi zmdi-email text-muted"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <input
                          className="input100 border-start-0 form-control ms-0"
                          type="email"
                          placeholder="Email"
                          name="email"
                          onChange={changeHandler}
                        />
                      </div>
                      <Password onChange={changeHandler} />
                      <div className="text-center pt-4">
                        <p className="mb-0 fs-13">
                          <Link
                            href={`/components/pages/forgot-password`}
                            className="text-primary ms-1"
                          >
                            Forgot Password?
                          </Link>
                        </p>
                      </div>
                      <div className="container-login100-form-btn">
                        <Link
                          href={`/components/dashboard`}
                          className="login100-form-btn btn-primary"
                          onClick={Login}
                        >
                          Login
                        </Link>
                      </div>
                      {/* <Auth
                        redirectTo="http://localhost:3000/"
                        appearance={{ theme: ThemeSupa }}
                        supabaseClient={supabaseClient}
                        providers={["google", "github"]}
                        socialLayout="horizontal"
                      /> */}
                      <div className="text-center pt-3">
                        <p className="text-dark mb-0 fs-13 mx-3">
                          Not a member?
                          <Link
                            href={`/register`}
                            className="text-primary ms-1"
                          >
                            Sign Up
                          </Link>
                        </p>
                      </div>
                      <label className="login-social-icon">
                        <span>Login with Social</span>
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
                          <div className="social-login text-center mb-5">
                            <i className="fa fa-twitter"></i>
                          </div>
                        </Link>
                      </div>
                    </Tab>
                    {/*
                      <Tab eventKey="Mobile" title="Mobile">
                        <div className="tab-pane pt-5" id="tab6">
                          <div id="mobile-num" className="wrap-input100 mobile-num validate-input input-group mb-4">
                            <Link href="#" className="input-group-text bg-white text-muted">
                              <span>+91</span>
                            </Link>
                            <Form.Control className="input100 border-start-0 ms-0" type='number' />
                          </div>
                          <div id="login-otp" className="justify-content-around login-otp mt-5 mb-5">
                            <Form.Control className="text-center w-15" id="txt1" maxLength={1} />
                            <Form.Control className="text-center w-15" id="txt2" maxLength={1} />
                            <Form.Control className="text-center w-15" id="txt3" maxLength={1} />
                            <Form.Control className="text-center w-15" id="txt4" maxLength={1} />
                          </div>
                          <small>Note : Login with registered mobile number to generate OTP.</small>
                          <div className="container-login100-form-btn ">
                            <Link href="#" className="login100-form-btn btn-primary" id="generate-otp" onClick={()=>Log()}>
                              Proceed
                            </Link>
                          </div>
                        </div>
                      </Tab>
                    */}
                  </Tabs>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* // <!-- CONTAINER CLOSED --> */}
    </div>
  );
};

Login.layout = "Authenticationlayout";
export default Login;
