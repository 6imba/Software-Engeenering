const express = require("express")
const server = express()

const posts = [
    {
        username: "User 1",
        title: "Post 1"
    },
    {
        username: "User 2",
        title: "Post 2"
    }
]

server.get('/',(req, res) => {
    res.json(posts)
})

server.listen(8012);