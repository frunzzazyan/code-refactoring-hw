const fs = require("fs")

function readPosts(req,res,next){
    fs.promises.readFile("db/posts.json", "utf-8")
    .then(data=>{
        res.locals.users = JSON.parse(data)
        next()
    })
}

module.exports = readPosts