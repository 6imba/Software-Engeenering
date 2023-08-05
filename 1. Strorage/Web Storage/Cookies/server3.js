const express = require("express")
const cookieParser = require('cookie-parser')

const server = express()

// middleware that make cookie easily readable with req.cookies
server.use(cookieParser())

server.get("/", (req, res) => {
    res.cookie('town', 'ktm', { maxAge: 12000 })
    res.send("Cookie configuration for client side")
    console.log("Cookie configuration for client side")
})

server.listen(8009)


// document.cookie ==> In browser console ==> get all cookie key-value but after 12 sec cookie named town expires.
// { httpOnly: true } ==> doesnt allow cookie accessible from client side javascipt.
// { secure: true } ==> will use/send cookie only with https domain request.
// { maxAge: 12000 } ==> cookies expiry date in milisecond.


// # Configuration while setting cookie.
