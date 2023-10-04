module.exports.loop = function () {
    const MM = require('./memoryManager');
    const CAM = require('./creepsAmountManager');
    const CWM = require('./creepsWorkingManager');
    MM.run();
    CAM.run();
    CWM.run();
};