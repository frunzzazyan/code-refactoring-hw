function checkBody(req,res,next){
    const body = req.body
    if("title" in body && "body" in body){
        res.locals.user = body
        next()
    }else{
        res.status(422).json({"msg" : "invalid data"})
    }
}

module.exports = checkBody