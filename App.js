import React from "react";
import ReactDOM from "react-dom/client";

//React Element => Object => when we render this element onto DOM then it becomes => HTML Element
// const heading = React.createElement("h1", {id:"heading"}, "Namaste React");

const elem = <span>React Element</span>;

//React Element
const jsxHeading = (<h1 id="heading" className="head" tabIndex="1">
	Namaste React using JSX.</h1>); //give attributes to JSX using camelCase
const title = (
	<h1 className="head" tabIndex="5">
		{elem} <br/>
		Namaste React using JSX!
	</h1>
);

//React Component
//industry people use arrow functions
//React Functional Component - function that returns a jsx or react element is functional component in react.
const TitleComponent = () => (
	<h1 className="head" tabIndex="5">
		Namaste React using JSX!!
	</h1>
);
//using one component into another is called as component composition
const number = 10000;
const HeadingComponent = () => ( 
	<div id="container">
		{/* {title} */}
		{TitleComponent()}
		<TitleComponent/> 
		<TitleComponent></TitleComponent>
		<h2>{number}</h2>
		<h1 className="heading">Namaste react functional component.</h1>
	</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);