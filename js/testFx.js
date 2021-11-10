// ["a","b","c","d","e","f","a","b"]
let nameObject = {Social:0, Organized:0, Investigative:0, Creative:0, Driving:0, Leadership:0}
let firstArray = [];
let secondArray = [];

function sortArray(array) {
  for(let i = 0; i < array.length; i ++) {
    if(array[i] === "a") {
      nameObject.Social ++;
    }
    if(array[i] === "b") {
      nameObject.Organized ++;
    }
    if(array[i] === "c") {
      nameObject.Investigative ++;
    }
    if(array[i] === "d") {
      nameObject.Creative ++;
    }
    if(array[i] === "e") {
      nameObject.Driving ++;
    }
    if(array[i] === "f") {
      nameObject.Leadership ++;
    }
  }
  // for(let key in countObject) {
  //   countObject[key] = Math.floor((countObject[key]/8)*100)
  // }
}
function score() {
  let maxScore = 0;
  for(const property in nameObject) {
    if(nameObject[property] > maxScore) maxScore = nameObject[property]
  }
  //console.log(maxScore);

  for (const property in nameObject) {
    if(nameObject[property] === maxScore) {
      //console.log(`Top Score = ${property} of ${nameObject[property]}`)
      firstArray.push({[property]:nameObject[property]})
      nameObject[property] = 0;
    }
  }

  //console.log(nameObject)
  let secondScore = 0;
  for(const property in nameObject) {
    if(nameObject[property] > secondScore) secondScore = nameObject[property]
  }
  //console.log(secondScore)
  for(const property in nameObject) {
    if(nameObject[property] === secondScore) {
      secondArray.push({[property]:nameObject[property]})
    }
  }

  
}

function inputOutput(questionArray) {
  sortArray(questionArray);

  score();
  console.log(`for array [ ${questionArray} ]`)
  if(firstArray.length > 1) {
    console.log(`all of these are tied for your top answer`)
    console.log(firstArray)
  }
  else {
    console.log('your first choice is: ')
    console.log(firstArray)
    console.log('the second top answers are:')
    console.log(secondArray)  
  }
}

inputOutput(["a","a","b","b","c","c","d","e"])