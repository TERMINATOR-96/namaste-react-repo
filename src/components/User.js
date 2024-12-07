//example of functional component
import {useState, useEffect} from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    //destructuring props
    const {name, location, email} = props;

    //in order to make api calls in functional component we use useEffect hook
    useEffect(() => {
        //api calls
        //getUserInfo();
    }, [count, count2]); //[] is used for calling only once after initial render

    // async function getUserInfo() {
    //     //making api calls
    //     const data = await fetch("api link here");
    //     const json = data.json;
    //     console.log(json);
    // }

    //if we have to write a code such that count change then one api call and if count2 changes another api call
    // //if count changes
    // useEffect(() => {
    //     //first api call
    // }, [count]);
    // //if count2 changes
    // useEffect(() => {
    //     //second api call
    // }, [count2]);

    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count1 = {count}</h1>
            <button onClick={() => {
                //never update state variables directly
                setCount(count+1);
            }}>
                Count Increase
            </button>
            <br/>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {email}</h4>
        </div>
    );
};

export default User;