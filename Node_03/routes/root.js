/**
 * express router 모듈 선언
 */
import express from "express";

//express 모듈의 router() 함수를 호출하여 router 모듈 생성
const router = express.Router();

router.get("/", (req, res) => {
  res.send("나는 Root Raouter");
});
export default router;
