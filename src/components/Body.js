import resList from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //local state variable - super powerful variable
    const [searchText, setSearchText] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    //whenever the state variable update, react triggers a reconciliation cycle(re-renders the component)
    console.log("Body rendered.");

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        setListOfRestaurants(resList);
        setFilteredRestaurants(resList);
    }

    //online status logic
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        console.log("Your device is offline!!");
        return (
            <h1>
                Looks like you are offline!! Please check your internet connection.
            </h1>
        );
    }

    if(listOfRestaurants.length === 0)
        return <Shimmer />;
	return (
		<div className="body">
			<div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick = {() => {
                        //Filter the restaurants card and update the UI
                        //searchText  
                        console.log(searchText);
                        const filteredRestaurants = listOfRestaurants.filter((res) => 
                            res.data.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>

                <button 
                    className="filter-btn"
                    onClick={() => {
                        //write filter logic here
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                    >
                        Top Rated Restaurants
                </button>
            </div>

			<div className="res-container">
            {
                filteredRestaurants.map((restaurant) => (
                    <Link to="/restaurants/{123}">
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    </Link>
                ))
            }
			</div>
		</div>
	);
};

export default Body;