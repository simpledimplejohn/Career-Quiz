// //

const steps = Array.from(document.querySelectorAll(".step")); //step array for next buttons puts in array
const nextBtn = document.querySelectorAll(".next-btn");  //grabs all the next buttons
const prevBtn = document.querySelectorAll(".previous-btn"); //grabs all the previous buttons 

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});

prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});


function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active"); 
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}

//quiz
let newNameArray = [{name: "Social", score: 0},
                    {name: "Organized", score: 0},
                    {name: "Investigative", score: 0},
                    {name: "Creative", score: 0},
                    {name: "Driving", score: 0},
                    {name: "Leadership", score: 0},]
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
function score() {
  //////////// FIRST PLACE //////////////////////
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

function printFirst(){ // prints the first place score or scores
  let firstString = ""
  if (firstArray.length === 1) {
    document.getElementById("top-header").innerHTML = 'Top Score is:';
  } else {
    document.getElementById("top-header").innerHTML = 'You Have Multiple Top Scores: ';
  }
  firstArray.forEach(element => {
    console.log(Object.keys(element))
      firstString += `<li>${Object.keys(element)}, Score of: ${Object.values(element)}</li>`
  })
  document.getElementById("top-list").outerHTML = firstString;
}
function printSecond(){ //prints the second place score or scores
  let secondString = "";
  if(firstArray.length === 1) {
    if (secondArray.length === 1) {
      document.getElementById("second-header").innerHTML = 'Second Score is:';
    } else {
      document.getElementById("second-header").innerHTML = 'You Have Multiple Second Scores: ';
    }
    secondArray.forEach(element => {
      secondString += `<li>${Object.keys(element)}, Score of: ${Object.values(element)}</li>`;
    });
    document.getElementById("second-list").outerHTML = secondString;
  }
}
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let questionArray = []
  let elements = document.getElementById("radio-form").elements; // gets all the values from the form and pushes into an array
  for (var i = 0, element; element = elements[i++];) {
    if (element.checked === true){
      questionArray.push(element.value)
      
    }
  }

  // console.log(questionArray)
  // questionArray = ["a","a","b","b","c","c","d","d"] // four first places
  // questionArray = ["a","a","b","b","c","c","d","e"] // three first places
  questionArray = ["a","a","a","b","c","d","e","f"] // one first place five second place
  sortArray(questionArray);
  console.log(firstArray)
  console.log(secondArray)
  score()
  printFirst();
  printSecond();

  // document.querySelector("#a").innerHTML = countObject.a;
  // document.querySelector("#b").innerHTML = countObject.b;

  changeStep("next");
})



