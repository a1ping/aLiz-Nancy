function step1() {
  var logo = document.getElementById("cover");
  logo.style.display = 'none';
  var step1 = document.getElementById("step1");
  step1.style.display = 'block';
}

setTimeout(step1, 5000);

function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}