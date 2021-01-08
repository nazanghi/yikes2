const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALT_ROUNDS = process.env.SALT_ROUNDS
const APP_SECRET = process.env.APP_SECRET
//need ot add these to the .env

const hashPassword = async (password) => {
    /**
     * @param {password}
     */
    try{
        const hashedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS))
        console.log('password hash hits')
        return hashedPassword
    }catch(error){
        console.log('password hash fails')
    }
}

const passwordValid = async (submittedPassword, storedPassword) => {
    /**
     * @param {submittedPassword}
     * @param {storedPassword}
     */
    let valid = await bcrypt.compare(submittedPassword, storedPassword)
    console.log('passwordValid hits')
    return valid
}

const readToken = (request, response, next) => {
    let token = request.headers.authorization.split(' ')[1]
    token ? (response.locals.token = token) : (response.locals.token = null)
    next()
}

const verifyJwt = (request, response, next) => {
    const { token } = response.locals
    let valid = jwt.verify(token, APP_SECRET)
    if (valid) {
        response.locals.token = valid
        return next()
    }
    response.status(401).send({message: `NOPE, wrong password dog'`, status: `Error`})
}

const createToken = (payload) => {
    let token = jwt.sign(payload, APP_SECRET)
    console.log('createToken hits')
    return token
}

module.exports = {
    hashPassword,
    readToken,
    verifyJwt,
    passwordValid,
    createToken
}