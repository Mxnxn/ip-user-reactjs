import { ApiCall } from "./Api";

export const GetProducts = async () => {
    try {
        return ApiCall("/product/getAll/8");
    } catch (error) {
        return error;
    }
};
