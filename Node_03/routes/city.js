/**
 * express import 하고
 * express.Router() 함수를 사용하여 router 객체 선언
 * router 객체를 export 하여 모듈 선언 완성
 *
 * http://localhost:3000/city 로 요청할 경우
 * "안녕하세요 도시 정보 입니다~~" 라고 화면에 나타나도록
 * app.js 에 설정
 */

import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

// http://localhost:3000/city/ 의 요청처리
router.get("/", (req, res) => {
  // res.send("안녕하세요 도시 정보 입니다~~");
  const citySelect = "SELECT * FROM city Limit 0, 10";
  /**
   * mysql 객체(퀵배달)을 통하여 MySQL Server 에게
   * SQL(SELECT)를 보내고, 결과가 되돌아 오는 동안
   * 다른 일(코드, 기능)을 수행하라
   * 만약 MySQL Server 에서 데이터가 완료되어 되돌아오거든
   * (error, result, fields)=>{} 함수를 실행하라
   * 이 함수를 비동기(Async) CallBack 함수라고 한다
   */
  mysql.query(citySelect, (error, result, fields) => {
    res.json(result);
  });
});

// 'localhost:3000/city/도시이름' 이라고 요청하면
router.get("/:name", (req, res) => {
  const ct_name = req.params.name;
  const citySelectWhere = "SELECT * FROM city WHERE name = ?";
  mysql.execute(citySelectWhere, [ct_name], (err, result, f) => {
    res.json(result);
  });
});

/**
 * localhose:3000/city/pop/10000/50000 이라고 요청을하면
 * 인구1만 이상 5만 이하의 도시를 웹으로 Response 하시오
 */
router.get("/pop/:min/:max", (req, res) => {
  const min = req.params.min;
  const max = req.params.max;
  const popSelectWhere = "SELECT * FROM city WHERE population BETWEEN ? AND ?";
  mysql.execute(popSelectWhere, [min, max], (err, result, f) => {
    res.json(result);
  });
});

// http://localhost:3000/city/country 의 요청처리
router.get("/country", (req, res) => {
  // res.send("나는 국가 정보 입니다");
  const countrySelect = "SELECT * FROM country Limit 0, 10";
  mysql.query(countrySelect, (err, data, fields) => {
    res.json(data);
  });
});
export default router;
