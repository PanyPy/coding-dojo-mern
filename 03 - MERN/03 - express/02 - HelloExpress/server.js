const express = require("express");
const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

// pre-loaded users
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

app.post("/api/users", (req, res) => {
  // req.body contains form data from Postman or React
  console.log(req.body);
  // at the moment we will push the body as user
  users.push(req.body);
  // response
  res.json( { status: "ok" } );
});
  
app.get("/api/users", (req, res) => {
  res.json( users );
});

// get user by id
app.get("/api/users/:id", (req, res) => {
  // get `id` from req.params 
  console.log(req.params.id);
  // return the user
  res.json( users[req.params.id] );
});


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
