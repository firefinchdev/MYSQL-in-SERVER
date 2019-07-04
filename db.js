const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:'localhost',
    database:'newdb',
    user:'newuser',
    password:'DONE',
})
function initial(){
    return new Promise(function(resolve,reject){
        connection.query(
            `SELECT * FROM persons;`,
            function(err,rows,cols){
                if(err)
                {reject(err);}
                else{
                    resolve(rows);
                }
            }
        )
    })
}
function add(name,age,city){
    return new Promise(function(resolve,reject){
        connection.query(
            `INSERT INTO persons (name,age,city) VALUES(?,?,?)`,
            [name,age,city],
            function(err,result){
                if(err)
                {reject(err);}
                else{
                    resolve();
                }
            }
        )
    })
}
module.exports={
    initial,
    add
}