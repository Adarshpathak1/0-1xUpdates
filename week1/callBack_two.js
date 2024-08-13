function add(a,b) {
    return a + b;
}
function sub(a,b) {
    return a - b;
}
function mul(a,b) {
    return a * b;
}
function div(a,b) {
    return a / b;
}
function ShowResult(a,b,cbFun) {
    console.log("The Result of a,b is: " + cbFun(a, b));
}
// console.log(add(5, 5));
// ShowResult(4, 5, mul);
setInterval(() => {
    console.log("Hello Alien");
    ShowResult(1,2,mul);
}, 3000);