const express=require('express')
const server=require('express')()
const db=require('./db')
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use('/',express.static(__dirname+'/public'));
server.post('/initial/add/person',function(req,res){
    db.add(req.body.name,req.body.age,req.body.city)
    .then(function(){
        res.send("DATA ADDED SUCCESSFULLY");
    })
    .catch(function(err){
        res.send(err);
    })
})
server.get('/initial',function(req,res){
    db.initial()
    .then(function(data){
        res.send(data);
    })
    .catch(function(err){
        //console.log("HERE");
        console.error(err);
    })
})
server.use('/initial/add',express.static(__dirname+'/public/addnew'))
server.listen(5678,function(){
    console.log("SERVER STARTED");
})