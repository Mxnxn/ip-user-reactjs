import { ApiCall } from "./Api";

export const GetProducts = async () => {
    try {
        return ApiCall("/product/getAll/4");
    } catch (error) {
        return error;
    }
};

export const GetAllProducts = async () => {
    try {
        return ApiCall("/product/getAll");
    } catch (error) {
        return error;
    }
};

export const GetAProducts = async (id) => {
    try {
        return ApiCall(`/product/get/${id}`);
    } catch (error) {
        return error;
    }
};
