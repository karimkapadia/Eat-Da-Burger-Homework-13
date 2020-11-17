// var burger = require("../models/burger");
var express = require("express");
const db = require("../config/connection");
const orm = require("../config/orm")
var router = express.Router();


router.get("/", async function(req, res) {
    const result =  await orm.selectAll();
    res.render("index", {burger:result});    
  });

  router.post("/api/burger", async function(req, res) {
    
    const result =await orm.insertOne(req.body.name);
    res.send({burger:result});    
  });

  router.put("/api/burger/:id", async function(req, res) {
    console.log(req.params.id)
    const id = req.params.id;
    const result =await orm.updateOne(id);
    res.send({burger:result});    
  });

module.exports = router;