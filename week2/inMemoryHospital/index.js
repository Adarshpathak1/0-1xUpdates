const express = require("express");
const app = express();
const port = 3000;

var users = [{
    Name: "john",
    Kidneys: [{ healthy: 1 }, { unhealthy: 0 }]
}];

app.use(express.json());

app.get("/", function (req, res) {
    const johnKidney = users[0].Kidneys;
    const numberOfKidneys = users[0].Kidneys.length;
    let numberOfHealthyKindeys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (johnKidney[i].healthy) {
            numberOfHealthyKindeys = numberOfHealthyKindeys + 1;
        }
    }
    const numberOfUnHealthyKindeys = numberOfKidneys - numberOfHealthyKindeys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKindeys,
        numberOfUnHealthyKindeys

    })
});

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].Kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done!"
    })
})

app.put("/", function (req, res) {
    if (isThereAtleastOneUnhealthyKidney()) {
        for (let i = 0; i < users[0].Kidneys.length; i++) {
            users[0].Kidneys[i].healthy = true
        }
        res.json({
            msg: "changed!"
        })
    }
    else {
        res.status(402).json({
            msg:"You have no bad Kindeys!"
        })
    }
    
});

function isThereAtleastOneUnhealthyKidney() {
    let AtleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].Kidneys.length; i++) {
        if (!users[0].Kidneys[i].healthy) {
            AtleastOneUnhealthyKidney = true;
        }   
    }
    return AtleastOneUnhealthyKidney;
}

app.delete("/", function (req, res) {
    if (isThereAtleastOneUnhealthyKidney()) {
        let newKindeys = [];
        for (let i = 0; i < users[0].Kidneys.length; i++) {
            if (users[0].Kidneys[i].healthy) {
                newKindeys.push({
                    healthy: true
                })
            }
        }
        users[0].Kidneys = newKindeys;
        res.json({
            msg: "Deleted!"
        })
    } else {
        res.status(411).json({
            msg:"You have no bad Kindeys!"
        })
    }
})

app.listen(port);
console.log("app listening at port " + port);
