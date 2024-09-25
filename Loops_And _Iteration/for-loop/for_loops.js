// Loops offer a quick and easy way to do something repeatedly.

// example 1: Write a loop to go five steps 
// SYNTAX

// traditional/standard for loop

// for (initialization; condition; afterthought)
//     statement

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }




function countSelected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  
  const btn = document.getElementById("btn");
  
  btn.addEventListener("click", () => {
    const musicTypes = document.selectForm.musicTypes;
    console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
  });
 