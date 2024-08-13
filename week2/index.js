const express = require("express");
const app = express();

function calculateSum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;        
    }
    return ans;
}
function sum(m, n) {
    return m + n;
}
app.get("/home", function (req, res) {
    res.send("I am home".toString());
})
app.get("/about", function (req, res) {
    res.send("I am About".toString());
})
app.get("/others", function (req, res) {
    res.send("I am others".toString());
})

app.get("/", function (req, res) {
    const m = req.query.m;
    const n = req.query.n;
    // const ans = calculateSum(n);
    const ans = sum(m, n);
    res.send(ans.toString());
})
app.listen(3000);
console.log("Port is listening to 3000");