/**
 * Created by anshul on 14/7/17.
 */
var express=require('express');
var app=express();
var path=require('path');
var port=4000||process.env.port;
var sql=require('./sql.js');
var bp=require('body-parser');


app.use('/',express.static(path.join(__dirname,'subfiles')));

app.use(bp.urlencoded({ extended: true }));

app.use(bp.json());

app.get('/add',function(req,res){

    sql.add(req.query.toadd,function(data){
        res.send(data);
    });
})




app.listen(port,function(){
    console.log('Server is running at port number '+port);
})