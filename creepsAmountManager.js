/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creepsAmountManager');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function () {
        var harvcount = 0;
        var contcount = 0;
        var buidcount = 0;
        var creepsAmount=0;
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            if (creep.memory.role == "harv") {
                harvcount++;
            } else if (creep.memory.role == "cont") {
                contcount++;
            } else if (creep.memory.role == "buid") {
                buidcount++;
            }
        }
        if (harvcount == 0) {
            console.log("Harv不足");
            if (Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, MOVE], "harv" + Game.time, { memory: { role: 'harv', working: false } })) {
                console.log("已创建harv");
            }
        }
        if (harvcount < 6) {
            console.log("Harv不足");
            if (Game.spawns['Spawn1'].spawnCreep([WORK, WORK,WORK, CARRY, CARRY, MOVE,MOVE],"harv"+ Game.time, { memory: { role: 'harv', working: false } })) {
                console.log("已创建harv");
            }
        } else if (contcount < 6) {
            console.log("Cont不足");
            if (Game.spawns['Spawn1'].spawnCreep([WORK, WORK,WORK, CARRY, CARRY,MOVE, MOVE],"cont"+ Game.time, { memory: { role: 'cont', working: false } })) {
                console.log("已创建cont");
            }
        } else if (buidcount < 6) {
            console.log("Buid不足");
            if (Game.spawns['Spawn1'].spawnCreep([WORK, WORK,WORK, CARRY, CARRY,MOVE, MOVE],"buid"+ Game.time, { memory: { role: 'buid', working: false } })) {
                console.log("已创建buid");
            }
        }
        for (var name in Game.creeps) {
            creepsAmount++;
        }
        Memory.creepsAmount=creepsAmount;
    }
};
