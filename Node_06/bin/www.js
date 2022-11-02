import http from "http";
import app from "./app.js";

const server = http.createServer(app);
const serverConfig = {
  host: "localhost",
  port: 3000,
};

server.listen(serverConfig);
