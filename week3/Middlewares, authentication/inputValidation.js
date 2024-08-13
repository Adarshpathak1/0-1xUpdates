const express = require("express");
const { copyFileSync } = require("fs");
const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send('you have ' + kidneyLength + 'healthy kidneys!');
})
app.listen(3000);   