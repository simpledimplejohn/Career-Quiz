let countObject = {a:0,b:0,c:0,d:0,e:0,f:0};
let nameArray = ["Social", "Organized", "Investigative", "Creative Problem Solving", "Driving", "Leadership"]

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

function objectArraySort() {

}

function inputOutput(questionArray) {
  sortArray(questionArray);
  console.log(countObject)
  let numArray = Object.values(countObject);
  console.log(numArray)
  let max = numArray[0];
  let maxIndex = 0;
  for (let i = 1; i < numArray.length; i++) {
    if(numArray[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  
  return `Top Profile: ${nameArray[maxIndex]} score: ${numArray[maxIndex]}`
}

console.log(inputOutput(["a","b","c","d","e","f","a","b"]))