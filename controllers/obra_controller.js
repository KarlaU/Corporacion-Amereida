var database = require('../database.json');

function obraController(req, res){
    var obras = database.obras,
        obra = null;

    obra = obras.filter(function(o){
        return o.slug = req.params.slug;
    });

    obra = obra[0] || {};
    res.render('obra');
}

module.exports = obraController;
