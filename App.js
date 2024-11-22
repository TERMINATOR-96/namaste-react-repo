import React from "react";
import ReactDOM from "react-dom/client";

//Component is a normal javascript function that returns ssome JSX
const Header = () => {
	return (
		<div className="Header">
			<div className="logo-container">
				<img className="logo" src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

const styleCard = {
	backgroundColor:"#f0f0f0"
};

const RestaurantCard = (props) => {
	const {resData} = props; 
	const {
		name, 
		cuisines, 
		avgRating, 
		costForTwo, 
		deliveryTime
	} = resData?.data;
	return(
		<div className="res-card" style={styleCard}>
			<img className="res-logo" alt="food-logo" src={resData.data.img} />
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating} stars</h4>
			<h4>Rs {costForTwo / 100} for two</h4>
			<h4>{deliveryTime} minutes</h4>
		</div>
	);
};

const resList = [
	{
		type: "restaurant",
		data:{
			name: "KFC",
			id: "492159",
			cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
			costForTwo: 40000,
			deliveryTime: 36,
			avgRating: "3.8",
			img: "https://www.shutterstock.com/image-photo/lop-buri-thailand11082020-kfc-fast-260nw-1793763259.jpg"
		},
		subtype: "basic",
	},
	{
		type: "restaurant",
		data:{
			name: "Meghana Foods",
			id: "389322",
			cuisines: ["Biryanis", "North Indian", "Asian"],
			costForTwo: 50000,
			deliveryTime: 38,
			avgRating: "4.4",
			img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/800px-%22Hyderabadi_Dum_Biryani%22.jpg"
		},
		subtype: "basic",
	}
];

const Body = () => {
	return (
		<div className="body">
			<div className="Search">Search</div>
			<div className="res-container">
				{/* <RestaurantCard resData = {resList[0]} />
				<RestaurantCard resData = {resList[1]} /> */}
				{
					resList.map((restaurant) => (
						<RestaurantCard key={restaurant.data.id} resData={restaurant} />
					))
				}
			</div>
		</div>
	);
};

const AppLayout = () => {
	return(
		<div className="app">
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);