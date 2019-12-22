var unirest = require("unirest");

var req = unirest("POST", "http://localhost:8080/deleteproperty");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "Content-Length": "12",
  "Accept-Encoding": "gzip, deflate",
  "Host": "localhost:8080",
  "Postman-Token": "ed7f75fb-9165-4bc0-bd9a-7f07a8b58a27,fe97d01f-7eeb-4505-8c90-161ea8a924c1",
  "Cache-Control": "no-cache",
  "Accept": "*/*",
  "User-Agent": "PostmanRuntime/7.20.1",
  "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiJDJiJDEwJHlHR2E2STlHRzJBRzBUYmowYzRhZ2VLeVBTdmkxaXlzVVc1VktnZnpoS0x2ZEg2TjZjYi8uIiwiaWF0IjoxNTc3MDM3NDIwLCJleHAiOjE1NzcwNDEwMjB9.hElJzfE6hMEH36cF7EG3fzMo1jm_YVmwA96JP5G2zl0"
});

  req.send("{\n\t\"id\":51\n}");

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
