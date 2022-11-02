import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  const schoolSelect = "SELECT * FROM tbl_student ";
  mysql.query(schoolSelect, (err, result, fields) => {
    res.render("school", { students: result });
  });
});

router.post("/", (req, res) => {
  const name = req.body.s_name;
  const sql = "SELECT * FROM tbl_student WHERE st_name LIKE CONCAT('%',?,'%')";
  mysql.execute(sql, [name], (err, students, fields) => {
    res.render("school", { students });
  });
});

export default router;
