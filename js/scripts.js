let countObject = {a:0,b:0,c:0,d:0,e:0,f:0};
let nameArray = ["Social", "Organized", "Investigative", "Creative Problem Solving", "Driving", "Leadership"]
let topProfileName = "";
let topScore = "";
let secondProfileName = "";
let secondScore = "";

function sortArray(array) {
  for(let i = 0; i < array.length; i ++) {
    if(array[i] === "a") {
      countObject.a ++;
    }
    if(array[i] === "b") {
      countObject.b ++;
    }
    if(array[i] === "c") {
      countObject.c ++;
    }
    if(array[i] === "d") {
      countObject.d ++;
    }
    if(array[i] === "e") {
      countObject.e ++;
    }
    if(array[i] === "f") {
      countObject.f ++;
    }
  }
  // for(let key in countObject) {
  //   countObject[key] = Math.floor((countObject[key]/8)*100)
  // }
}



function inputOutput(questionArray) {
  sortArray(questionArray);
  console.log(countObject)
  let numArray = Object.values(countObject);
  console.log(numArray)
  //et countArray = Object.values()
  findFirstPlace(questionArray);
  findSecondPlace(questionArray);
  console.log(`First Place Profile: ${topProfileName} Score of: ${topScore}`)
  console.log(`Second Place Profile: ${secondProfileName} Score of: ${secondScore}`)
}

inputOutput(["a","b","c","d","e","f","a","b"])