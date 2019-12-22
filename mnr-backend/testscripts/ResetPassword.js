var unirest = require("unirest");

var req = unirest("POST", "http://localhost:8080/resetpassword");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "Content-Length": "65",
  "Accept-Encoding": "gzip, deflate",
  "Host": "localhost:8080",
  "Postman-Token": "6ec48198-b5ce-4a46-8668-29da5b78f162,f1356e7c-c4e5-480d-88de-5def692053bd",
  "Cache-Control": "no-cache",
  "Accept": "*/*",
  "User-Agent": "PostmanRuntime/7.20.1",
  "Content-Type": "application/json",
  "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiJDJiJDEwJHlHR2E2STlHRzJBRzBUYmowYzRhZ2VLeVBTdmkxaXlzVVc1VktnZnpoS0x2ZEg2TjZjYi8uIiwiaWF0IjoxNTc3MDM1MzE2LCJleHAiOjE1NzcwMzg5MTZ9.Xh0i96pmk524V6Q4NJYuZyMEH7FczMxzWbGmw4uEzpw"
});

req.type("json");
req.send({
  "email": "me.mohakchugh@gmail.com",
  "password": "newPassword"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
