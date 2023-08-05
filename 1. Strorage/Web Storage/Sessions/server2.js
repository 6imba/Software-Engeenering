const express = require('express');
const server = express();
const session = require('express-session')

server.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
}))

server.get('/', (req, res)=>{
    req.session.viewCount += 1;// access session-variable(variable in session object) on request object
    res.send('Index: ' + req.session.viewCount)
})

server.listen(8014)