// We are printing your top sin, but it turns out you have three sins that are tied for first place.  Print these as a list
//  input:
const sinScore = [{name: "Lust", score:2},{name:"Sloth", score:2},{name:"Gluttony", score:2}];
const simpleSinScore = [{Lust:2},{Sloth:2},{Gluttony:2}];
let newNameArray = [{name: "Social", score: 0},
                    {name: "Organized", score: 0},
                    {name: "Investigative", score: 0},
                    {name: "Creative", score: 0},
                    {name: "Driving", score: 0},
                    {name: "Leadership", score: 0},
                    ]
let firstArray = [];
let secondArray = [];
let maxScore = 0
let secondScore = 0;
function sortArray(array) {
  for(let i = 0; i < array.length; i ++) {
    if(array[i] === "a") {
      newNameArray.find(i => i.name === 'Social').score ++;
    }
    if(array[i] === "b") {
      newNameArray.find(i => i.name === 'Organized').score ++;
    }
    if(array[i] === "c") {
      newNameArray.find(i => i.name === 'Investigative').score ++;
    }
    if(array[i] === "d") {
      newNameArray.find(i => i.name === 'Creative').score ++;
    }
    if(array[i] === "e") {
      newNameArray.find(i => i.name === 'Driving').score ++;
    }
    if(array[i] === "f") {
      newNameArray.find(i => i.name === 'Leadership').score ++;
    }
  }
  // for(let key in countObject) {
  //   countObject[key] = Math.floor((countObject[key]/8)*100)
  // }
}
function topTwo() {
  // finding the max score
  newNameArray.forEach(element => {
    // console.log(`element: ${element.score}`)
    if(element.score > maxScore) maxScore = element.score
  })
  newNameArray.forEach(element => { //push max scores to array if more than one
    if(element.score === maxScore) {
      firstArray.push({[element.name]:[element.score]})
      element.score = 0;
    }
  })
  ///////////// SECOND PLACE ///////////////////
  newNameArray.forEach(element => {
    if(element.score > secondScore) secondScore = element.score
  })
  newNameArray.forEach(element => {
    if(element.score === secondScore) secondArray.push({[element.name]:[element.score]})
  })
}

// first place arrays
// questionArray = ["a","a","a","a","c","c","c","c"]
// questionArray = ["a","a","b","b","c","c","d","d"]
// second place arrays
questionArray = ["a","a","a","a","c","c","d","d"]
sortArray(questionArray)
topTwo()
console.log(firstArray)
console.log(secondArray)
// console.log(newNameArray)








/////////////////MAP NOTES////////////////////////


htmlArray = []

function printSin() {
  sinScore.map(e => htmlArray.push(`<li>${e.name} score of: ${e.score}</li>`))
  console.log(htmlArray.join(""))
  
};
//printSin();

function addSin() {
  
  console.log(sinScore.find(i => i.name === 'Lust').score )
  // console.log(sinScore.find(i => i.score === 2))
}
//addSin()