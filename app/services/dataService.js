'use strict';
module.exports = (cache, log, config) => {
    return {
        getData: (key) => {
            log.debug("calling getData with key " + key);
            if(key === 'illegal key') {
                log.error('illegal key');
                return null;
            }
            let result = cache.get(key);
            if (!result) {
                result = new Date();
                cache.set(key, result);
            }
            return result;
        }
    }
}