import { ApiCall } from "./Api";

export const GetCategories = async () => {
    try {
        return ApiCall("/category/getAll/8");
    } catch (error) {
        return error;
    }
};
