let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let even = nums.filter((num) => {
   return num % 2 == 0
})
console.log(even);

console.log("Numbers will double!");
let DoubleNum = nums.map((num) => {
    return num * 2;
})
console.log(DoubleNum);