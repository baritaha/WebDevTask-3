/*******************************list view and Grid View Script************************ ************ */
var li_link=document.querySelectorAll(".links ul li");
var view_wrape=document.querySelectorAll(".view-wrap");
li_link.forEach(function(link){
    link.addEventListener( "mouseover", function(){
        li_link.forEach(function(item){
            item.classList.remove("active")
        })  
         link.classList.add("active"); 
         var li_view=link.getAttribute('data-view');
          view_wrape.forEach(function(view){
            view.style.display="none";
          })
          if(li_view == "list-view"){
            document.querySelector("."+li_view).style.display="block";
        }
        else{
            document.querySelector("."+li_view).style.display="block";
        }
        })
       
})
/***********************************************shared button**************************************************** */
var shar_btn=document.querySelector(".shar-btn");
var toogle_btn=document.querySelector('.toggle-btn');
shar_btn.addEventListener( 'click', function () {
    toogle_btn.classList.toggle('active')
});