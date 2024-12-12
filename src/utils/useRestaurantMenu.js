import resList from "./mockData";
import {useState, useEffect} from "react";

//hook is a simple javascript function
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    //fetch data
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // const data = await fetch("");
        // const json = await data.json();
        setResInfo(resList[0]);
    }

    return resInfo;
};

export default useRestaurantMenu;