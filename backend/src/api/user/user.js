const restful = require('node-restful')
const mongoose = restful.mongoose
const userSchema = new mongoose.Schema({
    name: {type: String, requerid:true},
    email: {type: String, requerid:true},
    password: {type: String,min: 6, max: 12, requerid:true}
})

module.exports = restful.model('User', userSchema)