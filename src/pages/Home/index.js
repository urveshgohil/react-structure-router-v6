import React, { useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import '../../scss/pages/home.scss';

const title = `Website :: Home`;
const helmetContext = {};

const Home = (props) => {
	useEffect(() => {
		let body = document.querySelector('body');
		body.classList.add('home');
		return () => {
			body.classList.remove('home');
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
						Home Page
						{props.appSuccess ? props.appSuccess : ''}
					</div>
				</section>
			</HelmetProvider>
		</>
	);
};
export default Home;