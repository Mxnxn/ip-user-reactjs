export const classVerifier = (id) => {
    const obj = document.getElementById(id).classList;
    let temp = [...obj];
    if (temp.length > 0) {
        const idx = temp.findIndex((el) => el === "show");
        if (idx !== -1) {
            return false;
        } else {
            return true;
        }
    }
};
