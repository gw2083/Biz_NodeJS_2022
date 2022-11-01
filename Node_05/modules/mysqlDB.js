import mysql from "mysql2";

const mysqlConn = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "!Biz8080",
  database: "world",
};

const db = mysql.createConnection(mysqlConn);
db.connect(() => {
  console.log("mysql");
});

export default db;
