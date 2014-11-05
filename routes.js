function Routes(server){
    this.server = server;
    this.registeredPaths = [];
}

Routes.prototype = {
    constructor: Routes,

    registerPath: function(path, fn){
        this.registeredPaths.push({
            path: path,
            callback: fn
        });
    },

    makeRoutes: function(){
        var _this = this;

        this.registeredPaths.forEach(function(route){
            _this.server.get(route.path, route.callback);
        });
    }
};
