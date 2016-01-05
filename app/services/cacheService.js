'use strict';
module.exports = (log,config) => {
    let _cache = {}; 
    return {
        get: (key) => {
            const val = _cache[key]; 
            if(!val && config.logCacheMisses) log.info("Cache miss for key: " + key);
            return val;
        },
        set: (key,val) => {
            _cache[key] = val;
        },
        clear: () => {
            _cache = {};
        },
        dump: () => {
            return require('util').inspect(_cache);
        }
    }
}