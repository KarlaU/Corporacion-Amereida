var database = require('../database.json');

function obrasController(req, res){
    res.render('obras',{
        obras: database.obras
    });
}

module.exports = obrasController;
