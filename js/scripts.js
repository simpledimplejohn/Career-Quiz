$(document).ready(function() {
  $('#radio-form').submit(function(event) {
    event.preventDefault();
    const q8 = $("input:radio[name=q8]:checked").val();
    console.log(q8)
    $("#a").text(q8)
  })
})