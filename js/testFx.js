// ["a","b","c","d","e","f","a","b"]
function inputOutput(questionArray) {
  let nameObject = {Social:0, Organized:0, Investigative:0, Creative:0, Driving:0, Leadership:0}
  let firstArray = [];
  let secondArray = [];
  let maxScore = 0
  let secondScore = 0;

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
  sortArray(questionArray);
  score();
  console.log(`for array [ ${questionArray} ]`)
  console.log(`FIRST PLACE SCORE IS: ${maxScore}`)
  console.log(firstArray)
  console.log(`  SECOND PLACE SCORE IS: ${secondScore}`)
  if (secondScore !== 0) {
    console.log(secondArray)
  }
  // if (firstArray.length === 1 && secondArray.length === 0) {
  //   console.log("Your only top answer was: ")
  //   console.log(firstArray)
  // }
  // else if (firstArray.length > 1 && secondArray.length !== 0) {
  //   console.log(`all of these are tied for your top answer`)
  //   console.log(firstArray)
  // }
  // else {
  //   console.log('your first choice is: ')
  //   console.log(firstArray)
  //   console.log('the second top answers are:')
  //   console.log(secondArray)  
  // }
}

// top three
//  inputOutput(["a","a","b","b","c","c","d","e"])
// top four
// inputOutput(["a","a","b","b","c","c","d","d"])
// // top two
// inputOutput(["a","a","a","a","b","b","b","b"])
// // top one
//inputOutput(["a","a","a","a","a","a","a","a"])
// one first place five second place
inputOutput(["a","a","a","b","c","d","e","f"])
inputOutput(["a","a","a","a","b","c","d","e"])
inputOutput(["a","a","a","a","a","d","e","f"])
inputOutput(["a","a","a","a","a","a","e","f"])



