module.exports = (express, app) => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
        next();
    });

    app.use(express.static(`${__dirname}/../client/build`));
    app.use(express.json());
};
