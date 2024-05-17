const mysql=require('mysql');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"test",
    // port:'8080'
});
con.connect((err)=>{
    if(err){
        console.log('err')
    }
    else{
        console.warn("conected");
    }
});

con.query("select * from user",(err,result)=>{
    console.warn(result);
});