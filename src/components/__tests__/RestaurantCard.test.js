import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import {render, screen, fireEvent} from "@testing-library/react";

//grouping all the test cases for Restaurant Card component into one
describe("Test cases for Restaurant Card component.", () => {
    //test case 1
    test("Should render restaurant card component with props data.", () => {
        //first we have to render Restaurant Card component to JSDom
        render(<RestaurantCard resData={MOCK_DATA}/>);
        const name = screen.getByText("KFC");
        //assertion
        expect(name).toBeInTheDocument();
    });

    //test case 2
    //it should render RestaurantCard component with promoted label
    //Homework - test HOC : withPromotedLabel();
    
});