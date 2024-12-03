import User from "./User.js";
import UserClass from "./UserClass.js";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is namaste react web series.</h2>
            <User name={"Rahul Pandey (function)"} location={"Varanasi"} email={"rahulpandey1996vns@gmail.com"}/>
            <UserClass name={"Rahul Pandey (class)"} location={"Varanasi"} email={"rahulpandey1996vns@gmail.com"}/>
        </div>
    );
};

export default About;