const express = require("express");
const app = express();
//const {MongoClient} = require("mongodb");

let {data} = require("./data");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});

app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

app.get("/api", (req, res) => {
    res.send("This is my api, go futher down the line!");
});

app.get("/api/coffe", (req, res) => {
    res.send(data);
});

app.get("/api/coffe/:id", (req, res) => {
    const findParam = data.find(e => e.id === parseInt(req.params.id));
    res.send(findParam);
});

app.post("/api/coffe", (req, res) => {
    const fakeId = data.length + 1;
    data.push({
        id: fakeId,
        name: req.body.name,
        size: req.body.size,
        price: req.body.price,
        imgURL: req.body.imgURL
    });
    res.send({
        fakeId,
        success: true
    });
});

app.delete("/api/coffe", (req, res) => {
    let body = req.body.id;
    let response = data.filter(e => e.id !== body);
    data = response;
    res.json({
        response,
        success: true
    });
});

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`Listening on port ${port}`));
