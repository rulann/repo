const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/',function(req,res)
{
    res.send("start server")
})

app.get('/getData', function(req, res){
    const info = {name: 'Rulan', Age: '20', major:'CS'};
    res.json(info)
})

app.get('/getPrices', function(req, res){
    const prices = {price1: '$5', price2: '$7', price3:'$10', price4:'$20'} ;
    res.json(prices)
})


var server= app.listen(9090, function()
{
    var host = server.address().address
    var port= server.address().port
})