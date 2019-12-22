var unirest = require("unirest");

var req = unirest("POST", "http://localhost:8080/addproperty");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "Content-Length": "340",
  "Accept-Encoding": "gzip, deflate",
  "Host": "localhost:8080",
  "Postman-Token": "819a65f4-0055-4b83-8ceb-1d344e01aaea,24bbadf0-62c4-4de7-a9d9-0c73343346a8",
  "Cache-Control": "no-cache",
  "Accept": "*/*",
  "User-Agent": "PostmanRuntime/7.20.1",
  "Content-Type": "application/json",
  "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiJDJiJDEwJEQ2aC82LjlsWXNZeWtJZEkwLndTUC41S0lVdmdDZlZoU2NiVFVwLy83UktiUFk1NjEza2syIiwiaWF0IjoxNTc3MDQ0NzEwLCJleHAiOjE1NzcwNDgzMTB9.b0MDnQPN9DkDeEtl1sTmOBamm3PoXJjK3D9s5QTYazg"
});

req.type("json");
req.send({
  "propertyCategory": "Appartment",
  "sellRent": "sell",
  "block": "J",
  "bhk": "2",
  "floor": "3",
  "furnishedUnfurnished": "Furnished",
  "area": "kalkaji",
  "price": "1cr",
  "PropertyType": "Appartment",
  "address": "13, 3rd floor",
  "fhLh": "fh",
  "unitNumber": "13",
  "description": "N/A",
  "ownerName": "N.k. Chugh",
  "partnerName": "Ruby chugh"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
