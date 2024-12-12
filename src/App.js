import React from "react";
import {useState, useEffect} from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.js";
import Error from "./components/Error.js";
import Header from "./components/Header.js";
import Contact from "./components/Contact.js";
import UserContext from "./utils/UserContext.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {
	//modifying react context data from root level
	const [userName, setUserName] = useState();
	//authentication
	useEffect(() => {
		//make an api call sending username and password for authentication
		const data = {
			name: "Rahul Pandey",
		};
		setUserName(data.name);
	}, []);
	
	return(
		<UserContext.Provider value={{loggedInUser: userName, setUserName}}>
			<div className="app">
				<Header />
				<Outlet />
			</div>
		</UserContext.Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children:[
			{
				path:"/",
				element: <Body />
			},
			{
				path: "/about",
				element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
			},
			{
				path: "/contact",
				element: <Contact />
			},
			{
				path: "/grocery",
				element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />
			}
		],
		errorElement: <Error />
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);