function deleteUser(req,res,next){
    const {users} = res.locals
    const {id} = req.params

    const user = users.find(elem=>{
        return elem.id == id
    })

    if(user){
        const filteredUsers = users.filter(elem=>{
            return elem.id != id
        })
        res.locals.users = filteredUsers
        next()
    }
    else{
            res.status(404).json({"msg" : "user not found"})
            next()
        }
}

module.exports = deleteUser