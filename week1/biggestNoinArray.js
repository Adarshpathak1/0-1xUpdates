let Array = [2, 4, 6, 8, 10, 12, 12];
let biggestNo = Array[3];

for (let i = 0; i < Array.length; i++) {
    if (biggestNo < Array[i]) {
        biggestNo = Array[i];
        console.log(Array[i]);
    }
}
console.log("Biggest NO is "+biggestNo);