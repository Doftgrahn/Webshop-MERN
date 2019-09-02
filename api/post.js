const {MongoClient} = require("mongodb");

let {url, settings, dbname, dbcol} = require("./config");

module.exports = app => {
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
                    res.send({
                        success: true
                    });
                });
                client.close();
            }
        );
    });
};
