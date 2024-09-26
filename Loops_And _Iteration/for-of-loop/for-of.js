// The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

// SYNTAX
// for (variable of iterable)
//     statement

let subreddits = ["soccer", "news", "technology", "health"];
for(let subreddit of subreddits){
    console.log(`${subreddit} -  www.reddit/r/${subreddit}`);   
}

// NESTED for-of
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(let row of matrix){
    let sum = 0;
    for(let num of row){
        sum += num;
    }

    console.log(`Row of ${row}: sums to ${sum}`);
}
