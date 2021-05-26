// 整数反转

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let str = x.toString();
    let arr = str.split("");
    let strX = arr.reverse().join("")
    return Number(strX);
};

console.log(reverse(549786))