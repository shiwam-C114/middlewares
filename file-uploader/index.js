const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '././uploads')
    },
    filename: function (req, file, cb) {

        cb(null,file.originalname)
    }
})
var upload = multer({ storage: storage })

const app = express()
const port = 8080

app.post("/upload", upload.single('image'), (req, res) => {

    res.end("got file")
})


app.listen(port,()=>console.log(`listing on localhost:${port}`))
