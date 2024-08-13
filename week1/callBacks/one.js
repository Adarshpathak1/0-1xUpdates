function square(n) {
    return n * n;
}
function cube(n) {
    return n * n * n;
}

function sumOfSomething(a, b, cb) {
    let n1 = cb(a);
    let n2 = cb(b);
    return n1 + n2;
}

let ans = sumOfSomething(2, 3, square);
console.log(ans);