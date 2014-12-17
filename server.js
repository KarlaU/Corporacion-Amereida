var express = require('express'),
    app = express(),
    http = require('http'),
    swig = require('swig'),
    consolidate = require('consolidate'),
    addRoutes = require('./routes.js');

app.engine('html', consolidate.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');
app.use('/static', express.static(__dirname + '/static'));
app.set('view cache', false);

swig.setDefaults({ cache : false });

addRoutes(app);

app.listen(20433, function(){
    console.log('estoy entero ready pos oshe');
});

