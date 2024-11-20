// closures 

const footballTeam = function(name){
    const getFootballerName = function(){
        return name;
    }
    return getFootballerName;
}
const london = footballTeam("Arsenal");
console.log(london());


const createPet = function (name) {
    let sex;
  
    const pet = {
      // setName(newName) is equivalent to setName: function (newName)
      // in this context
      setName(newName) {
        name = newName;
      },
  
      getName() {
        return name;
      },
  
      getSex() {
        return sex;
      },
  
      setSex(newSex) {
        if (
          typeof newSex === "string" &&
          (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
        ) {
          sex = newSex;
        }
      },
    };
  
    return pet;
  };
  
  const pet = createPet("Vivie");
  console.log(pet.getName()); // Vivie
  
  pet.setName("Oliver");
  pet.setSex("male");
  console.log(pet.getSex()); // male
  console.log(pet.getName()); // Oliver


  // get api code
  const getAPI = (function (){
    const apiCode = "WW089!@_OKM";

    return function(){
        return apiCode;
    }
  })();

  console.log(getAPI()); // WW089!@_OKM

