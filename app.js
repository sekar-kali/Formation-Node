const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fs = require("fs");
const port = 3001;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const indexRouter = require('./routes/index');
app.use(express.static(__dirname + '/public'));
app.use('/', indexRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).render('error', { message: 'Something went wrong!' });
});

app.use((req, res) => {
    res.status(404).render('error', { message: 'Page not found' });
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });

module.exports = app;