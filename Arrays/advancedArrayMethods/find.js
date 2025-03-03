const users = [
    {id: 1, name: "george"},
    {id:2, name: "dominic"},
    {id:3, name: "kalumba"}
];

// function findUser(user){
//     return user;
// }
// const res = users.find(findUser);
// console.log(res)

function findByID(users, id){
    return users.find((user) => user.id === id);
}

const res = findByID(users, 3);
console.log(res);