let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;

function sortArray(array) {
  for(let i = 0; i < array.length; i ++) {
    if(array[i] === "a") {
      a ++;
    }
    if(array[i] === "b") {
      b ++;
    }
    if(array[i] === "c") {
      c ++;
    }
    if(array[i] === "d") {
      d ++;
    }
    if(array[i] === "e") {
      e ++;
    }
    if(array[i] === "f") {
      f ++;
    }
  }
}

$(document).ready(function() {
  $('#radio-form').submit(function(event) {
    event.preventDefault();
    const q1 = $("input:radio[name=q1]:checked").val();
    const q2 = $("input:radio[name=q2]:checked").val();
    const q3 = $("input:radio[name=q3]:checked").val();
    const q4 = $("input:radio[name=q4]:checked").val();
    const q5 = $("input:radio[name=q5]:checked").val();
    const q6 = $("input:radio[name=q6]:checked").val();
    const q7 = $("input:radio[name=q7]:checked").val();
    const q8 = $("input:radio[name=q8]:checked").val();
    
    let questionArray = [q1,q2,q3,q4,q5,q6,q7,q8];
    sortArray(questionArray)

    $("#a").text(Math.floor((a/8)*100))
    $("#b").text(Math.floor((b/8)*100))
    $("#c").text(Math.floor((c/8)*100))
    $("#d").text(Math.floor((d/8)*100))
    $("#e").text(Math.floor((e/8)*100))
    $("#f").text(Math.floor((f/8)*100))

  })
})