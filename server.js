var express = require('express');
var app = express();

app
.use("/assets", express.static(__dirname + '/assets'))
.use(express.static('views'))
.get('/', function (req, res) {
   res.sendFile('index.html');
})
.listen(3000);

