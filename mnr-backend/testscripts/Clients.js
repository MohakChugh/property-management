var unirest = require("unirest");

var req = unirest("GET", "http://localhost:8080/client");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "Accept-Encoding": "gzip, deflate",
  "Host": "localhost:8080",
  "Postman-Token": "6d4e8abe-ece0-4f31-b5dc-5b7d83f86c32,0d3a597d-63bd-411e-872a-7e21250c175e",
  "Cache-Control": "no-cache",
  "Accept": "*/*",
  "User-Agent": "PostmanRuntime/7.20.1",
  "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiJDJiJDEwJHlHR2E2STlHRzJBRzBUYmowYzRhZ2VLeVBTdmkxaXlzVVc1VktnZnpoS0x2ZEg2TjZjYi8uIiwiaWF0IjoxNTc3MDM1MzE2LCJleHAiOjE1NzcwMzg5MTZ9.Xh0i96pmk524V6Q4NJYuZyMEH7FczMxzWbGmw4uEzpw"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
