var database = require('../database.json');

function indexController(req, res){
    res.render('index',{
        noticias: database.noticias,
        obras: database.obras
    });
}

module.exports = indexController;
