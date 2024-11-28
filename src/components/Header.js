import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

//Component is a normal javascript function that returns ssome JSX
const Header = () => {
// let btnName = "Login";
let [btnName, setBtnName] = useState("Login");

	return (
		<div className="Header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
					<button className="login" onClick={() => {
						(btnName == "Login") ? setBtnName("Logout") : setBtnName("Login");
						//console.log(btnName);
					}}>{btnName}</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;