const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "kf3k4aywsrp0d2is.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        database: "pbhid2ik7q7jd6i1",
        user: "jo49mr3kb0js79rh",
        port: 3306,
        password: "d6wqsbj0i357w7uj" //insert password
    });
}


module.exports = connection;