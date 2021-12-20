function step1(){
    let logo = document.getElementById("cover");
    logo.style.display='none';
    let step1 = document.getElementById("step1");
    step1.style.display='block';
}
setTimeout(step1, 5000);
  function openNav() {
	document.getElementById("myNav").style.width = "50%";
  }
  
  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }