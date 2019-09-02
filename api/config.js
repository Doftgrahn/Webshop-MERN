const url =
    "mongodb+srv://doftgrahn:1234@shop-iwgny.mongodb.net/test?retryWrites=true&w=majority";

const settings = {useNewUrlParser: true, useUnifiedTopology: true};

const dbname = "shop",
    dbcol = "coffe";

module.exports = {url, settings, dbname, dbcol};
