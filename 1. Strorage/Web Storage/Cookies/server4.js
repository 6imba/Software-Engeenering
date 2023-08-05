const express = require("express")
const cookieParser = require('cookie-parser')
const server = express()
server.use(cookieParser())

server.get("/", (req, res) => {
    res.cookie('user', 'Amir Shrestha')
    res.send(`
    <html>
        <form method="POST">
            <input type="text" name="amt" placeholder="Bank blc"/>
        </form>
    </html>
    `)
    console.log("Oe")
})

server.listen(8010)
