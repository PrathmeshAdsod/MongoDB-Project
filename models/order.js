const mongoose = require('mongoose')

/************************************ Creating schema *************************************/
const myOrders  = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        desc : String,
        price : {
            type : Number,
            required : true
        },
        rating : Number
    },
    {timeStamps : true}
)


/*********************************CREATING MODELS*********************************/

const OrderList = new mongoose.model("Order" , myOrders)

module.exports =  OrderList
