import Contact from "../Contact";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";

/*
Unit Testing
- Testing a component in Isolation.
*/

//grouping a particular page test cases as one using describe
describe("Contact us page test cases.", () => {
    //we can write "test" and "it", there is no difference. "it" is just an alias of "test"
    //testing if heading component is rendered
    test("Should load Contact Component", () => {
        //first I have to render Contact component to JSDom
        render(<Contact/>); 
        const heading = screen.getByRole("heading");
        // assertion
        expect(heading).toBeInTheDocument();
    });

    //testing if button component is rendered
    test("Should load button inside Contact component.", () => {
        //first I have to render Contact component to JSDom
        render(<Contact/>);
        const button = screen.getByRole("button"); //screen.getByText("button");
        //assertion
        expect(button).toBeInTheDocument();
    });

    //testing if Contact component should load input name
    test("Should load input name inside Contact component.", () => {
        //first I have to render Contact component to JSDom
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name");
        //assertion
        expect(inputName).toBeInTheDocument();
    });

    //should load two input boxes on the Contact component
    test("Should load two input boxes on the Contact component.", () => {
        //first I have to render Contact component on JSDom
        render(<Contact/>);
        //returns the JSX element/react element/react fiber node/virtual dom
        const inputBoxes = screen.getAllByRole("textbox"); //when there are multiple items then we have to use all
        console.log(inputBoxes);
        //assertion
        expect(inputBoxes.length).toBe(2);
    });
});

//Note-
//we can use multiple describe boxes for a test case
//we can even nest descibe boxes

