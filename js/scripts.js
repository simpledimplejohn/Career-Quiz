$(document).ready(function() {
  $("form#quiz-form").submit(function(event) {
    event.preventDefault();

    const time = $("#time").val();
    const decade = $("#decade").val();
    const computer =$("#computer").val();

    if (decade === "1960" && (time === "lots" || time === "some") && computer === "mainframe") {
      $(".previous").hide();
      $("#fortran").show();
    } else if(decade === "1950" && (time === "lots" || time === "some") && computer === "mainframe") {
      $(".previous").hide();
      $("#cobol").show();
    } else if(decade === "1970" && (time === "lots" || time === "some") && computer === "mainframe") {
      $(".previous").hide();
      $("#lisp").show();
    } else if(decade === "1940" && (time === "lots" || time === "some") && computer === "mainframe") {
      $(".previous").hide();
      $("#pascal").show();
    } else if(decade === "1980" || computer === "commodore64") {
      $(".previous").hide();
      $("#basic").show();
    } else {
      $(".previous").hide();
      $("#javascript").show();
    }
  });
});