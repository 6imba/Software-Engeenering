const express = require("express")
const cookieParser = require('cookie-parser')

const server = express()

server.use(cookieParser()) // middleware that make cookie easily readable with req.cookies in express.

server.get("/", (req, res) => {
    res.cookie('a', "123")
    console.log(req.cookies)
    res.send("Index Page")
})

server.listen(8007)



// ************************************************************************************************
// Here before we setted cookie:
    // res.cookie('name', 'Amir')
    // res.cookie('age', 22)

// And now we retrive cookie:
    // console.log(req.cookies) ==> { name: 'Amir', age: '22' }

// access cookie in server-side: req.cookies
// access cookie in client-side: document.cookie

// # Read the incooming cookie(passed along with http request from client-side) in sever-side