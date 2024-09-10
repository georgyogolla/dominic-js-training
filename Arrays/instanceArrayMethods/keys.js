// The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.


const array = ["a", "b", "c", "d"];
const iterator = array.keys();
// console.log(iterator);
// loop through the array to retrive the index
for(const key of iterator){
    console.log(key);
    
}

