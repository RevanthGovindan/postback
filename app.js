const express = require("express");
const Logger = require("./Logger");
const router = express.Router();
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));


// parse application/json
app.use(bodyParser.json())

router.get("/", (req, res) => {
    res.send("Works");
});

router.post("/postback", (req, res) => {
    console.log("body ", req.body);
    Logger.info(JSON.stringify(req.body));
    res.send({});
});

app.use("/", router);

app.listen(8000, (err) => {
    console.log("server started");
    Logger.info(JSON.stringify("server started"));
})