const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ticketSchema=new Schema({
    
    customerId:{
        type:Schema.Types.ObjectId,
        
        ref:'Customer'
    },
    departmentId:{
        type:Schema.Types.ObjectId,
        ref:'Department'
    },
    employeeId:{
        type:Schema.Types.ObjectId,
    
        ref:
        'Employee'
    },



title:{
    type:String,
    required:true
},
message:{
    type:String,
    required:true
},
isResolved:{
    type:Boolean,
    default:false

},
priority:{
    type:String,
    required:true
},

code:{
    type:String,
    required:true
},
isDeleted:{
    default:false
}
})
const Ticket=mongoose.model('Ticket',ticketSchema)
module.exports=Ticket


