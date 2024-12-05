import React from "react";
import User from "./User.js";
import UserClass from "./UserClass.js";

//using functional component
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is namaste react web series.</h2>
//             <User name={"Rahul Pandey (function)"} location={"Varanasi"} email={"rahulpandey1996vns@gmail.com"}/>
//             <UserClass name={"Rahul Pandey (class)"} location={"Varanasi"} email={"rahulpandey1996vns@gmail.com"}/>
//         </div>
//     );
// };

//using class-based component
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor.");
    }

    componentDidMount(){
        console.log("Parent component did mount.");
    }

    render() {
        console.log("Parent render.");
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is namaste react web series.</h2>
                <User name={"Rahul Pandey (function)"} location={"Varanasi"} email={"rahulpandey1996vns@gmail.com"}/>
                <UserClass name={"Rahul Pandey (class)"} location={"Varanasi"} email={"rahulpandey1996vns@gmail.com"}/>
            </div>
        );
    }
}

export default About;

/*
- Parent constructor
- Parent Render
    - First Constructor
    - First Render

    - Second Constructor
    - Second Render

    <DOM UPDATED - IN SINGLE BATCH>
    - First ComponentDidMount
    - Second ComponentDidMount
- Parent ComponentDidMount
*/