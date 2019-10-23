const mongoose=require('mongoose')
const Schema=mongoose.Schema
const employeeSchema = new Schema({
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
        

    },
    departmentId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'DepartmentSchema'
    }
})

const EmployeeSchema = mongoose.model('EmployeeSchema', employeeSchema)
module.exports=EmployeeSchema