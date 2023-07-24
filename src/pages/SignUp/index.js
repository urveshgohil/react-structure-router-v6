import React, { useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const title = `Website :: Sign Up`;
const helmetContext = {};

const SignUp = () => {
	useEffect(() => {
		let body = document.querySelector('body');
		body.classList.add('sign-up');
		return () => {
			body.classList.remove('sign-up');
		};
	});

	return (
		<>
			<HelmetProvider context={helmetContext}>
				<Helmet>
					<title>{title}</title>
				</Helmet>
				<section className="">
					<div className="container">
						Sign Up
					</div>
				</section>
			</HelmetProvider>
		</>
	);
};
export default SignUp;