const {MongoClient, ObjectId} = require("mongodb");
let {url, settings, dbname, dbcol} = require("./config");

module.exports = app => {
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
};
