const express = require('express');
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    passsword:'password',
    database:'CRUDDatabase',
});



app.get('/', (req, res)=> {

    //const sqlInsert= "INSERT INTO movie_reviews (movie name, movie reviews) VALUES ('inception', 'goodmovie');"
    //db.query(sqlInsert, (err, result)=>{
       // res.send("Hello cheruiyot");
   // })
    
});
app.listen(30001, () =>{
    console.log("running on port 30001");
});


