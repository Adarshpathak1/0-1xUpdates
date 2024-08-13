const express = require("express");
const app = express();
app.use(express.json());

app.get("/health-checkup", function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username == "adarsh" && password == "password") {
        if (kidneyId == 1 || kidneyId == 2) {
            res.json({
                msg:"username and password are correct!"
            })
            
        }
        // else {
        //     res.json({
        //         msg:"bad input!"
        //     })
        // }
    }
    res.status(400).json({
        msg:"something down from site!"
    })
})

app.listen(3000)
console.log("Listening at port 3000")