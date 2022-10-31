/**
 * nodeJS 프로젝트 시작점(start point)
 * nodeJS 프로젝트에서 제일 먼저 시작되는 코드
 */

import http from "http";

/**
 * http 방식의 server 에 express framework 연결
 */
import express from "express";
const app = express();
const server = http.createServer(app);

server.listen(3000, "localhost", () => {
  console.log("start server");
});

app.get("/", (req, res) => {
  res.send("반갑습니다 나는 NodeJS Web App Server 입니다");
});
