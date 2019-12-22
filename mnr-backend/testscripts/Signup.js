var unirest = require("unirest");

var req = unirest("POST", "http://localhost:8080/signup");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "Content-Length": "66",
  "Accept-Encoding": "gzip, deflate",
  "Host": "localhost:8080",
  "Postman-Token": "243a29d0-abb4-4958-afbc-56fc066f4b24,2069a024-3015-4d91-bd7c-86c96ef30ae7",
  "Cache-Control": "no-cache",
  "Accept": "*/*",
  "User-Agent": "PostmanRuntime/7.20.1",
  "Content-Type": "application/json"
});

req.type("json");
req.send({
  "email": "mohak.chugh@outlook.com",
  "password": "1234567890"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
