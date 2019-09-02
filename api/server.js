const express = require("express");
const app = express();

//MiddleWare
require("./middleware")(express, app);

//Get
require("./get")(app);

//Post
require("./post")(app);

//Delete
require("./delete")(app);

//update
require("./update")(app);

//Error handling
require("./errorhandling")(app);

const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`Listening on port ${port}`));
