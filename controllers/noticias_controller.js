var database = require('../database.json');

function noticiasController(req, res){
    res.render('noticias',{
        noticias: database.noticias
    });
}

module.exports = noticiasController;
