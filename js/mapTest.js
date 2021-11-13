// We are printing your top sin, but it turns out you have three sins that are tied for first place.  Print these as a list
//  input:
const sinScore = [{name: "Lust", score:2},{name:"Sloth", score:2},{name:"Gluttony", score:2}];
const simpleSinScore = [{Lust:2},{Sloth:2},{Gluttony:2}];
let newNameArray = [{name: "Social", score: 1},
                    {name: "Organized", score: 2},
                    {name: "Investigative", score: 1},
                    {name: "Creative", score: 1},
                    {name: "Driving", score: 1},
                    {name: "Leadership", score: 0},]

function scoreRank() {
  newNameArray.forEach(element => {
    
  })
}

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