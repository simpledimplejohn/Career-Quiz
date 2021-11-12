// We are printing your top sin, but it turns out you have three sins that are tied for first place.  Print these as a list
//  input:
const sinScore = [{name: "Lust", score:2},{name:"Sloth", score:2},{name:"Gluttony", score:2}]

htmlArray = []

function printSin() {
  sinScore.map(e => htmlArray.push(`<li>${e.name} score of: ${e.score}</li>`))
  console.log(htmlArray.join(""))
  
};
printSin();