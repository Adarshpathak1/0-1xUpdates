let PersonArray = [
    {
        fname: "Adarsh",
        gender: "male"
    },
    {
        fname: "Aditi",
        gender: "female"
    }
];

for (let i = 0; i < PersonArray.length; i++) {
    console.log("Person " + (i+1));
    console.log(PersonArray[i]["fname"]);
    console.log(PersonArray[i]["gender"]);
}