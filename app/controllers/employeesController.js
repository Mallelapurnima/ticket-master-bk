
const EmployeeSchema=require('../models/employees')
//list
module.exports.list=(req,res)=>{

    EmployeeSchema.find()
        .then((employees) => {
            res.json(employees)
        })
        .catch((err) => {
            res.send(err)
        })
}
//create
module.exports.create=(req,res)=>{

    const body = req.body
    const Employee = new EmployeeSchema(body)
    Employee.save()
        .then((employee) => {

            res.json(employee)
        })
        .catch((err) => {
            res.send(err)
        })
}
//show
module.exports.show=(req,res)=>{



    const id=req.params.id
    EmployeeSchema.findById(id)
    .then((employee)=>{
        if(employee){
        res.json(employee)
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.send(err)
    })
}
//destroy
module.exports.destroy=(req,res)=>{

    const id=req.params.id
    EmployeeSchema.findByIdAndDelete(id)
    .then((emp)=>{
        if(emp){
            res.json(emp)
        }
        else{
            res.send({})
        }
    })
    
    .catch((err)=>{
        res.send(err)
    })
}
//update
module.exports.update=(req,res)=>{

    const id=req.params.id
    const body=req.body
    EmployeeSchema.findByIDAndUpdate(id,body,{new:true})
    .then((emp)=>{
        if(emp){
            res.json(emp)
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })

}
