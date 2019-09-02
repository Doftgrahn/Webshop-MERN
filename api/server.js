const express = require("express");
const app = express();
const {MongoClient, ObjectId} = require("mongodb");

let {url, settings} = require("./data");
const dbname = "shop",
    dbcol = "coffe";

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});

app.use(express.static(`${__dirname}/../client/build`));
app.use(express.json());

app.get("/api", (req, res) => {
    res.send("This is my api, go futher down the line!");
});

app.get("/api/coffe", (req, res) => {
    MongoClient.connect(
        url,
        settings,
        (error, client) => {
            if (error) {
                console.error("Somethine went wrong");
                throw error;
            }

            let collection = client.db(dbname).collection(dbcol);

            collection.find({}).toArray((err, docs) => {
                if (err) {
                    console.error("Could not convert to array");
                    throw err;
                }
                //console.log("found this stuff", docs);
                res.send(docs);
                client.close();
            });
        }
    );
});

app.get("/api/coffe/:id", (req, res) => {
    const params = req.params.id;

    MongoClient.connect(
        url,
        settings,
        (error, client) => {
            if (error) {
                console.error("FETCH SINGLECOFFE went wrong");
                throw error;
            }

            let collection = client.db(dbname).collection(dbcol);
            const query = {_id: ObjectId(params)};

            collection.find(query).toArray((err, docs) => {
                //console.log(docs);
                res.send(docs);
            });
        }
    );
});

app.post("/api/coffe", (req, res) => {
    MongoClient.connect(
        url,
        settings,
        (error, client) => {
            if (error) {
                console.error("Something went wrong");
                throw error;
            }

            const collection = client.db(dbname).collection(dbcol);

            const newData = [
                {
                    name: req.body.name,
                    size: req.body.size,
                    price: req.body.price,
                    info: req.body.info,
                    imgURL: req.body.imgURL
                }
            ];

            collection.insertMany(newData, (err, result) => {
                if (err) {
                    console.error("Could not post");
                    throw err;
                }

                client.close();
            });
        }
    );

    res.send({
        success: true
    });
});

app.delete("/api/coffe", (req, res) => {
    MongoClient.connect(
        url,
        settings,
        (error, client) => {
            let body = req.body._id;
            //console.log("THIS IS DELETE " + body);

            if (error) {
                console.error("Could not connect on DELETE");
                throw error;
            }
            let collection = client.db(dbname).collection(dbcol);

            let query = {_id: ObjectId(body)};

            collection.deleteOne(query, (err, result) => {
                if (err) {
                    console.error("Could not delete");
                    throw err;
                }
                console.log("1 Document Deleted");
                client.close();
            });

            res.json({
                _id: body,
                success: true
            });
        }
    );
});

app.put("/api/coffe", (req, res) => {
    const id = req.body._id;

    const newData = {
        name: req.body.name,
        size: req.body.size,
        price: req.body.price,
        info: req.body.info,
        imgURL: req.body.imgURL
    };

    let query = {_id: ObjectId(id)};
    let setDocument = {$set: newData};

    MongoClient.connect(
        url,
        settings,
        (error, client) => {
            if (error) {
                console.error("Could not connect to PUT");
                throw error;
            }
            let collection = client.db(dbname).collection(dbcol);

            collection.updateOne(query, setDocument, (err, result) => {
                if (err) {
                    console.error("Coult not update document");
                    throw err;
                }
                console.log("succeded UPDATE");
                client.close();
                res.json({
                    success: true
                });
            });
        }
    );
});

/*
app.get("/*", (req, res) => {
    res.sendFile(`${__dirname}/../build/index.html`, err => {
        if (err) {
            res.status(500).send(err);
        }
    });
});
*/

const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`Listening on port ${port}`));