const express = require('express');
var morgan = require('morgan')
const port = 8083;
const app = express()
app.use(morgan(' Method::method \n Url::url \n Status::status \n Content-length::res[content-length] \n Time-taken::response-time ms \n HTTP-version::http-version \n Date::date \n'))

app.post('/', (req, res) => {
    res.end("--logger active--")
})
app.listen(port, () => console.log(`listing on localhost:${port}`))
