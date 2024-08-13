const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
    console.log("Inside KiratReadFile");
    return new Promise(function (resolve) {
        console.log("Inside promise");
    fs.readFile("a.txt", "utf-8", function(err, data) {
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
    console.log("Inside OnDone!");
  console.log(data)
}

kiratsReadFile().then(onDone);