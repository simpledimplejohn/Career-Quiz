// show the top two letter amounts with count percent
let inputArray = ["a","b","c","d","e","f","a","b"]
let nameArray = ["Social", "Organized", "Investigative", "Creative Problem Solving", "Driving", "Leadership"]
let countArray = [0,0,0,0,0,0]

function sortArray() {
  for(let i = 0; i < inputArray.length; i ++) {
    if(inputArray[i] === "a") {
      countArray[i] ++;
    }
    if(inputArray[i] === "b") {
      countArray[i] ++;
    }
    if(inputArray[i] === "c") {
      countArray[i] ++;
    }
    if(inputArray[i] === "d") {
      countArray[i] ++;
    }
    if(inputArray[i] === "e") {
      countArray[i] ++;
    }
    if(inputArray[i] === "g") {
      countArray[i] ++;
    }
  } 
  console.log(countArray)
}
sortArray();