'use strict';
module.exports = (config) => {
    const _logLevels = {
        debug: 0,
        info: 1,
        error: 2
    };
    const _logLevel = _logLevels[config.logLevel];
    function _write(logLevel, msg){
        if(logLevel >= _logLevel) console.log("log service: "+ msg);
    }
    return {
        debug: (msg) => { _write(_logLevels['debug'], msg) },  
        info: (msg) => { _write(_logLevels['info'], msg) },  
        error: (msg) => { _write(_logLevels['error'], msg) }  
    }
} 