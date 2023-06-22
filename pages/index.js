"use client";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";
import { Form, Alert, InputGroup, Button } from "react-bootstrap";
import { useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Home() {
	const supabase = createClientComponentClient(); //supabase client

	const [err, setError] = useState("");
	const [data, setData] = useState({
		email: "adminnextjs@gmail.com",
		password: "1234567890",
	});
	const { email, password } = data;
	const changeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
		setError("");
	};
	let navigate = useRouter();
	const routeChange = () => {
		let path = `/components/dashboard/dashboard/`;
		navigate.push(path);
	};

	const Login = (e) => {
		console.log(data);
		if (
			data.email == "adminnextjs@gmail.com" &&
			data.password == "1234567890"
		) {
			routeChange();
		} else {
			setError("The Auction details did not Match");
			setData({
				email: "adminnextjs@gmail.com",
				password: "1234567890",
			});
		}
	};
	return (
		<>
			<div>
				<Seo title="Login" />
				<div className="login-img">
					<div className="page">
						{/* <!-- CONTAINER OPEN --> */}
						<div className="col-login mx-auto mt-7">
							<div className="text-center">
								<img
									src={"../../../assets/images/brand/logo-white.png"}
									className="header-brand-img"
									alt=""
								/>
							</div>
						</div>
						<div className="container-login100">
							<div className="wrap-login100 p-6">
								<form className="login100-form validate-form">
									<span className="login100-form-title pb-5"> Login</span>
									<div>
										<Form.Group
											className="text-start form-group"
											controlId="formEmail"
										>
											<Form.Label>Email</Form.Label>
											<Form.Control
												className="form-control"
												placeholder="Enter your email"
												name="email"
												type="text"
												value={email}
												onChange={changeHandler}
												required
											/>
										</Form.Group>
										<Form.Group
											className="text-start form-group"
											controlId="formpassword"
										>
											<Form.Label>Password</Form.Label>
											<Form.Control
												className="form-control"
												placeholder="Enter your password"
												name="password"
												type="password"
												value={password}
												onChange={changeHandler}
												required
											/>
										</Form.Group>

										<div className="container-login100-form-btn">
											<Button
												onClick={Login}
												className="login100-form-btn btn-primary"
											>
												Login
											</Button>
										</div>

										<div className="text-center pt-3">
											<p className="text-dark mb-0">
												Not a member?{" "}
												<Link href={`/components/authentication/register/`}>
													Sign UP
												</Link>
											</p>
										</div>
										<div className="text-center pt-3"></div>
										<label className="login-social-icon">
											<span>Login with Social</span>
										</label>

										{/* 
                      This is the login button
                    <Auth
											supabaseClient={supabase}
											view="Sign in"
											appearance={{ theme: ThemeSupa }}
											theme="dark"
											showLinks={false}
											providers={[]}
											redirectTo="http://localhost:3000/auth/callback"
										/> */}
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
									</div>
								</form>
							</div>
						</div>
						{/* // <!-- CONTAINER CLOSED --> */}
					</div>
				</div>
			</div>
		</>
	);
}
