var database = database = require('./database.json');

function indexController(req, res){
    res.render('index',{
        noticias: database.noticias,
        obras: database.obras
    });
}

function corporacionController(req, res){
    res.render('corporacion');
}

function sobreController(req, res){
    res.render('sobre');
    console.log("muestra Git");
}

function visitaController(req, res){
    res.render('visita',{
        reglas: database.reglas
    });
}

function obrasController(req, res){
    res.render('obras',{
        obras: database.obras
    });
}

function obraController(req, res){
    var obras = database.obras,
        obra = null;

    obra = obras.filter(function(o){
        return o.slug = req.params.slug;
    });

    console.log('llegue a obra de un algo : ' + req.params.slug);

    obra = obra[0] || {};
    res.render('obra');
}

function comoLlegarController(req, res){
    res.render('como_llegar');
}

function mapaController(req, res){
    res.render('mapa');
}

function recorridoController(req, res){
    res.render('recorrido');
}

function noticiasController(req, res){
    res.render('noticias',{
        noticias: database.noticias
    });
}

function noticiaController(req, res){
    var tmp = [];

    tmp.push(database.noticias[0]);
    tmp.push(database.noticias[1]);

    res.render('noticia',{
        noticias: tmp
    });
}

function addRoutes(app){
    app.get('/', indexController);
    app.get('/corporacion', corporacionController);
    app.get('/sobre', sobreController);
    app.get('/visita', visitaController);
    app.get('/obras', obrasController);
    app.get('/obra/:slug', obraController);
    app.get('/como-llegar', comoLlegarController);
    app.get('/mapa', mapaController);
    app.get('/recorrido', recorridoController);
    app.get('/noticias', noticiasController);
    app.get('/noticia', noticiaController);

    app.get('*', function(req, res){
        res.status(404).send('404, no está tu coso :(');
    })
}

module.exports = addRoutes;
