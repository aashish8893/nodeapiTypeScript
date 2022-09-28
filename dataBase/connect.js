var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // con.query("CREATE DATABASE test", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    // });

    var sql = "INSERT INTO communication (name, status) VALUES ('Aashish Kumar', '25')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });


  });