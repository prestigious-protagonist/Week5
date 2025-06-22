const express = require("express");
const apiV1Router = require("./routes/index");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
require("dotenv").config()

const startDB = () => {
     mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
}
const startServer = () => {
    const app = express();

    app.use(bodyParser.json())
    bodyParser.urlencoded({extended: true})
    
    startDB();

    app.use('/api', apiV1Router);

    app.listen(process.env.PORT, () => {
        console.log("Starting Server");
    })
}

startServer();
