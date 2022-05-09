
const mongoose = require("mongoose");

const listSchema = new mongoose.Schema( 
    {
        list_name : {
            type : String,
            required : true
        },

        list_desc : String,
      
        list_price : {
            type : Number,
            required : true
        } 
    } ,
    {timeStamps : true}
)

const FavouriteList =  new mongoose.model('favouritelist' , listSchema)

module.exports = FavouriteList


