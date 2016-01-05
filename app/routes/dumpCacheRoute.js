'use strict';
module.exports = (cache) => {
    return (req,res) => { 
        const result = cache.dump();
        res.send("Cache dump:\n"+result);     
    };
};