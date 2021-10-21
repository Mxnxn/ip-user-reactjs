import { ADDITEMTOCART } from "./CartAction";

const initial_state = {
    cart: [],
    user: {},
};

const CartReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADDITEMTOCART:
            state.cart = [...state.cart, action.state];
            return state;
        default:
            return state;
    }
};

export default CartReducer;
