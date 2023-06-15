 let mainCont = document.querySelector('.main-cont');
 let overlayBtn = document.querySelector('.overlay-btn');
 let resetBtn = document.querySelector('.reset');
 let topCont = document.querySelector('.top-section');
 let iconA = document.querySelector('.icon-a');
 let iconB = document.querySelector('.icon-b');
 let iconC= document.querySelector('.part-c');
 let iconF= document.querySelector('.part-f'); 
 let iconE= document.querySelector('.part-e'); 
 let iconNotHighlighted = document.querySelector('.icon-d'); //not highligted 
 let createAction = document.querySelector('.form-createAction');
 let homepageImg = document.querySelector('.homepageImg');
 var index = -1
 let formA = document.querySelector('.form-a');
 let formB = document.querySelector('.form-b');
 
// function 
//need to create loop that for every click the button iterates to the next step 

overlayBtn.addEventListener('click',()=>{
   
    countStep();
    if(index == 0){
        partA();
       
        
    }else if (index == 1 ){
        // not highligted . . .
        notHighlighted();
        

    }else if (index == 2){
        partB();
        
    }else if (index == 3){
        removeOpacity();
        homePage();
    }
    else if (index == 4){
        PartC();
    }else if (index ==5){
        laststep();
    }else if (index ==6){
        save()
    }
    // one more conditional for the fields . . . .
    

})

resetBtn.addEventListener('click',()=>{
reset();
})

// start of the four step functions



function partA(){
    mainCont.classList.add("opacity");
    topCont.classList.add("opacity");
    iconA.style.display = 'block';
    iconB.style.display = "none";
    iconC.style.display ='none';
}

function notHighlighted(){
    iconNotHighlighted.style.display = 'block';
}


function partB(){
    mainCont.classList.add("opacity");
    topCont.classList.add("opacity");
   
    iconB.style.display = "block";
    iconNotHighlighted.style.display= "none";
}

function homePage(){
    homepageImg.style.display = 'none';    
    createAction.style.display = 'block';
    iconA.style.display = 'none';
    iconB.style.display = 'none';
}


function removeOpacity(){
    mainCont.classList.remove("opacity");
    topCont.classList.remove("opacity");
}


function PartC(){
  iconC.style.display ='block';
  
  
}

function laststep(){
    formA.style.display = 'none';
    formB.style.display = 'block';
    iconF.style.display = 'block';

}

function save(){
    iconE.style.display = 'block';
}
// end of the four step functions


function reset(){
    mainCont.classList.remove('opacity');
    topCont.classList.remove('opacity');
    iconA.style.display = 'none';
    iconB.style.display = "none";
    iconC.style.display ='none';
    createAction.style.display = 'none';
    homepageImg.style.display = 'block';
    index = -1;
    formA.style.display = 'block';
    formB.style.display = 'none';
    iconF.style.display = 'none';
    iconE.style.display = 'none';
}

function countStep(){

    
    index++;
    console.log(index);
}










