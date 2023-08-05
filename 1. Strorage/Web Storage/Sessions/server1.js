const express = require('express')
const server = express()
var viewCount = 0;// file/module local variable

server.get('/', (req, res)=>{
    viewCount += 1;
    res.send('Index: ' + viewCount)
})

server.listen(8013)