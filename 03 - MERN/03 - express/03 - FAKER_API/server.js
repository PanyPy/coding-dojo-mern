const express = require("express");
const Company = require("./models/Company");
const app = express();

const User = require("./models/User");

app.get("/api/users/new", (request, response) => {
    response.json( new User() );
  });
app.get("/api/companies/new", (request, response) => {
    response.json( new Company() );
  });

app.get("/api/user/company", (request, response) => {
    response.json( {user: new User(), company: new Company()} );
  });

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);