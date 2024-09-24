const express = require('express')
const app = express()
const homeRouter = require("./routes/index.js")
const postsRouter = require("./routes/posts.js")

app.use(express.json())
app.use("/",homeRouter)
app.use("/posts",postsRouter)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
