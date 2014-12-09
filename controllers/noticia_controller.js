var database = require('../database.json');

function noticiaController(req, res){
    var tmp = [];

    tmp.push(database.noticias[0]);
    tmp.push(database.noticias[1]);

    res.render('noticia',{
        noticias: tmp
    });
}

module.exports = noticiaController;
