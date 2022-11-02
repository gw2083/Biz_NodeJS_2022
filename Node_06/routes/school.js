import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  const schoolSelect = "SELECT * FROM tbl_student ";
  mysql.execute(schoolSelect, (err, result, fields) => {
    res.render("school", { students: result });
  });
});

export default router;
