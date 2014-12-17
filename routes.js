var indexController = require('./controllers/index_controller.js'),
    corporacionController = require('./controllers/corporacion_controller.js'),
    sobreController = require('./controllers/sobre_controller.js'),
    visitaController = require('./controllers/visita_controller.js'),
    obrasController = require('./controllers/obras_controller.js'),
    obraController = require('./controllers/obra_controller.js'),
    comoLlegarController = require('./controllers/como_llegar_controller.js'),
    mapaController = require('./controllers/mapa_controller.js'),
    recorridoController = require('./controllers/recorrido_controller.js'),
    noticiasController = require('./controllers/noticias_controller.js'),
    noticiaController = require('./controllers/noticia_controller.js');

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
