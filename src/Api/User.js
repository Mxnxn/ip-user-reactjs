import { ApiCall } from "./Api";

export const RegisterUser = async (formdata) => {
    try {
        return ApiCall("/user/register", { headers: { "Content-Type": "application/json" } }, formdata);
    } catch (error) {
        return error;
    }
};

export const LoginUser = async (formdata) => {
    try {
        return ApiCall("/user/login", { headers: { "Content-Type": "application/json" } }, formdata);
    } catch (error) {
        return error;
    }
};

export const GetUserWallet = async (formdata) => {
    try {
        return ApiCall(
            `/user/${localStorage.getItem("_u")}`,
            { headers: { "Content-Type": "application/json", "SESSION-TOKEN": localStorage.getItem("_t") } },
            formdata
        );
    } catch (error) {
        return error;
    }
};

export const AddToWalletRequest = async (formdata) => {
    try {
        return ApiCall(`/user/wallet/add`, { headers: { "Content-Type": "application/json", "SESSION-TOKEN": localStorage.getItem("_t") } }, formdata);
    } catch (error) {
        return error;
    }
};
