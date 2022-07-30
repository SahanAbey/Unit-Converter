$(".btn1").click(function () {
  let value = $("#inp1").val();
  let conVal = value / 1000;
  $("#fh").html(`${value}G=${conVal}KG`);
});

$(".btn2").click(function () {
  let value = $("#inp2").val();
  let conVal = value * 1000;
  $("#sh").html(`${value}KG=${conVal}G`);
});

$(".btn3").click(function () {
  let value = $("#inp3").val();
  let conVal = value * 1000;
  $("#th").html(`${value}T=${conVal}KG`);
});
