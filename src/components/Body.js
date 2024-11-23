import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {
    //local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

	return (
		<div className="body">
			<div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        //write filter logic here
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        )
                        setListOfRestaurants(filteredList);
                    }}
                    >
                        Top Rated Restaurants
                </button>
            </div>
			<div className="res-container">
				{/* <RestaurantCard resData = {resList[0]} />
				<RestaurantCard resData = {resList[1]} /> */}
				{
					listOfRestaurants.map((restaurant) => (
						<RestaurantCard key={restaurant.data.id} resData={restaurant} />
					))
				}
			</div>
		</div>
	);
};

export default Body;