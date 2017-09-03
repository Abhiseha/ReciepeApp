var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'reciepe'
});

con.connect();

con.query('select * from list',function(err,result){
    console.log(result);
});