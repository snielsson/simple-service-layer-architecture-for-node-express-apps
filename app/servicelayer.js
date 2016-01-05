'use strict';
module.exports = (dir) => {
    const config = require(dir + '/configService')();
    const log = require(dir + '/logService')(config);
    const cache = require(dir + '/cacheService')(log, config);
    const data = require(dir + '/dataService')(cache, log, config);
    return {
        config,
        log,
        cache,
        data
    };
}
