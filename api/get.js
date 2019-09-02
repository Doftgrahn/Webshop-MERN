const {MongoClient, ObjectId} = require("mongodb");

let {url, settings, dbname, dbcol} = require("./config");

module.exports = app => {
    app.get("/api", (req, res) => {
        res.send("This is my api, go futher down the line!");
    });

    // Auth

    app.get("/api/auth", (req, res) => {
        res.send("Auth");
    });

    //

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

                const sortIt = { name: 1 }

                collection.find({}).sort(sortIt).toArray((err, docs) => {
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
};
