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

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const q1 = document.querySelector('input[name="q1"]:checked').value;
  const q2 = document.querySelector('input[name="q2"]:checked').value;
  const q3 = document.querySelector('input[name="q3"]:checked').value;
  const q4 = document.querySelector('input[name="q4"]:checked').value;
  const q5 = document.querySelector('input[name="q5"]:checked').value;
  const q6 = document.querySelector('input[name="q6"]:checked').value;
  const q7 = document.querySelector('input[name="q7"]:checked').value;
  const q8 = document.querySelector('input[name="q8"]:checked').value;

  const questionArray = [q1,q2,q3,q4,q5,q6,q7,q8];
  sortArray(questionArray);
  console.log(countObject);

  document.querySelector("#a").innerHTML = countObject.a;
  document.querySelector("#b").innerHTML = countObject.b;
  document.querySelector("#c").innerHTML = countObject.c;
  document.querySelector("#d").innerHTML = countObject.d;
  document.querySelector("#e").innerHTML = countObject.e;
  document.querySelector("#f").innerHTML = countObject.f;

  changeStep("next");
})


// $('#radio-form').submit(function(event) {
//   event.preventDefault();

//   const q1 = $("input:radio[name=q1]:checked").val();
//   const q2 = $("input:radio[name=q2]:checked").val();
//   const q3 = $("input:radio[name=q3]:checked").val();
//   const q4 = $("input:radio[name=q4]:checked").val();
//   const q5 = $("input:radio[name=q5]:checked").val();
//   const q6 = $("input:radio[name=q6]:checked").val();
//   const q7 = $("input:radio[name=q7]:checked").val();
//   const q8 = $("input:radio[name=q8]:checked").val();
  
//   const questionArray = [q1,q2,q3,q4,q5,q6,q7,q8];
//   console.log(questionArray)

//   sortArray(questionArray);

//   $("#a").prepend(countObject.a);
//   $("#b").prepend(countObject.b);
//   $("#c").prepend(countObject.c);
//   $("#d").prepend(countObject.d);
//   $("#e").prepend(countObject.e);
//   $("#f").prepend(countObject.f);

//   changeStep("next");

// });
