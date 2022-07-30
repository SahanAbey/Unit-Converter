document.querySelector(".btn1").onclick = function () {
  let value = document.querySelector("#inp1").value;
  let farCon = (value * 9) / 5 + 32;
  document.querySelector("#fh").innerHTML = `${value}°C=${farCon}F`;
};
document.querySelector(".btn2").onclick = function () {
  let value = document.querySelector("#inp2").value;
  let celCon = parseFloat(((value - 32) * 5) / 9).toFixed(2);
  document.querySelector("#sh").innerHTML = `${value}F=${celCon}°C`;
};
document.querySelector(".btn3").onclick = function () {
  let value = document.querySelector("#inp3").value;

  let celCon = parseFloat(value) + 273.15;
  document.querySelector("#th").innerHTML = `${value}°C=${celCon}K`;
};
