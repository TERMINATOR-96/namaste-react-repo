import {useContext} from "react";
import {styleCard} from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
	const {resData} = props; 
	const {loggedInUser} = useContext(UserContext);
	console.log(loggedInUser);

	const {
		name, 
		cuisines, 
		avgRating, 
		costForTwo, 
		deliveryTime
	} = resData?.data;

	return(
		<div className="m-4 p-4 w-[250px] rounded-lg h-[360] bg-gray-200 hover:bg-gray-300">
			<img className="rounded-lg" alt="food-logo" src={resData.data.img} />
			<h3 className="font-bold py-4 text-lg">{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating} stars</h4>
			<h4>Rs {costForTwo / 100} for two</h4>
			<h4>{deliveryTime} minutes</h4>
			<h4>User : {loggedInUser}</h4>
		</div>
	);
};

//Higher Order Component
//input - RestaurantCard => RestaurantCardPromoted(promoted label on the top of the card)
export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
				<RestaurantCard {...props}/>
			</div>
		);
	};
};

export default RestaurantCard;