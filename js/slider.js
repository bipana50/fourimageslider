//position images and 200 is container & image size(width) in CSS
var images = document.querySelectorAll(".container .wrapper img");
for(var i=0; i<images.length; i++){
    images[i].style.left= 200*i + "px";
}

//add indicators wrt image number
var html = "";
var ulTag = document.createElement("ul");
for(var i=0; i<images.length; i++){
    html = html + "<li></li>";
}
ulTag.innerHTML = html;
document.body.appendChild(ulTag);
ulTag.classList.add("indicator-ul");

// select individual indicator
var ulTagLi = document.querySelectorAll(".indicator-ul li");
for(var i=0; i<images.length; i++){
ulTagLi[i].classList.add("indicator-li");}

// create button left
var buttonLeft = document.createElement("button");
buttonLeft.innerHTML = "left";
document.body.appendChild(buttonLeft);
buttonLeft.classList.add("btn1");

// create button right
var buttonRight = document.createElement("button");
buttonRight.innerHTML = "right";
document.body.appendChild(buttonRight);
buttonRight.classList.add("btn2");

//initially first picture is active
var index = 0;
ulTagLi[index].style.backgroundColor = "black";

//when left button clicked
var buttonLeft = document.querySelector(".btn1");
buttonLeft.addEventListener("click",  function(e){
   var wrapper = document.querySelector(".wrapper");
   var leftValue = wrapper.style.left;
   
   if(!leftValue){
       leftValue = "0px";
   }

   if(parseInt(leftValue) === 0){
    leftValue = images.length * (-200) +"px";
   }

   var i=0;
   var id = setInterval(frame, 5);
  function frame() {
    if (i == 200) {
      clearInterval(id);
      var afterValue = wrapper.style.left;
      ulTagLi[index].style.backgroundColor = "aqua";
      index = parseInt(afterValue)/-200;
      ulTagLi[index].style.backgroundColor = "black";

    } else {
      i++;
      wrapper.style.left = parseInt(leftValue) + i + "px"; 

    }
  }
});

//when right button clicked
var buttonRight = document.querySelector(".btn2");
buttonRight.addEventListener("click",  function(e){
    var wrapper = document.querySelector(".wrapper");
    var leftValue = wrapper.style.left;
    
    if(!leftValue){
        leftValue = "0px";
    }

    if(parseInt(leftValue) === images.length * -200 + 200){
     leftValue = "200px";
    } 

    var i=0;
    var id = setInterval(frame, 5);
   function frame() {
     if (i == 200) {
       clearInterval(id);
       var afterValue = wrapper.style.left;
       ulTagLi[index].style.backgroundColor = "aqua";
       index = parseInt(afterValue)/-200;
       ulTagLi[index].style.backgroundColor = "black";
      
     } else {
       i++;
       wrapper.style.left = parseInt(leftValue) - i + "px";
 
     }
   }
 });

 
 
    ulTag.addEventListener("click", function(e) {
        for(var i=0; i< ulTagLi.length; i++){
            if(ulTagLi[i] === e.target){
                ulTagLi[index].style.backgroundColor = "aqua";
                index = i;
                ulTagLi[i].style.backgroundColor = "black";
         
                var wrapper = document.querySelector(".wrapper");
                wrapper.style.left = i * -200 + "px";
        
            } 
        }
        
    });





