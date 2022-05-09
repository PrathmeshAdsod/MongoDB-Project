const express = require('express')
const router = express.Router()
const OrderList = require('../models/order')

// Create Document
    
router.post('/' , async (req,res) => {
    
    try {
        const createOrder = new OrderList(
            {   
                name : req.body.ordername,
                desc : req.body.orderdesc,
                price : req.body.orderprice,
                rating : req.body.orderrating
            }
        )
        const orderDoc = await createOrder.save()
        res.redirect('/')
    }catch(e) {
        console.log(e);
    }
}
)

router.get('/order' , async (req,res) => {
   try {
       // const result = await order.OrderList.find( {rating : 5} ).limit(1)
       // const result = await order.OrderList.find( {rating : { $lt : 3}} ).limit(2)
      // const result = await order.OrderList.find( {name : {$in : ['Patanjali Shampoo' , 'Coca Cola'] } } )
      const result = await OrderList.find( {name : {$nin : ['Bungalow' , 'Coca Cola'] } } )

       res.send(result)
   }catch(e) {
       console.log(e);
   }
})
router.get('/order/1' , async (req,res) => {
    try {
        //const result = await order.OrderList.find( { $or : [ {name : {$nin : ['Bungalow' , 'Coca Cola'] } , rating : {$lt : 5}  } ]} )
        const result = await OrderList.find( { $and : [ {name : {$nin : ['Bungalow' , 'Coca Cola'] } , rating : {$lt : 5}  } ]} )
        .sort({name : 1})
        res.send(result)
    }catch (e) {
        console.log(e);
    }
})

router.patch('/' , async (req,res) => {
    console.log('updating');
    try {
    
        //const result = await OrderList.updateMany( {name : "Bungalow"} , {name : req.body.updatename})
        const result = await OrderList.findOneAndUpdate( {name :"Alexa" } , {$set : {name : req.body.updatename}} , () => {
            res.redirect('/orders')
        })
    }catch(e) {
        console.log(e);
    }
})

module.exports = router;


