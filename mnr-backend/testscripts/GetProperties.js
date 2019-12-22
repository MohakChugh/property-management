var unirest = require("unirest");

var req = unirest("GET", "http://localhost:8080/properties");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "Content-Length": "189",
  "Accept-Encoding": "gzip, deflate",
  "Host": "localhost:8080",
  "Postman-Token": "03db914d-134f-40fa-bc60-41189b7553cb,f9185603-ef52-482c-a6f2-655606862e85",
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
