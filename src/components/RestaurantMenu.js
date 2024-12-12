import {useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => { 
    const {resId} = useParams();
    console.log("resId is:", resId); //prints resId
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    //commenting this one and moving the functioning to ../utils/useRestaurantMenu.js for optimizing our app
    // const [resInfo, setResInfo] = useState(null);
    // useEffect(() => {
    //     fetchMenu();
    // }, []); // Empty dependency array ensures this runs only once
    // const fetchMenu = () => {
    //     // Using mock data from utils folder
    //     setResInfo(resList[0]);
    // };

    // const categories = 
    //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    //         (c) => 
    //             c.card?.["card"]?.["@type"] === 
    //             "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //     );
    // console.log(categories);

    if (resInfo === null) return <Shimmer />;
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{resInfo.data.name}</h1>
            <p className="font-bold text-lg">
                {resInfo.data.cuisines.join(", ")} - ₹{resInfo.data.costForTwo / 100}
            </p>
            {/* <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul> */}
            {/* categories accordions */}
            {categories.map((category, index) => {
                //controlled component
                <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            })}
        </div>
    );
};

export default RestaurantMenu;