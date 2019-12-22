var unirest = require("unirest");

var req = unirest("POST", "http://localhost:8080/addclient");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "Content-Length": "220",
  "Accept-Encoding": "gzip, deflate",
  "Host": "localhost:8080",
  "Postman-Token": "19d373e7-2ce8-4c4b-b426-499f36b116fc,5cadb0eb-a099-444c-8d9b-7e3415499c00",
  "Cache-Control": "no-cache",
  "Accept": "*/*",
  "User-Agent": "PostmanRuntime/7.20.1",
  "Content-Type": "application/json",
  "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiJDJiJDEwJHlHR2E2STlHRzJBRzBUYmowYzRhZ2VLeVBTdmkxaXlzVVc1VktnZnpoS0x2ZEg2TjZjYi8uIiwiaWF0IjoxNTc3MDM1MzE2LCJleHAiOjE1NzcwMzg5MTZ9.Xh0i96pmk524V6Q4NJYuZyMEH7FczMxzWbGmw4uEzpw"
});

req.type("json");
req.send({
  "name": "Mohak Chugh",
  "email": "me.mohakchugh@gmail.com",
  "phone": "9810178257",
  "type": "broker",
  "address": "13, 3rd floor, Rampuri, Kalkaji",
  "occupation": "Student",
  "additional_details": "Btech Graduate"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
