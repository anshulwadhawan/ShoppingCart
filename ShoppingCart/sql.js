/**
 * Created by anshul on 14/7/17.
 */
var mysql=require('mysql');
var dbconfig={
    host:'localhost',
    user:'anshul',
    password:'anshul',
    database:'lecture16db'
}
var items=[];
items[0]=0;
items[1]=0;
items[2]=0;
items[3]=0;
function add(id,cb){
    var connection=mysql.createConnection(dbconfig);
    connection.connect();
    var index=parseInt(id.splice(4))-1;
    items[index]++;
    connection.query("insert into items values('"+id+"',"+items[index]+")",function(err,data){
        if(err)throw err;
        connection.query('select * from todos',function(err,data) {
            cb(data);
            connection.end();
        })
    })
}
module.exports={
    add
}
