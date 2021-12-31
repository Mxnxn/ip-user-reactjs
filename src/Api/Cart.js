import { ApiCall } from "./Api";

export const AddItemToCart = async (formdata) => {
    try {
        return ApiCall("/user/cart/add", { headers: { "Content-Type": "application/json", "SESSION-TOKEN": localStorage.getItem("_t") } }, formdata);
    } catch (error) {
        return error;
    }
};
export const GetUserCart = async () => {
    try {
        return ApiCall(`/user/cart/${localStorage.getItem("_u")}`, {
            headers: { "Content-Type": "application/json", "SESSION-TOKEN": localStorage.getItem("_t") },
        });
    } catch (error) {
        return error;
    }
};
export const RemoveItemsFromCart = async (formdata) => {
    try {
        return ApiCall(`/user/cart/remove`, { headers: { "Content-Type": "application/json", "SESSION-TOKEN": localStorage.getItem("_t") } }, formdata);
    } catch (error) {
        return error;
    }
};
