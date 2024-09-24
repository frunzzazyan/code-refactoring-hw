const express = require('express')
const router = express.Router()
const readPosts = require("../middleware/readPosts.js")
const checkBody = require("../middleware/checkBody.js")
const deletePost = require("../middleware/deletePost.js")
const bodyPushPosts = require("../middleware/bodyPushPosts.js")
const fs = require("fs")

router.get('/',readPosts, (req, res) => {
    res.status(200).json(res.locals.users)
})

router.post("/", [checkBody,readPosts,bodyPushPosts],(req,res)=>{
    fs.promises.writeFile("./db/posts.json", JSON.stringify(res.locals.users))
    res.send("ok")
})

router.delete("/:id",[readPosts,deletePost],(req,res)=>{
    fs.promises.writeFile("./db/posts.json", JSON.stringify(res.locals.users))
    res.send("ok")
})


module.exports = router