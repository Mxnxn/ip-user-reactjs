import { ApiCall } from "./Api";

export const GetCategories = async () => {
    try {
        return ApiCall("/category/getAll/8");
    } catch (error) {
        return error;
    }
};

export const GetByCategory = async (id) => {
    try {
        return ApiCall(`/product/cat/${id}`);
    } catch (error) {
        return error;
    }
};
