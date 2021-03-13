const express = require("express");
const Logger = require("./Logger");
const router = express.Router();
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

let port = process.env.PORT || 8000;
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

app.listen(port, (err) => {
    console.log("server started");
    Logger.info(JSON.stringify("server started"));
})