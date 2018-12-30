const express = require('express');
const hbs = require('hbs');
const app = express();

var port = process.env.PORT || 3000;
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname+"/views/partials")

app.get('/',function(req,res){
    res.render("index");
})

app.get('/daftar',function(req,res){
    res.render("daftar");
})

app.get('/fasilitas',function(req,res){
    res.render("fasilitas");
})

app.get('/kelas',function(req,res){
    res.render("kelas");
})

app.get('/projects',function(req,res){
    res.render("projects");
})

app.get('/lokasi',function(req,res){
    res.render("lokasi");
})

app.get('/404',function(req,res){
    res.render("404");
})

app.listen(port,function(){
    console.log("Server is starting at port "+port);
})