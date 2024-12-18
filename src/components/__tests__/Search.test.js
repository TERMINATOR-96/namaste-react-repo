import Body from "../Body";
import { act } from "react";
import "@testing-library/jest-dom";
import {fireEvent, render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json";

global.fetch = jest.fn(() => {
    return Promise.resolve({
       json : () => {
        return Promise.resolve(MOCK_DATA);
       } 
    });
});

//grouping body component integration testing test cases
describe("Grouping all the body component test cases.", () => {
    //beforeAll function gets executed before all the test cases
    beforeAll(() => {
        console.log("Before all.");
    });

    //beforeEach function gets executed before each test cases
    beforeEach(() => {
        console.log("Before each.");
    });

    //afterAll function gets executed after running all the test cases
    afterAll(() => {
        console.log("After all.");
    });

    //afterEach function gets executed after each test case
    afterEach(() => {
        console.log("After each.");
    });

    //test case 1
    test("Should search Res List for Burger input.", async () => {
        await act(async () => render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ));
        //checking the cards length before search
        const cardsBeforeSearch = screen.getAllByTestId("resCard");
        expect(cardsBeforeSearch.length).toBe(20);
        //checking the cards length after search
        const searchBtn = screen.getByRole("button", {name: "Search"});
        const searchInput = screen.getByTestId("searchInput");
        fireEvent.change(searchInput, { target : { value : burger }});
        fireEvent.click(searchBtn);
        //assertion - screen should load 4 cards
        const cards = screen.getAllByTestId(resCard);
        expect(cards.length).toBe(4);
    });

    //test case 2
    test("Should filter top rated restaurants.", async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Body/>
                </BrowserRouter>
            );
        });
        //checking the number of cards before filter
        const cardsBeforeFilter = screen.getAllByTestId("resCard");
        //assertion - number of cards before filter should be 20
        expect(cardsBeforeFilter.length).toBe(20);
        //checking the number of cards after filter
        const topRatedBtn = screen.getByRole("button", {name:"Top Rated Restaurants"});
        fireEvent.click(topRatedBtn);
        const cardsAfterFilter = screen.getAllByTestId("resCard");
        //assertion -number of cards after filter should be 13
        expect(cardsAfterFilter.length).toBe(13);
    });

    //test case 3

});