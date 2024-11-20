// /*
// *<div id="parent">
// *   <div id="child">
// *       <h1>I am Rahul Pandey.</h1>
// *   </div>
// *</div>
//  ReactElement(Object) => HTML(Browser Understands)
// */

// const parent = React.createElement("div", {id:"parent"}, 
//     React.createElement("div", {id:"child"}, 
//         React.createElement("h1", {}, "I am Rahul Pandey.")
//     )
// );
// console.log(parent);

// const heading = React.createElement("h1", {
//     id:"heading"
// }, "Hello world from React!!");

{/* <div id="parent">
	<div id="child">
		<h1>I am h1 tag.</h1>
		<h2>I am h2 tag.</h2>
	</div>
	<div id="child2">
		<h1>I am h1 tag.</h1>
		<h2>I am h2 tag.</h2>
	</div>
</div> */}

const parent = React.createElement("div", {id:"parent"}, [
	React.createElement("div", {id: "child"}, [
		React.createElement("h1", {}, "I am h1 tag."),
		React.createElement("h2", {}, "I am h2 tag."),
	]),
	React.createElement("div", {id:"child2"}, [
		React.createElement("h1", {}, "I am h1 tag."),
		React.createElement("h2", {}, "I am h2 tag."),
	])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);