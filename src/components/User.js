//example of functional component
import {useState} from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    //destructuring props
    const {name, location, email} = props;
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {email}</h4>
        </div>
    );
};

export default User;