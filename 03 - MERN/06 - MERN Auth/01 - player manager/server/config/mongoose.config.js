const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jncvbpms:jncvbpms@jncvbpms.6c49x.mongodb.net/players?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log("Established a connection to the database"))
  .catch(err => console.log("Something went wrong when connecting to the database", err));
