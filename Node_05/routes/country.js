import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  const countrySelect = "SELECT * FROM country ORDER BY name";
  mysql.query(countrySelect, (err, result, fields) => {
    res.send(result);
  });
});

router.get("/:name/get", (req, res) => {
  const name = req.params.name;
  const countrySelectName = "SELECT * FROM country WHERE name =? ORDER BY code";
  mysql.query(countrySelectName, [name], (err, result, fields) => {
    res.json(result);
  });
});

router.get("/:name/like", (req, res) => {
  const name = req.params.name;
  const countrySelectName =
    "SELECT * FROM country WHERE name LIKE CONCAT('%','?','%') ORDER BY name";
  mysql.query(countrySelectName, [name], (err, result, fields) => {
    res.json(result);
  });
});

export default router;
