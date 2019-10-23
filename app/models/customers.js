const mongoose=require('mongoose')
const Schema=mongoose.Schema
const customerSchema = new Schema({
    name: {
        type: String,
        required: true
        
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
})
const CustomerSchema = mongoose.model('CustomerSchema', customerSchema)
module .exports = CustomerSchema
