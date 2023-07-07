const express = require('express')

module.exports = function(server){
    //URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)
    // Rotas de ciclo de pagamento
    const BillingCicle = require('../api/billingCycle/billingCycleService')
    BillingCicle.register(router, '/billingCycles')
}