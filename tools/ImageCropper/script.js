/**
 * Variable declerations
 */
var upload = document.querySelector("#file-input");
var a = document.querySelector('#a');
var container = document.querySelector('.container');
var crop = document.getElementById('#cropBtn');
var cropper;
var croppedImage ="";
var outputCont = document.querySelector('.output-cont');
var resCont = document.querySelector('.res-container');
//text area id decleration
const message = document.getElementById('freeform');
const resultMessage = document.getElementById('ab');

var result = document.getElementById('#result');

// MODAL variable declarations


var modal = document.querySelector(".modal")
var modalImg = document.getElementById("#b");

/**
 * Function that Initilazes Cropper function
 * 
 */
function initCropper(){
  console.log(a);
  const cropper = new Cropper( a , {
    aspectRatio:'free',
    viewMode:0,
    scalable:true,
  })

  return cropper;
}

/**
 * A function that crops the image based on the dimensions / parameters set by use
 * @returns the cropped image
 */

function Crop(){
   var croppedImage = cropper.getCroppedCanvas().toDataURL();
    outputCont.innerHTML = "";   
   let newmImg = new Image();
    newmImg.classList.add('b');
    newmImg.src = croppedImage;
    outputCont.appendChild(newmImg);
    return croppedImage;

}


// A set of functions for Cropper that implements certain functionalaties in the cropper canvas
function ZoomIn(){
  cropper.zoom(.1);

}
function ZoomOut(){
  cropper.zoom(-0.1);

}


function Rotate(){
  cropper.rotate(45);

}
function Rotatefull(){
  cropper.rotate(180);
}

function Reset(){
  
  cropper.reset();

}
/* End of functions */

/**
 * readUrl is a function that enables reading of an Image file
 * 
 * @param {*} input 
 */

function readUrl (input){

  
  if (input.files){
    
    let reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    //loading image 

  reader.onload = (e)=>{

        if(cropper){
          cropper.destroy();
        }

        a.src = e.target.result;
        
        document.querySelector('.hide').style.display = 'block';
        document.querySelector('.options').style.display = 'block';
        document.querySelector('.previews').style.display = 'block';
        
        cropper = initCropper();
    }   
  }
  
}

function destroyCropper() {
  var container = document.querySelector('.cropper-container');
  
}



// ✅ get value of textarea on change
message.addEventListener('input', function handleChange(event) {
  // console.log(event.target.value);
  
});



/**
 * Function Preview dispays the modal element that containes the contents
 * of the text entered and the cropped Image 
 */
function Preview(){
  modal.style.display = "block";
  let resImg = new Image();
  resImg.classList.add('c');

  resImg.src = Crop();

  resCont.append(resImg); // for image .. 
  resultMessage.value= message.value;
  
  
}

function PreviewFull(){
  let text = document.querySelector('.text-box');
  text.style.display = "none";
  modal.style.display = "block";
  let resImg = new Image();
  resImg.classList.add('d');

  resImg.src = Crop();

  resCont.append(resImg); // for image .. 
 // need to style 
  modal.style.setProperty('max-height', 'calc(100vh - 100px)');

}

/**
 * A function to that downloades image when download button is invoked
 * 
 */
document.querySelector(".close-btn").addEventListener("click", function(){
  let text = document.querySelector('.text-box');
  text.style.display = "block";
  modal.style.display = "none";
  resCont.innerHTML = "";
  // resultMessage.innerHTML = "";
  console.log('E');
});

document.querySelector(".save-btn").addEventListener('click', ()=>{
  let imgPath = Crop();
  
  var name = document.getElementsByName("Name")[0].value;
  saveAs(imgPath,name);


})







    