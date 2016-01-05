'use strict';
module.exports = () => {
    return (req,res) => {
        res.send("This is default route. Use /find/:key to find data, or /clearcache to clear cache.");    
    };
};