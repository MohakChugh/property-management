var unirest = require("unirest");

var req = unirest("POST", "http://localhost:8080/searchproperties");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "Content-Length": "189",
  "Accept-Encoding": "gzip, deflate",
  "Host": "localhost:8080",
  "Postman-Token": "21f4218c-e7d3-4c55-8051-f0aa2a02666f,2462c616-46da-4a7d-8e7f-c28df7e3d2d8",
  "Cache-Control": "no-cache",
  "Accept": "*/*",
  "User-Agent": "PostmanRuntime/7.20.1",
  "Content-Type": "application/json",
  "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiJDJiJDEwJHlHR2E2STlHRzJBRzBUYmowYzRhZ2VLeVBTdmkxaXlzVVc1VktnZnpoS0x2ZEg2TjZjYi8uIiwiaWF0IjoxNTc3MDM1MzE2LCJleHAiOjE1NzcwMzg5MTZ9.Xh0i96pmk524V6Q4NJYuZyMEH7FczMxzWbGmw4uEzpw"
});

req.type("json");
req.send({
  "property": "",
  "fh_lh": "",
  "locality": "",
  "bhk": "",
  "property_type": "",
  "isFurnished": "",
  "area": "",
  "isSale": "",
  "block": "",
  "floor": "",
  "priceFrom": "",
  "priceTO": ""
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
