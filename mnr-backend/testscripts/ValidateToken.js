var unirest = require("unirest");

var req = unirest("POST", "http://localhost:8080/validatetoken");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "Content-Length": "0",
  "Accept-Encoding": "gzip, deflate",
  "Host": "localhost:8080",
  "Postman-Token": "b8624e55-5388-4233-9eec-65c697e39831,1150a077-b46a-47ad-b298-0b4c50e9483b",
  "Cache-Control": "no-cache",
  "Accept": "*/*",
  "User-Agent": "PostmanRuntime/7.20.1",
  "Content-Type": "application/json",
  "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiJDJiJDEwJHlHR2E2STlHRzJBRzBUYmowYzRhZ2VLeVBTdmkxaXlzVVc1VktnZnpoS0x2ZEg2TjZjYi8uIiwiaWF0IjoxNTc3MDM1MzE2LCJleHAiOjE1NzcwMzg5MTZ9.Xh0i96pmk524V6Q4NJYuZyMEH7FczMxzWbGmw4uEzpw"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});