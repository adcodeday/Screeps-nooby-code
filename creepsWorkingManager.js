/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creepsWorkingManager');
 * mod.thing == 'a thing'; // true
 */
module.exports = {
    run: function () {

        var spwan = Game.spawns['Spawn1'];
        var targetst = spwan.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_SPAWN ||
                    structure.structureType == STRUCTURE_TOWER) &&
                    structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }
        });
        for (let name in Game.creeps) {
            var creep = Game.creeps[name];
            if (creep.memory.role == "harv") {
                if (Memory.creepsAmount >= 18 || targetst[0] == null) {
                    require('./cont').run(creep);
                } else {
                    
                    require('./harv').run(creep,targetst[0]);
                }
            }
            else if (creep.memory.role == "cont") {
                require('./cont').run(creep);
            }
            else if (creep.memory.role == "buid") {
                var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                if (targets[0] == null) {
                    require('./cont').run(creep);
                } else {
                    require('./buid').run(creep);
                }
            }
        }
    }
};