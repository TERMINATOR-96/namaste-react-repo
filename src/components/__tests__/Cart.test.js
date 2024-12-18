import { act } from "react";
import Cart from "../Cart.js";
import Header from "../Header.js";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js";
import {BrowserRouter} from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu.js";
import {MOCK_DATA_NAME} from "../mocks/resCardMock.json";
import {screen, render, fireEvent} from "@testing-library/react";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA_NAME);
        }
    });
});

//grouping all the test cases related to particular function using describe
describe("Cart component test cases.", () => {
    //test case 1
    test("Should render restaurant menu component.", async () => {
        await act(async () => 
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </BrowserRouter>
            </Provider>
        ));
        const accordionHeader = screen.getByTestId("Biryani (5)");
        fireEvent.click(accordionHeader);
        const foodItems = screen.getAllByTestId("foodItems");
        //assertion - expecting number of food items to be 5
        expect(foodItems.length).toBe(5);
        //clicking on add button
        const addBtns = screen.getAllByRole("button", {name : "Add +"});
        // console.log(addBtns.length);
        fireEvent.click(addBtns[0]);
        const cartItems = screen.getByText("Cart - (1 items)");
        expect(cartItems).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
        expect(screen.getAllByTestId("foodItems").length).toBe(5);
        expect(screen.getByText("Cart is empty!!")).toBeInTheDocument();
    });
});
