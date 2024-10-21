// A function that calls itself is called a recursive function

function loop(x) {
    // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    if (x >= 10) {
      return; //
    }
    // do stuff
    loop(x + 1); // the recursive call
  }
  console.log(loop(0));


  function fact(n){
    if(n === 0 || n === 1){
      return 1;
    }
    return n * fact(n - 1);
  }
  console.log(fact(5));

//  //
 function strRev(text){
    if(text.length === 1){
        return text;
    } else {
        return text.slice(-1) + strRev(text.slice(0, -1)); ken
    }
 }
 console.log(strRev("kenya"));

// console.log("kenya".reverse());

