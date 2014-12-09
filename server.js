var express = require('express'),
    app = express(),
    http = require('http'),
    swig = require('swig'),
    addRoutes = require('./routes.js');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');
app.use(express.static("static"));
app.set('view cache', false);

swig.setDefaults({ cache : false });

addRoutes(app);

app.listen(3000, function(){
    console.log('estoy entero ready pos oshe');
});

