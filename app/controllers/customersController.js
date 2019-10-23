
const CustomerSchema=require('../models/customers')
//list
module.exports.list=(req,res)=>{
 
    CustomerSchema.find()
        .then((customer) => {
            res.json(customer)
        })
        .catch((err) => {
            res.send(err)
        })
}
//create
module.exports.create=(req,res)=>{
    
    const body = req.body
    const customer = new CustomerSchema({name:body.name,email:body.email,mobile:body.mobile})
    customer.save()
        .then((custo) => {
            res.json(custo)
        })
        .catch((err) => {
            res.send(err)
        })
}
//show
module.exports.show=(req,res)=>{

    const id=req.params.id
    CustomerSchema.findById(id)
    .then((custo)=>{
        if(custo){
        res.json(custo)
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
    CustomerSchema.findByIdAndDelete(id)
    .then((customer)=>{
        if(customer){
            res.json(customer)
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
    CustomerSchema.findByIDAndUpdate(id,body,{new:true})
    .then((custom)=>{
        if(custom){
            res.json(custom)
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })

}
