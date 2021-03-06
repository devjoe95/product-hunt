import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink, useParams } from "react-router-dom";
import { Product } from "../../models/Product";
import Discussion from "../discussion";

function ProductDetails(props: any): React.ReactElement {
	const params: any = useParams();
	const [product, setProduct] = useState<Product | any>({});
	useEffect(() => {
		const item: Product = props.products.find(
			(product: Product) => product.id === parseInt(params.id, 10)
		);

		setProduct(item);
	}, [props.products, params]);

	const { name, description, media, upvote, maker } = product;
	return (
		<div>
			<NavLink
				to="/"
				className="flex items-center justify-center w-32 dark:bg-slate-900 dark:hover:bg-slate-600 bg-secondary-dark hover:bg-secondary-light text-white pr-2 py-3  rounded self-center"
			>
				<span className="material-symbols-outlined">chevron_left</span>
				Go back
			</NavLink>
			<div className=" relative flex flex-col sm:flex-row mb-5 xl:mb-0 rounded shadow p-5 dark:bg-slate-900 bg-slate-50 my-5">
				<img
					src={media}
					alt={name}
					className="mr-5 w-1/2 border p-0.5 self-start"
				/>
				<div className="xl:mt-5">
					<h4 className="text-xl font-bold text-gray-700 dark:text-white inline-block mt-4 sm:mt-0">
						{name}
					</h4>
					<p className="text-sm my-3 text-slate-600 dark:text-white">
						{description}
					</p>
					<div className="flex mt-5">
						<img
							src={maker?.avatar}
							alt={maker?.name}
							className="rounded-full h-12 w-12 object-cover mr-2 italic border p-0.5"
						/>
						<h5 className="text-gray-500 dark:text-white italic self-center">
							{maker?.name}
						</h5>
					</div>
				</div>
				<div className="text-gray-700 dark:text-white flex flex-col justify-center items-center absolute right-5 bottom-5">
					<span
						className="material-symbols-outlined cursor-pointer"
						onClick={() => {
							setProduct({
								...product,
								upvote:
									product.upvote -
										props.products.find(
											(product: Product) =>
												product.id === parseInt(params.id, 10)
										).upvote ===
									1
										? product.upvote
										: product.upvote + 1,
							});
						}}
					>
						expand_less
					</span>
					<span>{upvote}</span>
					<span
						className="material-symbols-outlined cursor-pointer"
						onClick={() => {
							setProduct({
								...product,
								upvote:
									props.products.find(
										(product: Product) => product.id === parseInt(params.id, 10)
									).upvote -
										product.upvote ===
									1
										? product.upvote
										: product.upvote - 1,
							});
						}}
					>
						expand_more
					</span>
				</div>
			</div>
			<Discussion />
		</div>
	);
}

ProductDetails.propTypes = {
	products: PropTypes.array,
};

export default ProductDetails;
