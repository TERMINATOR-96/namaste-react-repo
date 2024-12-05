import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => { 
    const {resId} = useParams();
    console.log("resId is:", resId); //prints resId

    const resInfo = useRestaurantMenu(resId);

    //commenting this one and moving the functioning to ../utils/useRestaurantMenu.js for optimizing our app
    // const [resInfo, setResInfo] = useState(null);
    // useEffect(() => {
    //     fetchMenu();
    // }, []); // Empty dependency array ensures this runs only once
    // const fetchMenu = () => {
    //     // Using mock data from utils folder
    //     setResInfo(resList[0]);
    // };

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