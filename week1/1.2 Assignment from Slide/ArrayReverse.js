function ArrayRev(arr) {
  let arrRev = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arrRev.push(arr[i]));
    }
    
    return arrRev;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Reverse Array: " + ArrayRev(arr));
