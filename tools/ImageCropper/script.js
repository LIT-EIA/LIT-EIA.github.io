/**
 * Variable declerations
 */
var upload = document.querySelector("#file-input");
var a = document.querySelector('#a');
var b = "";
var container = document.querySelector('.container');
var crop = document.getElementById('#cropBtn');
var cropper;
var croppedImage ="";
var outputCont = document.querySelector('.output-cont');
var resCont = document.querySelector('.res-container');
var imgCont = document.querySelector('.img-cont');
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
    newmImg.classList.add('b','object-position');
    newmImg.src = croppedImage;
    b = newmImg.src;
   
    outputCont.appendChild(newmImg);
   
    document.querySelector('.footer-wrapper').style.display = "block";
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


// ✅ get value of textarea on change
message.addEventListener('input', function handleChange(event) {
  
});



/**
 * Function Preview dispays the modal element that containes the contents
 * of the text entered and the cropped Image 
 */
function Preview(){
  modal.style.display = "block";
 // TEXT
  componentTitle();
// IMAGE
  let resImg = new Image();
  resImg.classList.add('c');
  resImg.src = b;
  resCont.append(resImg);


  modal.style.setProperty('max-height', 'calc(140vh - 50px)');
  resultMessage.innerHTML= `${message.value}`

  let width = (document.querySelector('.c').naturalWidth);
  console.log('natural width is ' , width);
  if( width < 400){
    
    resImg.classList.add('object-fit_none');
    resImg.classList.add('object-position');
    let Imageheight = (document.querySelector('.c').naturalHeight);
    console.log("Image Height: ", Imageheight);
    let paragraphHeight = resultMessage.offsetHeight;
    console.log("paragraph Height is : ", paragraphHeight);
    if (Imageheight > paragraphHeight){
      document.querySelector('.text-box').style.height = `${Imageheight + 30}px`;
      document.querySelector('.res-container').style.height = `${Imageheight + 30}px`;
      console.log("image height is bigger ");
    }
    if( paragraphHeight > Imageheight){
      document.querySelector('.text-box').style.height = `${paragraphHeight + 30}px`;
      document.querySelector('.res-container').style.height = `${paragraphHeight + 30}px`;
    console.log("paragraph height is bigger ")
        
    }

    resImg.classList.add('object-position');

  }
  
}




function PreviewFull(){
  let text = document.querySelector('.text-box');
  text.style.display = "none";
  modal.style.display = "block";

  // TEXT
  componentTitle();
  
  // IMAGE
  let resImg = new Image();
  resImg.classList.add('d');
  resImg.src = b;
  resCont.append(resImg);

  // end of appending image in 
 // need to style 
  modal.style.setProperty('max-height', 'calc(140vh - 100px)');
  document.querySelector('.wrap').classList.add('flex');
  document.querySelector('.res-container').style.width = "900px";
  document.querySelector('.res-container').style.padding = "30px";
// image title out

//height issue

  let width = document.querySelector('.d').naturalWidth;
 
  if( width < 400){
   
    resImg.classList.add('object-fit_none');
    resImg.classList.add('object-position');
    let height = (document.querySelector('.d').naturalHeight);
    document.querySelector('.res-container').style.height = `${height + 50 }px`;
  }
}

  

/**
 * A function to that downloades image when download button is invoked
 * 
 */
document.querySelector(".close-btn").addEventListener("click", function(){
  resetPreview();
  
});

document.querySelector(".save-btn").addEventListener('click', ()=>{
  let imgPath = Crop();
  
  var name = document.getElementsByName("Name")[0].value;
  saveAs(imgPath,name);


})

// functions to add . .  .
// default back to half width preview

function resetPreview(){

  modal.style.display = "none";
  document.querySelector('.text-box').style.display = "block";
  // resCont.style.display = "grid";
  resCont.innerHTML = "";
  

  document.querySelector('.wrap').classList.remove('flex');
  document.querySelector('.res-container').style.width = "450px";
  document.querySelector('.text-box').style.width = "450px";
  document.querySelector('.res-container').style.padding = "30px 30px 30px 15px";
  document.querySelector('.res-container').style.height = "auto";
  document.querySelector('.text-box').style.height = "auto";
}

function componentTitle(){
  let txtB = document.createElement('div');
  txtB.classList.add('txt-b');
  txtB.innerHTML = " New Component Title"
  resCont.append(txtB);
}




