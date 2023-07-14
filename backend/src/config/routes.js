const express = require('express')
const auth = require('./auth')

module.exports = function(server){ 
    //rotas protegidaas por token JWT
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)
    const BillingCicle = require('../api/billingCycle/billingCycleService')
    BillingCicle.register(router, '/billingCycles')
    
    //rotas abertas
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}