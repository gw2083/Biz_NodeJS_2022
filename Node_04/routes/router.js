import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("안녕하세요 반갑습니다");
});

router.get("/calc/:num1/:num2", (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  const sum = num1 + num2;
  res.send(num1 + "+" + num2 + "=" + sum);
});

export default router;
