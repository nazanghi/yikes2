const {hashPassword, passwordValid, createToken} = require('../middleware')
//Need to make models
const {User} = require('../models')

const CreateUser = async (request, response) => {
    try{
        const {email, password } = request.body
        const passwordDigest = await hashPassword(password)
        const user = await User.create({email, passwordDigest})
        console.log('CreateUser hits')
        response.send(user)
    }catch(error) {
        console.log('CreateUser fails')
        throw error
    }
}

const SessionStatus = async (request, response) => {
    try {
        const { token } = response.locals
        const user = await User.findByPk(token._id, {
            attributes: ['id', 'email']
        })
    } catch (error){
        console.log('SessionStatus fails')
        throw error
    }
}
 
const GetUser = async (request, response) => {
    try {
        const user = await User.findByPk(request.params.user_id)
        console.log('GetUser hits')
        response.send(user)
    } catch (error){
        console.log('GetUser fails')
        throw error
    }
}
 
const LoginUser = async (request, response) => {
    try {
        const user = await User.findOne({
            where: {email: request.body.email},
            raw: true
        })
        console.log("User:", user)
        if (user && (await passwordValid(request.body.password, user.password))) {
            let payload = {
                id: user.id
            }
            let token = createToken(payload)
            return response.send({user, token})
        }
        return (response.status(401).send({message:`Wrong Password!`}))
    } catch (error){
        console.log('LoginUser: user.password')
        console.log('Login User fails')
        throw error
    }
}


module.exports = {
    CreateUser,
    GetUser,
    LoginUser,
    SessionStatus
}