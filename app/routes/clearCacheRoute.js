'use strict';
module.exports = (cache, log) => {
    return (req,res) => { 
        cache.clear();
        const msg = "Cache cleared.";
        log.info(msg);
        res.send(msg);     
    };
};