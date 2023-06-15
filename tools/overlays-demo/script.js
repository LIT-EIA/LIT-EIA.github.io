 let mainCont = document.querySelector('.main-cont');
 let overlayBtn = document.querySelector('.overlay-btn');
 let resetBtn = document.querySelector('.reset');
 let topCont = document.querySelector('.top-section');
 let iconA = document.querySelector('.icon-a');
 let iconB = document.querySelector('.icon-b');
 let iconC= document.querySelector('.part-c')
 var index = 0
 
// function 
//need to create loop that for every click the button iterates to the next step 

overlayBtn.addEventListener('click',()=>{
   
   
    let array = [partA(),partB(),PartC()];
    array[0];
   

}
)

resetBtn.addEventListener('click',()=>{
reset();
})

// start of the four step functions

function partA(){
    mainCont.classList.add("opacity");
    topCont.classList.add("opacity");
    iconA.style.display = 'block';
    iconB.style.display = "none";
}

function partB(){
    mainCont.classList.add("opacity");
    topCont.classList.add("opacity");
   
    iconB.style.display = "block";
}


function PartC(){
  iconC.style.display ='block';
}
// end of the four step functions


function reset(){
    mainCont.classList.remove('opacity');
    topCont.classList.remove('opacity');
    iconA.style.display = 'none';
    iconB.style.display = "none";
    iconC.style.display ='none';
   

}










