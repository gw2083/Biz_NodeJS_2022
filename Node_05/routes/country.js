import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  const countrySelect = "SELECT * FROM country ORDER BY name";
  mysql.query(countrySelect, (err, result, fields) => {
    /**
     * 국가 = {code, name, ..}
     * result = [{국가},{국가},{국가}, ..]
     */
    //res.send(result);
    res.render("country", { countrys: result });
  });
});

// 주소창에 http://localhost:3000/country/list 입력하고 Enter 눌렀을 때 처리하는 URI
// 또는 메뉴에서 link 를 클릭했을 때 처리하는 URI
// 화면을 보여줌
router.get("/list", (req, res) => {
  res.render("country", { countrys: [] });
});

// 데이터를 처리함
router.post("/list", (req, res) => {
  // form 의 input 에 설정된 name(c_name) 변수값을 setter 하여 name 변수에 저장
  const name = req.body.c_name;
  console.log(name);
  const sql = "SELECT * FROM country WHERE name LIKE " + " CONCAT('%',?,'%')";
  mysql.execute(sql, [name], (err, countrys, fields) => {
    res.render("country", { countrys });
  });
});

router.get("/:name/get", (req, res) => {
  const name = req.params.name;
  const countrySelectName = "SELECT * FROM country WHERE name =? ORDER BY code";
  mysql.execute(countrySelectName, [name], (err, countrys, fields) => {
    res.render("country", { countrys });
  });
});

router.get("/:name/like", (req, res) => {
  const name = req.params.name;
  const countrySelectName =
    "SELECT * FROM country WHERE name LIKE CONCAT('%',?,'%') ORDER BY name";
  mysql.execute(countrySelectName, [name], (err, countrys, fields) => {
    res.render("country", { countrys });
  });
});

export default router;
