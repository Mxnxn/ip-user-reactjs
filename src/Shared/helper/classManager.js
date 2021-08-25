export const classManager = (id, toAdd) => {
    const obj = document.getElementById(id).classList;
    let temp = [...obj];
    if (temp.length > 0) {
        const idx = temp.findIndex((el) => el === toAdd);
        if (idx !== -1) {
            return obj.remove(toAdd);
        } else {
            return obj.add(toAdd);
        }
    }
};
