require('./server/config/mongoose.config');

const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors')
const path = require('path');


const app = express();
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: process.env.HOST + process.env.PORT || "http://localhost:3000"}));
app.use(cookieParser());

// App routes
require("./server/routes/user.routes")(app);

// Load client routes
// if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
//     app.use(express.static('client/build'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname + '/client/build/index.html'));
//     });
// }

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening at Port "+ process.env.PORT || 3000)
});
