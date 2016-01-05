'use strict';
module.exports = (dataService) => {
    return (req,res) => {
        const key = req.params.key;
        var data = dataService.getData(key);
        res.send("data for key: " + data);     
    };
};