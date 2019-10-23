const DepartmentSchema=require('../models/departments')
//list
module.exports.list=(req,res)=>{

    DepartmentSchema.find()
        .then((departments) => {
            res.json(departments)
        })
        .catch((err) => {
            res.send(err)
        })
}
//create
module.exports.create=(req,res)=>{

    const body = req.body
    const Departments = new DepartmentSchema({name:body.name})
    Departments.save()
        .then((department) => {
            res.json(department)
        })
        .catch((err) => {
            res.send(err)
        })
}
//show
module.exports.show=(req,res)=>{

    const id=req.params.id
    DepartmentSchema.findById(id)
    .then((department)=>{
        if(department){
        res.json(department)
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
    DepartmentSchema.findByIdAndDelete(id)
    .then((dept)=>{
        if(dept){
            res.json(dept)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}
//update
module.exports.update=(req,res)=>{

    const id=req.params.id
    const body=req.body
    DepartmentSchema.findByIDAndUpdate(id,body,{new:true})
    .then((dep)=>{
        if(dep){
            res.json(dep)
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })

}


