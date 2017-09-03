var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'reciepe'
});

con.connect();

var reciepe={
    name:'boost',
    sd:'mix boost with milk',
    ld:'for cold boost: mix the boost and keep it in the refrigerator'
};

var query=con.query('insert into list set ?',reciepe,function(err,result){
    if(err){
        console.error(err);
        return;
    }
    console.error(result);
});