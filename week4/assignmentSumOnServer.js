const express = require("express")
const cors = require("cors")

const app = express()
const port = 3000

app.use(cors())
app.get("/sum", function (req,res) {
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)
    let sum = n1 + n2
    res.send(sum.toString());
})

app.listen(port)
console.log("listening at 3000 port")
