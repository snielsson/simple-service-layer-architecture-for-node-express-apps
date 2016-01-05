'use strict';
module.exports = (dir,services) => {
    const router = require('express').Router();
    router.get('/', require(dir + 'defaultRoute.js')());
    router.get('/find/:key',require(dir + 'findRoute.js')(services.data));
    router.get('/clearcache',require(dir + 'clearCacheRoute.js')(services.cache,services.log));
    router.get('/dumpcache',require(dir + 'dumpCacheRoute.js')(services.cache));
    return router;    
}
