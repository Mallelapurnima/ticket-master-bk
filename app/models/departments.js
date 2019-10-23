 const mongoose = require('mongoose')
  const Schema = mongoose.Schema
const departmentSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})
const DepartmentSchema = mongoose.model('DepartmentSchema', departmentSchema)
module.exports=DepartmentSchema
