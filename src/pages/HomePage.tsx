// import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { Product } from "../models/Product";

export class HomePage extends Component<{}, { products: Product[] }> {
	static propTypes = {};

	render() {
		return (
			<React.Fragment>
				<header className="">
					<Navbar user={true} />
					<div className="w-full h-60  drop-shadow-md bg-banner bg-cover flex justify-center items-center  text-white bg-center">
						<h1 className="backdrop-blur-sm flex justify-center  items-center font-bold text-xl xl:text-5xl bg-secondary-light/40 drop-shadow w-full h-full">
							Explore & Buy what you need 👍
						</h1>
					</div>
				</header>
				<main className="bg-white dark:bg-slate-800 py-5">
					<section id="products" className="container">
						<Outlet />
					</section>
				</main>
				<footer>
					<section>
						<p className="text-center p-5 font-medium tracking-widest bg-secondary-dark text-white dark:bg-slate-900 dark:font-light text-xs sm:text-lg">
							Copyright &copy; {new Date().getFullYear()} ... All right reserved
							for
							<NavLink to="/" className="underline mx-1">
								Product Hunt
							</NavLink>
						</p>
					</section>
				</footer>
			</React.Fragment>
		);
	}
}

export default HomePage;
