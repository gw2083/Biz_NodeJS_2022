import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  let st_name = req.query.st_name;
  let sql = "SELECT * FROM tbl_student ORDER BY st_num";
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
    res.render("student/st_main", { body: "list", students });
  });
});

router.get("/insert", (req, res) => {
  res.render("student/st_main", { body: "write" });
});

router.post("/insert", (req, res) => {
  const student = req.body;
  console.log(student);
  const sql =
    "INSERT INTO tbl_student(st_num, st_name, st_dept, st_grade, st_tel, st_addr) VALUES(?,?,?,?,?,?)";
  mysql.execute(sql, Object.values(student), (err, result, field) => {
    if (err) {
      console.error(err);
    }
    /**
     * POST /student/insert
     * 코드가 여기까지 실행되면 추가된 학생정보가 잘 추가되었는지 확인하기 위하여
     * 다시 학생정보 List 를 보여줘야 한다
     * 이미 학생정보 List 를 보여주는 router 를 만들어 두었다
     * 다시 여기에서 List 를 SELECT 하여 보여주는 코드를 작성하는 대신
     * server 의 router 에서 web browser 에게 요청한다
     * 이미 List 를 보여주는 router(requestmapping)가 있으니 다시 한번 요청 해달라
     */
    res.redirect(`/student?st_name=${student.st_name}`);
  });
});
export default router;
