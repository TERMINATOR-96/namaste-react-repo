import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    
    const {resId} = useParams();
    console.log("resId is:", resId); //prints resId

    useEffect(() => {
        fetchMenu();
    }, []); // Empty dependency array ensures this runs only once

    const fetchMenu = () => {
        // Using mock data from utils folder
        setResInfo(resList[0]);
    };

    if (resInfo === null) return <Shimmer />;

    return (
        <div className="menu">
            <h1>{resInfo.data.name}</h1>
            <p>
                {resInfo.data.cuisines.join(", ")} - ₹{resInfo.data.costForTwo / 100}
            </p>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;