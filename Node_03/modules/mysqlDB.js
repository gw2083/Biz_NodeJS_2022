import mysql from "mysql2";

// MySQL Server 에 연결 정보 설정
const mysqlConnConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "!Biz8080",
  database: "world",
};

// mysql db 연결하여 연결정보를 dbConnection 객체에 보관
const dbConnection = mysql.createConnection(mysqlConnConfig);
// 연결객체(dbconnection)를 사용하여 DB에 연결
dbConnection.connect(() => {
  console.log("MySQL Connect ok~~");
});

export default dbConnection;
