//#region 哈希解法
// 优点：时间复杂度低
// 缺点：空间换时间
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numMap = new Map();

    numMap.set(nums[0], 0);
    for (let i = 1; i < nums.length; i++) {
        const subNum = target - nums[i];
        if (numMap.get(subNum) != 0 && !numMap.get(subNum)) {
            numMap.set(subNum, i);
        } else {
            return [numMap.get(subNum), i]
        }
    }
};

var testArr = [ 0, 1, 2, 3, 4, 5, 6, 7];
console.log(twoSum(testArr, 3))
//#endregion

//#region 

//#endregion