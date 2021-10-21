export const ADDITEMTOCART = "SAVE";

export const addItemToCart = (state) => {
    return { type: ADDITEMTOCART, state: state };
};