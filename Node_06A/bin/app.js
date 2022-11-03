import express from "express";
import path from "path";
import logger from "morgan";

// router import
import indexRouter from "../routes/index.js";

const app = express();

// app(express)서버에 middle ware 설정하기
// express 서버가 작동되는데 필요한 중간 도구들 : middle ware

app.use(logger("div"));

// form 에서 input 데이터를 담아 post로 전송할 때
// 데이터를 수신하고 req.body 객체로 변환하는 도구
// extended:false : nodejs 자체에서 기본으로 제공하는 도구 사용
// extended:true : express 내부에서 qs 라는 외부 도구를 사용
app.use(express.urlencoded({ extended: false }));

/**
 * path.jpin()이 바라보는 폴더
 * 현재 프로젝트는 node ./bin/www.js 를 실행한 상태이다
 * 이 때 이 명령을 실행한 곳이 프로젝트 폴더(Node_06A)
 *
 * path.join("views")라는 표현 = Node_06A/views 폴더를 찾아라
 */
app.set("views", path.join("views"));
app.set("view engine", "ejs");

// Node_06A/public 폴더
app.use(express.static(path.join("public")));
/**
 * router 설정 후 아래 코드 주석처리하여 실행되지 않도록 한다
 *
 * 변경
 * app.use() 함수의 callback 에서는 res(응답개체)와 관련된 코드를 사용하지 않는다
 * res 객체와 관련된 코드를 사용하면 이후의 모든 router 관련 코드가 실행되지 않는다
 * app.use() 함수의 callback 에서는 메시지 출력이 필요할 경우 console 을 통해 출력하고, 코드 끝부분에 반드시 next() 함수 실행해야 함
 *
 * 이렇게 코드를 변경해야 router 관련 코드가 정상으로 작동된다
 *
 */
app.use("/", (req, res, next) => {
  // res.send("Welcome Express Server");

  console.log("express start");
  next();
});

app.use("/", indexRouter);

export default app;
