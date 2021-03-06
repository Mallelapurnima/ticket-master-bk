const express=require('express')
const router=express.Router()
const customersController=require('../app/controllers/customersController')
const departmentsController=require('../app/controllers/departmentsControllers')
const employeesController=require('../app/controllers/employeesController')
const ticketController=require('../app/controllers/ticketController')
router.get('/customers',customersController.list)
router.get('/customers/:id',customersController.show)
router.post('/customers',customersController.create)
router.delete('/customers/:id',customersController.destroy)
router.put('/customers/:id',customersController.update)
router.get('/departments',departmentsController.list)
router.get('/departments/:id',departmentsController.show)
router.post('/departments',departmentsController.create)
router.delete('/departments/:id',departmentsController.destroy)
router.put('/departments/:id',departmentsController.update)
router.get('/employees',employeesController.list)
router.get('/employees/:id',employeesController.show)
router.post('/employees',employeesController.create)
router.delete('/employees/:id',employeesController.destroy)
router.put('/employees/:id',employeesController.update)
router.get('/tickets',ticketController.list)
router.get('/tickets/:id',ticketController.show)
router.post('/tickets',ticketController.create)
router.put('/tickets/:id',ticketController.update)
router.delete('/tickets/soft_delete/:id',ticketController.update)
router.delete('/tickets/:id',ticketController.destroy)
module.exports=router
