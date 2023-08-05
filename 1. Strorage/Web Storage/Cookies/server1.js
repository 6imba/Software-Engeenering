const express = require("express")
const server = express()

server.get("/", (req, res) => {
    const bio = {id:1, address: "Kapan", status: "student"}
    res.cookie('name', 'Amir')
    res.cookie('age', 22)
    res.cookie('bio1', JSON.stringify(bio))
    res.cookie('bio2', bio)
    res.send("Index Page")
})

server.listen(8008)

// The res. cookie() function is used to set the cookie name to value.
// The value parameter may be a string or object converted to JSON.
// Parameters: The name parameter holds the name of the cookie and the value parameter is the value assigned to the cookie name.
// res.cookie(name, value [, options])

// # set cookie once in client-side, and then browser will send it to server on each and every request, regardless of http request method.
// # set cookie in client-side using express.

