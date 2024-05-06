/*******************************Grid and List View*************************************************** */
function full(){
    document.getElementById("column1").style.width = "100%";
    document.getElementById("column2").style.width = "100%";
    document.getElementById("column3").style.width = "100%";
    document.getElementById("column4").style.width = "100%";
}
function towColumn(){
    document.getElementById("column1").style.width = "50%";
    document.getElementById("column2").style.width = "50%";
    document.getElementById("column3").style.width = "50%";
    document.getElementById("column4").style.width = "50%";
}
function fourColumn(){
    document.getElementById("column1").style.width = "25%";
    document.getElementById("column2").style.width = "25%";
    document.getElementById("column3").style.width = "25%";
    document.getElementById("column4").style.width = "25%";
}
function hide(){
    document.getElementById("column1").style.width = "0%";
    document.getElementById("column2").style.width = "0%";
    document.getElementById("column3").style.width = "0%";
    document.getElementById("column4").style.width = "0%";
}
/* ********************************back to Top************************************************************************* */
const toTop=document.querySelector(".to-top");
window.addEventListener( 'scroll', () => {
  if ( window.pageYOffset > 100 ) {
      toTop.classList.add('active');
  } else {
      toTop.classList.remove('active');
  }
});