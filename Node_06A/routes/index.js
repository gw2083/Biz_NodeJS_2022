import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  let st_name = req.query.st_name;
  let sql = "SELECT * FROM tbl_student ORDER BY st_num LIMIT 0,10";
  if (st_name) {
    sql = ` SELECT * FROM tbl_student 
       WHERE st_name LIKE CONCAT('%',?,'%') 
       ORDER BY st_num `;
  } else {
    st_name = "";
  }
  mysql.execute(sql, [st_name], (err, students, field) => {
    console.log(err);

    // res.json(students);
    // 내부(mysql 에서 select 된 데이터)에서 만들어진 데이터를 students 라는 이름의 변수에 저장하여 render 로 보낸다
    // res.render("student",{students:studenst})
    res.render("index", { students });
  });
});

export default router;
