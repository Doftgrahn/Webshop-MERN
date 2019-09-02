const url = require("./secret/secret");

const settings = {useNewUrlParser: true, useUnifiedTopology: true};

const dbname = "shop",
    dbcol = "coffe";

module.exports = {url, settings, dbname, dbcol};
