import {useContext} from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

//Component is a normal javascript function that returns ssome JSX
const Header = () => {
	console.log("Header render");

	//if no dependency array => useEffect is called on every render
	//if dependency array is empty = [] => useEffect is called on initial render(just once)
	//if dependency array is [btnNameReact] => called every time btnNameReact is updated
	useEffect(() => {
		console.log("useEffect called");
	}, []);

	//never use your useState hook inside a condition
	//and also never create it within function or for loop
	let [btnName, setBtnName] = useState("Login");

	const onlineStatus = useOnlineStatus();

	//taking data from UserContext which is react context used to avoid props drilling
	const data = useContext(UserContext);
	const {loggedInUser} = data;
	console.log(data);

	//Selector
	//we are subscribing to our store using a selector
	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);

	return (
		<div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
			<div className="logo-container">
				<img className="w-18 align-middle" src={LOGO_URL} />
			</div>
			<div className="flex items-center">
				<ul className="flex p-4 m-4">
					<li className="px-3">
						Online Status: {onlineStatus ? "✅" : "❎"}
					</li>
					<li className="px-3">
						<Link to="/">Home</Link>
					</li>
					<li className="px-3">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-3">
						<Link to="/contact">Contact</Link>
					</li>
					<li className="px-3">
						<Link to="/Grocery">Grocery</Link>
					</li>
					<li className="px-3 font-bold text-xl">
						<Link to="/cart">Cart - ({cartItems.length} items)</Link>
					</li>
					<button className="login" onClick={() => {
						(btnName == "Login") ? setBtnName("Logout") : setBtnName("Login");
					}}>{btnName}</button>
					<li className="px-4 font-bold">{loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;