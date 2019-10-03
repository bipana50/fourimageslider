var imgLength = 4;
var imgWidth = 200;
function CreateSlider(sliderId){
    this.sliderId = sliderId;
    this.imgLength = 4;
    this.index = 0;

this.init = function(){
    this.createStructure();
    this.animationButtonLeft();
    this.animationButtonRight();
}
this.createStructure = function(){
    var wholeContainer = document.querySelector('.whole-container');
    wholeContainer.classList.add('clearfix');
    var liBlock = document.createElement('li');
    liBlock.innerHTML = '<div class="container"><div class="wrapper clearfix"><img src="images/cup1.jpg"/><img src="images/cup2.jpg"/><img src="images/cup3.jpg"/><img src="images/cup4.jpg"/></div></div><ul class="clearfix indicator-ul"><li class="indicator-li"></li><li class="indicator-li"></li><li class="indicator-li"></li><li class="indicator-li"></li></ul><div><button class="btn1">LEFT</button><button class="btn2">RIGHT</button></div>';
    wholeContainer.appendChild(liBlock);
    liBlock.classList.add(this.sliderId);
    liBlock.classList.add('first-li');

    var ulTagLi = document.querySelectorAll('.'+ sliderId +' '+'.indicator-ul .indicator-li');
    ulTagLi[this.index].style.backgroundColor = "black";

}

this.animationButtonLeft = function(){
    var buttonLeft = document.querySelector('.'+ sliderId +' '+'.btn1');
    console.log('.'+sliderId+' '+'.btn1');
    buttonLeft.addEventListener("click", function(e){
            var ulTagLi = document.querySelectorAll('.'+ sliderId +' '+'.indicator-ul .indicator-li');
            var wrapper = document.querySelector('.'+ sliderId +' '+'.wrapper');
            var leftValue = wrapper.style.left;
            
            if(!leftValue){
                leftValue = "0px";
            }
         
            if(parseInt(leftValue) === 0){
             leftValue = imgLength * (-imgWidth) +"px";
            }
            var i=0;
            var id = setInterval(frame.bind(this), 4);
           function frame() {
            if (i == imgWidth) {
                clearInterval(id);
                var afterValue = wrapper.style.left;
                ulTagLi[this.index].style.backgroundColor = "aqua";
                this.index = parseInt(afterValue)/-(imgWidth);
                ulTagLi[this.index].style.backgroundColor = "black";
              } else {
                i++;
                wrapper.style.left = parseInt(leftValue) + i + "px"; 
              }
           }

        }.bind(this));

    }

this.animationButtonRight = function(){
        var buttonRight = document.querySelector('.'+ sliderId+' '+'.btn2');
                buttonRight.addEventListener("click",function(e){
                var ulTagLi = document.querySelectorAll('.'+ sliderId +' '+'.indicator-ul .indicator-li');
                var wrapper = document.querySelector('.'+ sliderId +' '+'.wrapper');
                var leftValue = wrapper.style.left;
                
                if(!leftValue){
                    leftValue = "0px";
                }
            
                if(parseInt(leftValue) === imgLength * -(imgWidth) + imgWidth){
                 leftValue = "200px";
                } 
        
                var i=0;
                var id = setInterval(frame.bind(this), 4);
                function frame() {
                 if (i == imgWidth) {
        
                   clearInterval(id);
                   var afterValue = wrapper.style.left;
                   ulTagLi[this.index].style.backgroundColor = "aqua";
                   this.index = parseInt(afterValue)/-(imgWidth);
                   ulTagLi[this.index].style.backgroundColor = "black";
        
                 } else {
                   i++;
                   wrapper.style.left = parseInt(leftValue) - i + "px";
                        }
               }
             }.bind(this));
        }
        
        
        }

var first = new CreateSlider('firstSlider').init();
var second = new CreateSlider('secondSlider').init();
var third = new CreateSlider('thirdSlider').init();
var fourth = new CreateSlider('fourthSlider').init();


