var express = require('express'),
    app = express(),
    http = require('http'),
    swig = require('swig'),
    database = require('./database.json');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');
app.use(express.static("static"));
app.set('view cache', false);

swig.setDefaults({ cache : false });

app.get('/', function(req, res){
    res.render('index',{
        noticias: database.noticias,
        obras: database.obras
    });
});

app.get('/corporacion', function(req, res){
    res.render('corporacion');
});

app.get('/sobre', function(req, res){
    res.render('sobre');
    console.log("muestra Git");
});

app.get('/visita', function(req, res){
    res.render('visita',{
        reglas: database.reglas
    });
});

app.get('/obras', function(req, res){
    res.render('obras',{
        obras: database.obras
    });
});

app.get('/obra/:slug', function(req, res){
    var obras = database.obras,
        obra = null;

    obra = obras.filter(function(o){
        return o.slug = req.params.slug;
    });

    console.log('llegue a obra de un algo : ' + req.params.slug);

    obra = obra[0] || {};
    res.render('obra');
});

app.get('/como-llegar', function(req, res){
    res.render('como_llegar');
});

app.get('/mapa', function(req, res){
    res.render('mapa');
});

app.get('/recorrido', function(req, res){
    res.render('recorrido');
});

app.get('/noticias', function(req, res){
    res.render('noticias',{
        noticias: database.noticias
    });
});

app.get('/noticia', function(req, res){
    var tmp = [];
    tmp.push(database.noticias[0]);
    tmp.push(database.noticias[1]);
    res.render('noticia',{
        noticias: tmp
    });
});

app.get('/contacto', function(req, res){
    res.render('contacto');
});

app.get('*', function(req, res){
    res.status(404).send('404, no está tu coso :(');
})

app.listen(3000, function(){
    console.log('estoy entero ready pos oshe');
});

