const uri = require("./secret/secret");

const url = {uri};

const settings = {useNewUrlParser: true, useUnifiedTopology: true};

const dbname = "shop",
    dbcol = "coffe";

module.exports = {url, settings, dbname, dbcol};
