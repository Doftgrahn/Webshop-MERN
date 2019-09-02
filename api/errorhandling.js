const path = require("path");

module.exports = app => {
    app.use((req, res, next) => {
        res.sendFile(path.join(__dirname, "../public", "404.html"));
    });

    app.use((err, req, res, next) => {
        res.sendFile(path.join(__dirname, "../public", "500.html"));
    });
};
