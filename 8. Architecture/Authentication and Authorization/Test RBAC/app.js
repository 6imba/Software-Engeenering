const express = require("express")
const createHTTPerror = require("http-errors")
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config()
const session = require('express-session')
const connectFlash = require('connect-flash')

// Initialization
const app = express()
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

// Init session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(connectFlash());

// Routes
app.use("/", require('./routes/index.route.js'));
app.use("/auth", require('./routes/auth.route.js'));
app.use("/user", require('./routes/user.route.js'));

app.use((req, res, next) => {
    next(createHTTPerror.NotFound());
})

app.use((error, req, res, next) => {
    error.status= error.status || 500;
    res.status(error.status);
    res.render('error_40x', {error})
})

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("📊 MongoDB connection established !")
    app.listen(PORT, () => console.log(`🚀 Run Express Application Server on PORT:${PORT}`))
    })
  .catch((error) => console.log(error.message))
