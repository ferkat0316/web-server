/**
 * Created by Ferkat on 6/8/17.
 */
var express=require('express');

require('dotenv').load();
var app= express();
var port=process.env.port || 6000;
var middleWare=require('./middleWare');



//app.use(middleWare.requireAuthentication);
app.use(middleWare.logger);
app.get('/about', middleWare.requireAuthentication, function (req, res) {
    res.send('About us.');
})

app.listen(port, function () {
    console.log('Listening on port: '+ port);
})

//console.log(__dirname);
app.use(express.static(__dirname + '/public'));





