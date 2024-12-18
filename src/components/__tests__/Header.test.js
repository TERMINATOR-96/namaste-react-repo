import Header from "../Header";
import "@testing-library/jest-dom";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import {BrowserRouter} from "react-router-dom";
import {render, screen, fireEvent} from "@testing-library/react";

describe("Test cases for Header component.", () => {
    //test case 1
    test("Should render Header component with a login button.", () => {
        //we have to first render Header component to JSDom
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        //in case there are multiple buttons and you want to check if "Login" button is rendered or not
        // const loginButton = screen.getByRole("button", {name: "Login"});
        //another way
        // const loginButton = screen.getByText("Login");
        //most convenient way
        const loginButton = screen.getByRole("button");
        //assertion
        expect(loginButton).toBeInTheDocument();
    });

    //test case 2
    test("Should check if the cart item is rendered or not.", () => {
        //we have to first render Header component to JSDom
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const cartItems = screen.getByText("Cart - (0 items)");
        //assertion
        expect(cartItems).toBeInTheDocument();
    });

    //test case 3
    test("Should render Header component with a cart item.", () => {
        //we have to first render Header component to JSDom
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        //checking by regex
        const cartItems = screen.getByText(/Cart/);
        //assertion
        expect(cartItems).toBeInTheDocument();
    });

    //test case 4
    test("Should change Login button to Logout on click.", () => {
        //we have to first render Header component to JSDom
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        //searching the Login button
        const loginButton = screen.getByRole("button", {name: "Login"});
        //click the Login button
        fireEvent.click(loginButton);
        //searching the Logout button
        const logoutButton = screen.getByRole("button", {name: "Logout"});
        //assertion
        expect(logoutButton).toBeInTheDocument();
    });
});

