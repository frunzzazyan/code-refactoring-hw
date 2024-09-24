function patchPost(req,res,next){
    const {users} = res.locals
    const {id} = req.params
    const user = users.find(elem=>{
        return elem.id == id
    })
    if(user){
        const resultUser = {
            userId: user.userId,
            id: id,
            title: res.locals.user.title,
            body: res.locals.user.body
        }
        const resultUsers = users.filter(elem=>{
            return elem.id != resultUser.id
        })
        resultUsers.push(resultUser)
        res.locals.users = resultUsers

        next()
    }
}

module.exports = patchPost