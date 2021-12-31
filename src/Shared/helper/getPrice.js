function contains(x, y, sizes) {
    return sizes.findIndex((el) => el === Number(x) || el === Number(y)) === -1 ? false : true;
}

export const getPrice = (input1, input2, sizes) => {
    let bx = Number(input1) / 12;
    let by = Number(input2) / 12;
    for (let i = 0; i < sizes.length; i++) {
        // console.log("Length -> ", bx, "| Fix ->", fix[i], `| ${bx} < ${fix[i]} ->`, bx < fix[i], "| Difference -> ", fix[i] - bx, Math.abs(fix[i] - bx) <= 1);
        if (contains(bx, by, sizes)) break;
        if (bx < sizes[i] && Math.abs(sizes[i] - bx) <= 1) {
            bx = sizes[i];
            break;
        }
        if (by < sizes[i] && sizes[i] - by <= 1) {
            by = sizes[i];
            break;
        }
        if (Math.abs(sizes[i] - bx) <= 2 && Math.abs(sizes[i] - by) <= 2) {
            if (bx < by) by = 3;
            else bx = 3;
            break;
        }
    }
    console.log(bx, by);
    return Number(bx * by);
};
