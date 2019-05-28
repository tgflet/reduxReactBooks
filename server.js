const express = require("express"),
    path= require("path"),
    bp = require("body-parser"),
    port = 8000,
    app = express(),
    cors=require('cors');

app.use(bp.json());
const react_path = path.join(__dirname, './client/build');
app.use(express.static(react_path));
app.use(cors());

require('./server/utils/routes')(app);
require('./server/utils/sequelize');

app.all('*',(req, res, next)=>{
    res.sendFile(path.resolve('./client/build/index.html'))
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})