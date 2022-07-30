$(".btn1").click(function () {
  let val = $("#inp1").val();
  let conVal = val / 1000;
  $("#fh").html(`${val}MB=${conVal}GB`);
});

$(".btn2").click(function () {
  let val = $("#inp2").val();
  let conVal = val * 1000;
  $("#sh").html(`${val}GB=${conVal}MB`);
});

$(".btn3").click(function () {
  let val = $("#inp3").val();
  let conVal = val / 1000;
  $("#th").html(`${val}KB=${conVal}MB`);
});
