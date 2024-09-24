const express = require('express')
const router = express.Router()
const readPosts = require("../middleware/readPosts.js")
const checkBody = require("../middleware/checkBody.js")
const deletePost = require("../middleware/deletePost.js")
const bodyPushPosts = require("../middleware/bodyPushPosts.js")
const patchPost = require("../middleware/patchPost.js")
const fs = require("fs")

function copyCode(req,res){
    fs.promises.writeFile("./db/posts.json", JSON.stringify(res.locals.users))
    res.send("ok")    
}

router.get('/',readPosts, (req, res) => {
    res.status(200).json(res.locals.users)
})

router.post("/", [checkBody,readPosts,bodyPushPosts],(req,res)=>{
            copyCode(req,res)
})

router.delete("/:id",[readPosts,deletePost],(req,res)=>{
            copyCode(req,res)
})

router.patch("/:id", [checkBody,readPosts, patchPost], (req,res)=>{
            copyCode(req,res)
})

module.exports = router