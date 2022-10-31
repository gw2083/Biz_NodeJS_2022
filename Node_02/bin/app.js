/**
 * express framework 와 관련된 코드를 별도 module 로 분리하기
 */

import express from "express"; // express framework 사용할 준비

// router modules import
// Node_02/routes 폴더에 있는 root.js 와 user.js 를 import 하여
// 각각 rootRouter, userRouter 객체(변수)로 선언
import rootRouter from "../routes/root.js";
import userRouter from "../routes/user.js";
const app = express(); // app 모듈 생성

/**
 * node + express Server에 오는 모든 요청(Request)을 일단 추진하는 함수
 * 여기에는 express server 를 사용하는데 필요한 여러가지 공통 부분을 설정을 할 수 있다
 * 이 함수는 함수가 끝나기 전에 반드시 next() 함수를 실행해 주어야 한다
 */
app.use("/", (req, res, next) => {
  // res.send("반갑습니다 나는 NodeJS Web App Server 입니다")
  console.log("Exppress Req Start");
  next();
});

// Request Routing 하기
// Request Mapping 하기

// http://localhost:3000/ 으로 요청이 들어오면 rootRouter(routes/root.js)에게 전달하기
app.use("/", rootRouter);
// http://localhost:3000/user 으로 요청이 들어오면 userRouter(routes/user.js)에게 전달하기
app.use("/user", userRouter);
export default app; // app.js 에서 생성한 module 을 다른 module 에서 import 하여 사용할 수 있도록 내보내기
