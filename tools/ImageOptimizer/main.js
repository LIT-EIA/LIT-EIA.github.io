/**
 * Declare const Inputs and use querySelector to return element
 * convas.getContext("2d") allows you to draw things in the canvas such as images and text and we can resize images as well
 * Delcare 2 variables:
 * 1) ImageLoaded refers to the image that is currently in use - whenever image is changed it is stored in this variable.
 * 2) WTHR refers to the orginial width to height ratio  of the ImageLoaded - it helps with the Apsect Ratio eg 150x100 = 1.5 w to h ratio used to maintain aspect ratio
 */
const pixel = document.querySelector(".pixelated");
const fileInput = document.querySelector(".upload");
const widthInput = document.querySelector(".WidthSize");
const heightInput = document.querySelector(".HeightSize");
const aspectChecked = document.querySelector(".AspectRatio");
const canvas = document.querySelector(".ImgCanvas");
const canvasCtx = canvas.getContext("2d");

let ImageLoaded, WTHR;

/**
 * addEventListener - listens for when user chooses new file 
 * FileReader allows us to read the file as a data URL - which is a string of characters in base 64 and represents the data for the image
 * "load" addEventListener - whenever the image is finished loading it runs the Img function
 * (e).target.files refers to the ImageLoaded image and the target propery returns the element triggered in this case the files
 * readAsDataURL - read as Data URL
 */
fileInput.addEventListener("change", (e) => { 
  const readerFile = new FileReader();

  readerFile.addEventListener("load", () => {
    Img(readerFile.result);
  });

  readerFile.readAsDataURL(e.target.files[0]);
});



/**
 * Changes the image to the width and height value inputted in the resizeImg 
 * 
 */

widthInput.addEventListener("change", () => {
if (!ImageLoaded) return; //if there is no image loaded - nothing happens 

  const heightValue = aspectChecked.checked // checks to see if aspect ratio check box is checked then calculate the new height based on the w to h ratio

    ? widthInput.value / WTHR // calculate the new height by dividing the orginial width with the orginial width to height 
    : heightInput.value; // if user did not choose the aspect ratio checkbox then it returns default value

  resizeImg(widthInput.value, heightValue);  // whatever value is set it is going to resize it accordingly 
});

heightInput.addEventListener("change", () => {
  if (!ImageLoaded) return;

  const widthValue = aspectChecked.checked
    ? heightInput.value * WTHR // 
    : widthInput.value;

  resizeImg(widthValue, heightInput.value);
});


/**
 * Creates new image object and listens to the "loaded" image 
 * WTHR  divides the width to height 
 * resizeImg function loads the images orginial default width and height 
 * src allows to take the data URL as an html tag and can display the image inside the canvas 
* @param {*} imageSrc
 */
function Img(imageSrc) {
  ImageLoaded = new Image();

  ImageLoaded.addEventListener("load", () => {
    WTHR = ImageLoaded.width / ImageLoaded.height;

    resizeImg(ImageLoaded.width, ImageLoaded.height);


  });

  ImageLoaded.src = imageSrc;
}

/**
 * takes the ImageLoaded and apply to the canvas along with setting width and height 
 * canvas.DrawImage allows to draw image on the canvas 
 * @param {*} width 
 * @param {*} height 
 */
function resizeImg(width, height) {

  canvas.width = Math.floor(width); // canvas width is the width of the image values passed 
  canvas.height = Math.floor(height); // canvas height is the height of the image values passed 

  widthInput.value = Math.floor(width); //updating width and height input with the correct values (default width and height of image)
  heightInput.value = Math.floor(height); 
pixelated(ImageLoaded.width, widthInput.value);
  canvasCtx.drawImage(ImageLoaded, 0, 0, Math.floor(width), Math.floor(height)); // draws on the canvas 
}



  function downloadImage() {

    var name = document.getElementsByName("Name")[0].value;

    if (name && name !=='') {
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.href = canvas.toDataURL(); 
      a.download = name;
      a.click();

    document.body.removeChild(a);
      }

    window.location.reload();
  }


  function pixelated(a, selectedWidth){

    if (a < selectedWidth ){
      console.log('image will be pixelated')
      pixel.style.display = 'block';
    // pixel.innerHTML = "<p>Warning : Image will be pixelated </p>";
    }
  }


  
