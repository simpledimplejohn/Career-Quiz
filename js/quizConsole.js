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

let countObject = {a:0,b:0,c:0,d:0,e:0,f:0};
let nameObject = {a:"Social",b:"Organized",c:"Investigative",d:"Creative Problem Solving", e: "Driven", f: "Leadership"}


function sortArray(array) {
  for(let i = 0; i < array.length; i ++) {
    if(array[i] === "a") {
      countObject.a ++;
    }
    if(array[i] === "b") {
      countObject.b ++;
    }
    if(array[i] === "c") {
      countObject.c ++;
    }
    if(array[i] === "d") {
      countObject.d ++;
    }
    if(array[i] === "e") {
      countObject.e ++;
    }
    if(array[i] === "f") {
      countObject.f ++;
    }
  }
  // for(let key in countObject) {
  //   countObject[key] = Math.floor((countObject[key]/8)*100)
  // }
}
function topTwo(object) {

}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let questionArray = []
  var elements = document.getElementById("radio-form").elements;
  for (var i = 0, element; element = elements[i++];) {
    if (element.checked === true){
      questionArray.push(element.value)
    }
  }
  sortArray(questionArray);
  console.log(countObject);

  // document.querySelector("#a").innerHTML = countObject.a;
  // document.querySelector("#b").innerHTML = countObject.b;

  changeStep("next");
})



