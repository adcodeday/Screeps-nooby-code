// JavaScript source code
module.exports = {
    run: function (creep) {
        if (creep.memory.working == true && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
            creep.memory.working = true;
        }
        if (creep.memory.working == false) {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else if (creep.memory.working == true) {
            var con = creep.room.controller;
                if (creep.upgradeController(con) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(con);
                }
        }
    }
};