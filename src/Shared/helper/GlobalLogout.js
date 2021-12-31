export const GlobalLogout = () => {
    localStorage.removeItem("_u");
    localStorage.removeItem("_t");
    localStorage.removeItem("_e");
};
