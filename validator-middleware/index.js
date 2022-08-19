const express = require('express');
const validator = require('./validator');

const app = express()
const port = 8081
app.use(express.json())
app.use(validator)

app.post("/", (req, res) => {
    res.end(`--posted--`)
    
})



app.listen(port,()=>console.log(`listing on localhost:${port}`))
