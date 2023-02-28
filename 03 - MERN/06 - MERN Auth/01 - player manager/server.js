require('./server/config/mongoose.config');
require("dotenv").config();
const cookieParser = require('cookie-parser');

const express = require('express');
const cors = require('cors')

const app = express();

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: process.env.HOST}));
app.use(cookieParser());

require("./server/routes/player.routes")(app);
require("./server/routes/user.routes")(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});
