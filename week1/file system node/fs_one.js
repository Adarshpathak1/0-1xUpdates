const fs = require("fs");
console.log("Hello Start karo!");
let file = fs.readFile("fs.txt", "utf-8",function (err,data) {
    console.log(data);
});
// console.log(file);