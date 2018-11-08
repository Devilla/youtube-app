var express = require('express');
var formidable = require('formidable');
var varupload= express();

varupload.get('/', function (req, res){
res.sendFile(__dirname + '/index.html');
});

varupload.post('/', function (req, res){
var form = new formidable.IncomingForm();
form.parse(req);

form.on('fileBegin', function (name, file){
file.path = __dirname + '/' + file.name;
});

form.on('file', function (name, file){
console.log('File-uploaded ' + file.name);
});

res.sendFile(__dirname + '/index.html');
});
varupload.listen(8080);
