function validator(req, res, next) {
    console.log(req.body)
    if (!!req.body.id && !!req.body.name && !!req.body.rating && !!req.body.description && !!req.body.genre && !!req.body.cast) {
        next()
    }
    else {
        res.status(400).send("Sorry! bad request.")
    }
}

module.exports = validator