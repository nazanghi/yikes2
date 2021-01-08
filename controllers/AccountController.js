const {Account} = require('../models')
const account = require('../models/account')

const CreateAccount = async (request, response) => {
    try {
        let accountDetails = {
            ...request.body
        }
        let newAccount = await Account.create(accountDetails)
        response.send(newAccount)
        console.log('CreateAccount hits')
    } catch (error) {
        console.log('CreateAccount fails')
        throw error
    }
}
 
const GetOneAccount = async (request, response) => {
    try {
        const accountDetails = await Account.findByPk(request.params.accountId)
        response.send(accountDetails)
        console.log('GetOneAccount hits. Account: ', accountDetails)
    } catch (error) {
        console.log('GetOneAccount fails')
        throw error
    }
}
 
const GetAllAccounts = async (request, response) => {
    try {
        const allAccounts = await Account.findAll()
        response.send(allAccounts)
        console.log('GetAllAccounts hits')
    } catch (error) {
        console.log('GetAllAccounts fails')
        throw error
    }
}
 
const GetAccountByUserId = async (request, response) => {
    try {
        const accountDetails = await Account.findAll({
            where: {user_id: request.body.user_id}
        })
        response.send(accountDetails[0])
        console.log('GetOneAccountByUserId hits')
    } catch (error) {
        console.log('GetOneAccountByUserId fails')
        throw error
    }
}

const EditAccount = async (request, response) => {
    try{
        let accountId = parseInt(request.params.accountId)
        let accountDetails = request.body
        let editedAccount = await Account.update(accountDetails, {
            where: {id: accountId}
        })
        console.log('EditAccount hits, accountDetails: ', accountDetails)
        response.send(editedAccount)
    }catch (error) {
        console.log('EditAccount fails, accountDetails: ', accountDetails)
        throw error
    }
}


module.exports = {
    CreateAccount,
    GetOneAccount,
    GetAllAccounts,
    GetAccountByUserId,
    EditAccount
}