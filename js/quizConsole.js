//

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

function printToDOM(){
  console.log("first place: ")
  for (let i = 0; i < firstArray.length; i++) {
    // console.log(`${Object.keys(firstArray[i])}, score of: ${Object.values(firstArray[i])}`)
    document.getElementById("top-score").outerHTML = `<li>${Object.keys(firstArray[i])}, score of: ${Object.values(firstArray[i])}</li>`
  }
  console.log("second place: ")
  for (let i = 0; i < secondArray.length; i++) {
    // console.log(`${Object.keys(secondArray[i])}, score of: ${Object.values(secondArray[i])}`)  }
    document.getElementById("second-score").outerHTML = `<li>${Object.keys(secondArray[i])}, score of: ${Object.values(secondArray[i])}</li>`
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let questionArray = []
  let elements = document.getElementById("radio-form").elements;
  for (var i = 0, element; element = elements[i++];) {
    
    if (element.checked === true){
      questionArray.push(element.value)
      
    }
  }

  // console.log(questionArray)
  sortArray(questionArray);
  score()
  printToDOM();

  // document.querySelector("#a").innerHTML = countObject.a;
  // document.querySelector("#b").innerHTML = countObject.b;

  changeStep("next");
})



