var database = require('../database.json');

function visitaController(req, res){
    res.render('visita',{
        reglas: database.reglas
    });
}

module.exports = visitaController;
