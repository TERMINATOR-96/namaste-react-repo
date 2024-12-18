import ItemList from "./ItemList.js";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { clearCart } from "../utils/cartSlice.js";

//normal javascript function that returns some piece of JSX
const Cart = () => {
    //subscribing to or store so that we can get the cart items stored at global space called react context
    //important - make sure you are subscribing to the right portion of the store else it will be a big performance loss.
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);

    //dispatching an action on click of an "Clear Cart" button
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button 
                className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}
            >
                Clear Cart
            </button>
            {
                cartItems.length === 0 && (
                    <h1>Cart is empty!! <br/> Please add items to Cart.</h1>
                )
            }
            <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;