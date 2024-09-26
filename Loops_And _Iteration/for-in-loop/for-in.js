
// Loops over the keys in an object

// SYNTAX
// for (variable in object) {
//     statement
//     }

const eplTeamsPoints = {
    ManchesterUnited: 29,
    Chelsea: 27,
    Liverpool: 24,
    ManchesterCity: 23,
    Arsenal: 22
};

let totalPoints = 0;
for(let point in eplTeamsPoints){
    totalPoints += eplTeamsPoints[point];
}
console.log(`Points: ${totalPoints} points`);
