function square(num) {
    return num * num;
}
function cube(num) {
    return num * num * num;
}
function sumOfSomething(num1,num2,fun) {
    let n1 = fun(num1);
    let n2 = fun(num2);
    return n1 + n2;
}

let sum = sumOfSomething(2, 2,cube);
console.log(sum);