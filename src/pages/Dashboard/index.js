import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const title = `Website :: Dashboard`;
const helmetContext = {};

const Dashboard = () => {
	useEffect(() => {
		let body = document.querySelector('body');
		body.classList.add('dashboard');
		return () => {
			body.classList.remove('dashboard');
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
						Dashboard Page
					</div>
				</section>
			</HelmetProvider>
		</>
	);
};
export default Dashboard;