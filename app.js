const express = require('express')
const mongoose =  require('mongoose')
const order_router = require('./routes/order_router')
const list_router = require('./routes/list_router')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/' , order_router)
app.use('/' , list_router)



mongoose.connect('mongodb://localhost:27017/e-commerce' , {useNewUrlParser : true , useUnifiedTopology : true} )
.then( () => {
    console.log('Successfull Connection ...')
} )
.catch( (e) => console.log(e) )

app.get('/' , (req,res) => {
    res.sendFile('C:/Users/Ovi/Desktop/MongodbProject/index.html')
})



app.listen(3000)


