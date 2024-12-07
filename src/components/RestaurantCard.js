import {styleCard} from "../utils/constants";

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
		<div className="m-4 p-4 w-[250px] rounded-lg h-[360] bg-gray-200 hover:bg-gray-300">
			<img className="rounded-lg" alt="food-logo" src={resData.data.img} />
			<h3 className="font-bold py-4 text-lg">{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating} stars</h4>
			<h4>Rs {costForTwo / 100} for two</h4>
			<h4>{deliveryTime} minutes</h4>
		</div>
	);
};

export default RestaurantCard;