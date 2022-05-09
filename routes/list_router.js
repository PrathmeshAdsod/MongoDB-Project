const express = require("express");
const router = new express.Router()
const FavouriteList = require('../models/list')


router.post('/' , async (req,res) => {

      try {
          const createList = new FavouriteList(
              {
                  /* Note - feild names must be same as defined in Schema */
                  list_name : req.body.listname,
                  list_desc : req.body.listdesc,
                  list_price : req.body.listprice
              }
          )
          const result = await createList.save()
          console.log(result);
          res.redirect('/')
      }
      catch(e) {
          console.log(e);
      }
})

router.get('/list' , async (req,res) => {
    const result = await FavouriteList.find()
    res.send(result[2].list_name)
})


module.exports = router
