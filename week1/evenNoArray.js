let NumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 15];
let EvenArray = [];

for (let i = 0; i < NumbersArray.length; i++) {

    if (NumbersArray[i] % 2 == 0) {
        EvenArray.push(NumbersArray[i]);
        console.log(NumbersArray[i]);
    }
    
}
console.log("Even NO are " + EvenArray);