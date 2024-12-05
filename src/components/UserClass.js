//example of the class-based component
import React from "react";
import {useState} from "react";

class UserClass extends React.Component
{
    constructor(props) {
        super(props);
        console.log(props);
        //creating a state variable inside a class-based component
        this.state = {
            count:0,
            count2:2,
            userInfo:{
                name:"Dummy",
                location: "default location",
                email: "dummy email"
            }
        };
        console.log("Child constructor.");
    }

    //in case of class-based component componentDidMount is used to make api calls
    async componentDidMount(){
        console.log("Child component did mount.");
        //api call
        const data = await fetch("https://api.github.com/users/terminator-96");
        const json = await data.json();
        console.log(json);
        //updating the state variable
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2){
            //write your code here
        }
        console.log("Component did update."); //component did update method is called after every update
    }

    //component will unmount will be called when we move to the next page and leave the current page
    componentWillUnmount(){
        console.log("Component will unmount.");
    }

    render() {
        console.log("Child render.");
        // const {name, location, email} = this.props;
        //destructuring name, location and email
        const {name, location, email, avatar_url} = this.state.userInfo;
        const {count, count2} = this.state;
        return (
            <div className="user-card">
                <h1>Count = {this.state.count}</h1>
                <button onClick={() => {
                    //never update the state variables directly
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1
                    });
                }}>
                    Count Increase
                </button>
                <h1>Count = {count2}</h1>
                {/* <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact: {this.props.email}</h4> */}
                <img src="https://avatars.githubusercontent.com/u/36603319?v=4" alt="my_avatar"></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {email !== null ? email : "rahulpandey1996vns@gmail.com"}</h4>
            </div>
        );
    }
}

export default UserClass;

/*
----Mounting----
Constructor (dummy)
Render (dummy)
    <HTML dummy>
Component Did Mount
    <API call>
    <this.setState> -> state variable is updated
Component Did Update
    render(API data)
    <HTML> new api data
    componentDidUpdate
*/