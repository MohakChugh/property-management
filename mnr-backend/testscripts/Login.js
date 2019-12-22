var unirest = require("unirest");

var req = unirest("POST", "http://localhost:8080/login");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "Content-Length": "66",
  "Accept-Encoding": "gzip, deflate",
  "Host": "localhost:8080",
  "Postman-Token": "a5f7c1ca-b852-4a54-81d9-926fceadfc9d,7347404d-af5c-4db2-83b3-79045dae3542",
  "Cache-Control": "no-cache",
  "Accept": "*/*",
  "User-Agent": "PostmanRuntime/7.20.1",
  "Content-Type": "application/json"
});

req.type("json");
req.send({
  "email": "mohak.chugh@outlook.com",
  "password": "newPassword"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
