const express = require("express");
const users = require("./static");
const getData=require('../database/queries/getData');
const postData = require("../database/queries/postData");
const router = express.Router();

router.get("/users", (req, res) => {
  // res.json(users);
  getData()
  .then(data=> res.json(data.rows))
  .catch(error=>res.status(500).json({msg:'Internal server error' }) )
});
router.post('/create-user',(req,res)=>{
  postData(req.body.name,req.body.location)
  .then (res=>res.redirect('/'))
 .catch(error=>res.status(500).json({msg:'Internal server error' }) )
})
module.exports = router;
