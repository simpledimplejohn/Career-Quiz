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
      nameObject.social ++;
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


const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let questionArray = []
  let elements = document.getElementById("radio-form").elements;
  for (var i = 0, element; element = elements[i++];) {
    if (element.checked === true && element.value === ""){
      questionArray.push(element.value)
    }
  }
  sortArray(questionArray);
  console.log(nameObject);

  // document.querySelector("#a").innerHTML = countObject.a;
  // document.querySelector("#b").innerHTML = countObject.b;

  changeStep("next");
})



