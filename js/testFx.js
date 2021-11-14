// printing array to the dom with a loop

const sinScore = [{name: "Lust", score:2},{name:"Sloth", score:2},{name:"Gluttony", score:2}];
const simpleSinScore = [{Lust:2},{Sloth:2},{Gluttony:2}];

let topHeader = document.getElementById("top-list");
let printString = ""

sinScore.forEach(element => {
  printString += `<li>${element.name} score of: ${element.score}</li>`
});

topHeader.outerHTML = printString; 
