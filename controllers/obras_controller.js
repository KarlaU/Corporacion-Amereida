var database = require('../database.json');

function obrasController(req, res){
    cols = database.obras;
    c1 = cols.slice(0,3);
    c2 = cols.slice(3,5);
    c3 = cols.slice(6,8);

    res.render('obras',{
        col1: c1,
        col2: c2,
        col3: c3,

    });
}

module.exports = obrasController;
