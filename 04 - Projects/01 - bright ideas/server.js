require('./server/config/mongoose.config');

const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors')
if (process.env.NODE_ENV !== 'production') require('dotenv').config()


const app = express();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.HOST + "3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/routes/user.routes")(app);
require("./server/routes/idea.routes")(app);

app.listen(process.env.PORT, () => {
    console.log("Listening at Port 8000")
});
