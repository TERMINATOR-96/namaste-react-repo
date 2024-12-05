import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

	return (
		<div className="Header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li>
						Online Status: {onlineStatus ? "✅" : "❎"}
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/Grocery">Grocery</Link>
					</li>
					<li>Cart</li>
					<button className="login" onClick={() => {
						(btnName == "Login") ? setBtnName("Logout") : setBtnName("Login");
					}}>{btnName}</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;