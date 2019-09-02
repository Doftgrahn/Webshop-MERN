const {MongoClient, ObjectId} = require("mongodb");
let {url, settings, dbname, dbcol} = require("./config");

module.exports = app => {
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
};
