
function bodyPushUsers(req,res,next){
    if(res.locals.users && res.locals.user){
        let users = [...res.locals.users]
        let user = {
            userId: 4,
            id: Math.round(Math.random()*10000),
            title : res.locals.user.title,
            body : res.locals.user.body,
        }
        users.push(user)
        res.locals.users = users
        next()
    }
}

module.exports = bodyPushUsers