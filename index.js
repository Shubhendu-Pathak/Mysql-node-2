const mysql=require('mysql');
const express=require('express')
const app=express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"contact "
})

db.connect((error)=>{
   if(err){ 
       console.warn('error');
    }else
    {console.warn('connected');}
});


app.get('',(req,res)=>{
    db.query("select * from applicants ",(err,result)=>{
        console.warn('result',result);
    })
})

app.listen(1337,()=>{
    console.log('Connected to 1337 success');
})