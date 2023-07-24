import React, { useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const title = `Website :: Sign In`;
const helmetContext = {};

const SignIn = (props) => {
	useEffect(() => {
		let body = document.querySelector('body');
		body.classList.add('sign-in');
		return () => {
			body.classList.remove('sign-in');
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
						Sign In
						{props.appSuccess ? props.appSuccess : ''}
					</div>
				</section>
			</HelmetProvider>
		</>
	);
};
export default SignIn;