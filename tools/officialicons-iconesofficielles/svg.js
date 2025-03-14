	var icon = $("#iconSelector");
	var iconColor = $("#iconColorSelector");
	var backgroundColor = $("#bgColorSelector");
	var iconSize = $("#sizeSelector");
		
	var icons = [];
	var iconsX = [];
	var iconsY = [];


	//Calculation
	icons.push(new Path2D('M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z'));

	//Formula
	icons.push(new Path2D('M571.31 251.31l-22.62-22.62c-6.25-6.25-16.38-6.25-22.63 0L480 274.75l-46.06-46.06c-6.25-6.25-16.38-6.25-22.63 0l-22.62 22.62c-6.25 6.25-6.25 16.38 0 22.63L434.75 320l-46.06 46.06c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L480 365.25l46.06 46.06c6.25 6.25 16.38 6.25 22.63 0l22.62-22.62c6.25-6.25 6.25-16.38 0-22.63L525.25 320l46.06-46.06c6.25-6.25 6.25-16.38 0-22.63zM552 0H307.65c-14.54 0-27.26 9.8-30.95 23.87l-84.79 322.8-58.41-106.1A32.008 32.008 0 0 0 105.47 224H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h43.62l88.88 163.73C168.99 503.5 186.3 512 204.94 512c17.27 0 44.44-9 54.28-41.48L357.03 96H552c13.25 0 24-10.75 24-24V24c0-13.26-10.75-24-24-24z'));

	//Go To
	icons.push(new Path2D('M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z'));
	
	//Legislation
	icons.push(new Path2D('M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z'));
	
	//Nice to Know
	icons.push(new Path2D('M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z'));

	//Checkmark
	icons.push(new Path2D('M261.73,402.28c-.69.05-1.38.08-2.07.08a28,28,0,0,1-21.34-9.89L130.38,265.12a28,28,0,1,1,42.7-36.19l83.08,98,178.23-287a32.45,32.45,0,0,0-5.87-.54H62.92a32.5,32.5,0,0,0-32.5,32.5V449.47A32.5,32.5,0,0,0,62.92,482h365.6a32.5,32.5,0,0,0,32.5-32.5V103.16l-177.58,286A28,28,0,0,1,261.73,402.28Z M483,14.64a28,28,0,0,0-38.54,9l-10.1,16.26a32.5,32.5,0,0,1,26.63,32v31.28l31-50A28,28,0,0,0,483,14.64Z '));
	
	//Book
	icons.push(new Path2D('M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z'));
	
	//Calculate
	// Error with the code?
	icons.push(new Path2D('M27.660000000000025,256a220.7,220.7 0 1,0 441.4,0a220.7,220.7 0 1,0 -441.4,0 M324.61,225.24h-9.39a7.53,7.53,0,0,1-7.53-7.52V196.67a7.52,7.52,0,0,0-7.52-7.52H278.93a7.53,7.53,0,0,1-7.52-7.53v-9.77a7.52,7.52,0,0,1,7.52-7.52h21.24a7.52,7.52,0,0,0,7.52-7.53V135.57a7.53,7.53,0,0,1,7.53-7.53h9.39a7.53,7.53,0,0,1,7.53,7.53V156.8a7.52,7.52,0,0,0,7.52,7.53h21.42a7.53,7.53,0,0,1,7.53,7.52v9.77a7.53,7.53,0,0,1-7.53,7.53H339.66a7.52,7.52,0,0,0-7.52,7.52v21.05A7.53,7.53,0,0,1,324.61,225.24Z M210.91,340.73H139q-6.83,0-10.38-3.72a13.32,13.32,0,0,1-3.55-9.59,13.66,13.66,0,0,1,3.46-9.71Q132,314,139,314h71.92q7,0,10.47,3.72a15.27,15.27,0,0,1,.05,19.3Q218,340.73,210.91,340.73Z M187.1,223.64l-16.23-23.85-16.64,23.85a42.42,42.42,0,0,1-6.11,7.14,9.43,9.43,0,0,1-6.35,2.13,10.54,10.54,0,0,1-7.26-2.67,8,8,0,0,1-3-6.11c0-2.34,1.53-5.71,4.59-10.08l20.25-29-18-24.18q-4.68-6-4.67-10.42a7.83,7.83,0,0,1,2.78-6,10.43,10.43,0,0,1,7.3-2.54,9.7,9.7,0,0,1,6.52,2.21,41.36,41.36,0,0,1,6,7l14.51,19.84L185,151.09a38.4,38.4,0,0,1,6.11-7.05,9.78,9.78,0,0,1,6.44-2.13,10.83,10.83,0,0,1,7.33,2.5,7.69,7.69,0,0,1,2.91,6,10.53,10.53,0,0,1-1.19,4.88,37,37,0,0,1-3.64,5.54L185,185l20.25,29Q210,220.86,210,224.3a7.76,7.76,0,0,1-2.95,6.06,10.78,10.78,0,0,1-7.3,2.55,9.85,9.85,0,0,1-6.52-2.22A38,38,0,0,1,187.1,223.64Z M368.63,327.46h0a12.41,12.41,0,0,1-12.41,12.41H283.84a12.41,12.41,0,0,1-12.41-12.41h0a12.41,12.41,0,0,1,12.41-12.41h72.38A12.41,12.41,0,0,1,368.63,327.46ZM320.13,303a11.76,11.76,0,0,1-6.4-1.94,15.52,15.52,0,0,1-5-5.11,12.07,12.07,0,0,1-1.94-6.3q0-6.35,4-9.9a14,14,0,0,1,18.71,0q4,3.61,4,9.86A13.58,13.58,0,0,1,320.13,303Zm0,75.51a11.66,11.66,0,0,1-6.45-2,16.31,16.31,0,0,1-5-5.11,11.94,11.94,0,0,1-1.89-6.3q0-6.26,4-9.81a14,14,0,0,1,18.71.05,12.44,12.44,0,0,1,4,9.76,13,13,0,0,1-3.93,9.42A12.68,12.68,0,0,1,320.13,378.52Z'));
	
	//Clock
	icons.push(new Path2D('M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z'));

	//STOP! Hammer Time!
	icons.push(new Path2D('M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z'));	

	//Desktop
	icons.push(new Path2D('M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z'));
	
	//Exclamation Circle
	icons.push(new Path2D('M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'));
	
	//Folder
	icons.push(new Path2D('M527.9 224H480v-48c0-26.5-21.5-48-48-48H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h400c16.5 0 31.9-8.5 40.7-22.6l79.9-128c20-31.9-3-73.4-40.7-73.4zM48 118c0-3.3 2.7-6 6-6h134.1l64 64H426c3.3 0 6 2.7 6 6v42H152c-16.8 0-32.4 8.8-41.1 23.2L48 351.4zm400 282H72l77.2-128H528z'));
	
	//Globe
	icons.push(new Path2D('M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z'));
	
	//Headset
	icons.push(new Path2D('M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z'));
	
	//Hourglass
	icons.push(new Path2D('M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-75.078 384H99.08c17.059-46.797 52.096-80 92.92-80 40.821 0 75.862 33.196 92.922 80zm.019-256H99.078C91.988 108.548 88 86.748 88 64h208c0 22.805-3.987 44.587-11.059 64z'));
	
	//Key
	icons.push(new Path2D('M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z'));
	
	//Lightbulb
	//icons.push(new Path2D('M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z'));
	
	//List Alt
	icons.push(new Path2D('M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z'));
	
	//Network
	icons.push(new Path2D('M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z'));
	
	//Paperclip
	icons.push(new Path2D('M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z'));
	
	//Pencil
	icons.push(new Path2D('M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z'));
	
	//Poll
	icons.push(new Path2D('M448 432V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zM112 192c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h128c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16H112zm0 96c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16H112zm0 96c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-64z'));
	
	//Puzzle-Piece
	icons.push(new Path2D('M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z'));
	
	//Question Circle
	icons.push(new Path2D('M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z'));
	
	//Search
	icons.push(new Path2D('M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'));
	
	//Sticky Note
	icons.push(new Path2D('M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0 0 33.941-14.059l83.882-83.882A48 48 0 0 0 448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z'));
	
	//Thumbs Up
	icons.push(new Path2D('M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z'));
	
	//Example
	icons.push(new Path2D('M0,220.7 a220.7,220.7,0,1,0,441.4,0 a220.7,220.7,0,1,0,-441.4,0 M196.93,220.56 H122.74 c-0.07,1.17,-0.1,2.06,-0.1,2.68 q0,10.92,6.23,17.62 a20,20,0,0,0,15.2,6.69 q14.73,0,23,-15.25 l26.48,4.43 q-7.72,16,-20.66,24 a54.12,54.12,0,0,1,-29,8 q-22.07,0,-35.86,-14 T94.2,217.78 a67.24,67.24,0,0,1,12.47,-40 q17,-23.7,48.53,-23.7 q20.09,0,31.94,12.41 T199,201.29 A82.7,82.7,0,0,1,196.93,220.56 m-24.94,-18 c0.07,-1.31,0.11,-2.31,0.11,-3 q0,-12.16,-5.46,-18.24 T152,175.22 a23.24,23.24,0,0,0,-16.44,6.9 q-7.26,6.91,-9.84,20.41 Z M262.35,235.39 l-27.2,30.71 H198.88 l50.59,-56.05 l-27.82,-53.38 h31.43 l16,31.22 l27.72,-31.22 h36 l-50.8,56.78 l27.62,52.65 H278.12 Z M335.42,238.12 h29.26 l-6,28.54 H328.44Z'));
	icons.push(new Path2D('M0,220.7a220.7,220.7 0 1,0 441.4,0a220.7,220.7 0 1,0 -441.4,0 M196.93,214H122.7c-.07,1.17-.1,2.06-.1,2.68q0,10.92,6.23,17.62A20,20,0,0,0,144,241q14.73,0,23-15.25l26.48,4.43q-7.72,16-20.66,24a54.14,54.14,0,0,1-29,8q-22.07,0-35.86-14t-13.79-37a67.26,67.26,0,0,1,12.47-40q17-23.7,48.53-23.69,20.09,0,31.94,12.41T199,194.7A82.51,82.51,0,0,1,196.93,214ZM172,196c.07-1.3.11-2.3.11-3q0-12.15-5.46-18.23T152,168.64a23.24,23.24,0,0,0-16.44,6.9q-7.26,6.9-9.84,20.4Z M210.42,265.27l31.22,4.53q0,4.74,1.55,7.16a12,12,0,0,0,5,4.12c2.3,1.14,5.44,1.7,9.43,1.7q9.36,0,15-3.71,4.22-2.88,6.9-9.27,1.65-4,4.23-17.52l1-5.15Q269.39,259.91,253,259.91q-16.06,0-26.38-11.34T216.4,215.4a87.43,87.43,0,0,1,7-35.35q7-16.06,19.68-24.31t25.86-8.24a36.54,36.54,0,0,1,20,5.76,38.59,38.59,0,0,1,14.11,16.18l4.13-19.37h27.71l-19,91.19q-4.63,21.94-7.83,31.32a55.15,55.15,0,0,1-7.31,14.94,35.58,35.58,0,0,1-10.41,9.33,45.75,45.75,0,0,1-14.84,5.41A98.48,98.48,0,0,1,257,303.9q-23.19,0-35-7.93t-11.85-26.38A34.59,34.59,0,0,1,210.42,265.27Zm34.83-52.86q0,12.47,5.62,19A17.76,17.76,0,0,0,264.93,238q7.72,0,15-5.87t11.13-16.69a62,62,0,0,0,3.86-20.92q0-11.64-6.28-18.75t-14.53-7.11q-7.94,0-14.58,6.28t-11,19.37A59.11,59.11,0,0,0,245.25,212.41Z M335,231h29.26l-6,28.55H329Z'));



	var arrLang = {
		"en": {
			"CALCULATION": "Calculation",
			"FORMULA": "Formula",
			"GOTO": "Go To",
			"LEGISLATION": "Legislation",
			"NICE": "Nice to Know",
			"CHECKMARK": "Check Mark",
			"BOOK": "Book",
			"CALCULATE": "Calculate",
			"CLOCK": "Clock",
			"HAMMER": "Hammer",
			"DESKTOP": "Desktop",
			"EXCLAMATION": "Exclamation Circle",
			"FOLDER": "Folder",
			"GLOBE": "Globe",
			"HEADSET": "Headset",
			"HOURGLASS": "Hourglass",
			"KEY": "Key",
			"LIGHTBULB": "Lightbulb",
			"LIST": "List-Alt",
			"NETWORK": "Network",
			"PAPERCLIP": "Paperclip",
			"PENCIL": "Pencil",
			"POLL": "Poll",
			"PUZZLE": "Puzzle-Piece",
			"QUESTION": "Question Circle",
			"SEARCH": "Search",
			"NOTE": "Sticky Note",
			"THUMBS": "Thumbs Up",
			"EXAMPLE_en": "Exemple English",
			"EXAMPLE_fr": "Exemple French",

			"COVE": "Deep Cove",
			"VIOLET": "Red Violet",
			"PURPLE": "Royal Purple",
			"MATISSE": "Matisse",
			"ATOLL": "Atoll",
			"WHITE": "Solid White",

			"SELECTICON":"Select icon",
			"SELECTBGCOLOR":"Select Background Colour",
			"SELECTICONCOLOR":"Select Icon Colour",
			"SELECTICONSIZE":"Select Icon Size", 
			"download":"To download right click and save as.",

			"SAVE" : "Download",

			"TITLE": "Official Icons Colour Changer",

			"COPY" : "Copy"

		},
		"fr": {
			"CALCULATION": "Calcul",
			"FORMULA": "Formule",
			"GOTO": "Aller à",
			"LEGISLATION": "Legislation",
			"NICE": "Bon à savoir",
			"CHECKMARK": "Coche",
			"BOOK": "Livre",
			"CALCULATE": "Calculer",
			"CLOCK": "'Horloge",
			"HAMMER": "Marteau",
			"DESKTOP": "Ordinateur",
			"EXCLAMATION": "Cercle d'exclamation",
			"FOLDER": "ficher",
			"GLOBE": "Globe",
			"HEADSET": "Casque",
			"HOURGLASS": "Sablier",
			"KEY": "Clé",
			"LIGHTBULB": "ampoule",
			"LIST": "Liste-Alt",
			"NETWORK": "Réseau",
			"PAPERCLIP": "Trombone",
			"PENCIL": "Crayon",
			"POLL": "Sondage",
			"PUZZLE": "Pièce de Cassetette",
			"QUESTION": "Cercle de questions",
			"SEARCH": "Chercher",
			"NOTE": "Note collante",
			"THUMBS": "Pouces vers le haut",
			"EXAMPLE_en": "Example English",
			"EXAMPLE_fr": "Example French",

			"COVE": "Crique profonde",
			"VIOLET": "Violette rouge",
			"PURPLE": "Violet Royal",
			"MATISSE": "Matisse",
			"ATOLL": "Atoll",
			"WHITE": "Blanc solide",

			"SELECTICON":"Selection l'icône",
			"SELECTBGCOLOR":"Selection la couleur de l'arrière-plan",
			"SELECTICONCOLOR":"Selection la couleur de l'icône",
			"SELECTICONSIZE":"Selection la grandeur de l'icône",
			"download":"Pour télécharger cliquer le bouton droit et sauvegarder.",

			"SAVE" : "Télécharger",

			"TITLE": "Changeur de couleurs des icônes officielles",

			"COPY" : "Copier"
		}
	};


	$(document).ready(function() {
	// The default language is English
		var lang = "en";
		$(".lang").each(function(index, element) {
			$(this).text(arrLang[lang][$(this).attr("key")]);
		});
		$("#en").hide();
		$("#fr").show();
	});

	// get/set the selected language
	$(".translate").click(function() {
		var lang = $(this).attr("id");
	   
		
		$(".lang").each(function(index, element) {
			$(this).text(arrLang[lang][$(this).attr("key")]);
		});

		if(lang == "fr"){
			console.log("if");
			$("#fr").hide();
			$("#en").show();
		}
		else{
			console.log("else");
			$("#fr").show();
			$("#en").hide();
		}
	});

	//get the 
	$("#iconSelector").change(function(){
		$('#alt_EN').html("alt: " + $("#iconSelector option:selected").attr("alten"));
		$('#alt_FR').html("alt: " + $("#iconSelector option:selected").attr("altfr"));
	})

	$("#copyen").click(function() {
		var icon_name;
		icon_name = $(document).find('#iconSelector option:selected').attr("alten");
		console.log(icon_name);
		navigator.clipboard.writeText(icon_name);
		
		// Show success message
		showCheckmark($(this).parent(), "Copied");
	});
	
	$("#copyfr").click(function() {
		var icon_name;
		icon_name = $(document).find('#iconSelector option:selected').attr("altfr");
		console.log(icon_name);
		navigator.clipboard.writeText(icon_name);
		
		// Show success message
		showCheckmark($(this).parent(), "Copié");
	});
	
	// Function to show the checkmark
	function showCheckmark(parentElement, message) {
		// Create checkmark element
		var checkmark = $('<span class="checkmark">✔️ ' + message + '</span>');
		$(parentElement).append(checkmark);
	
		// Fade out and remove the checkmark after 10 seconds
		setTimeout(function() {
			checkmark.fadeOut(1000, function() {
				$(this).remove();
			});
		}, 300);
	}
	

  
	function getLuminance(color) {
		const rgb = parseInt(color.slice(1), 16);
		const r = (rgb >> 16) & 0xff;
		const g = (rgb >> 8) & 0xff;
		const b = (rgb >> 0) & 0xff;
	
		const a = [r, g, b].map(c => {
			c /= 255;
			return (c <= 0.03928) ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
		});
	
		return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
	}
	
	function getContrastRatio(color1, color2) {
		const lum1 = getLuminance(color1);
		const lum2 = getLuminance(color2);
		const brightest = Math.max(lum1, lum2);
		const darkest = Math.min(lum1, lum2);
	
		return (brightest + 0.05) / (darkest + 0.05);
	}
	
	function updateContrastRatio() {
		const transparencyUsed = ($("#bgColorSelector").val() === "rgba(0,0,0,0)" || $("#iconColorSelector").val() === "rgba(0,0,0,0)");
		const iconColor = $("#iconColorSelector").val() === "custom" ? $("#iconColorInput").val() : $("#iconColorSelector").val();
		const bgColor = $("#bgColorSelector").val() === "custom" ? $("#bgColorInput").val() : $("#bgColorSelector").val();
	
		const contrastRatio = getContrastRatio(iconColor, bgColor);
		const resultText = transparencyUsed ? "?" : contrastRatio.toFixed(2);
		const accessibilityLevel = transparencyUsed ? "? 3.1" : contrastRatio >= 3 ? "> 3.1 ☑" : "< 3.1 ⚠";
	
		$("#resultratio").text($('#fr').is(':visible') ? `Contrast: ${resultText} ${accessibilityLevel}` : `Contraste : ${resultText} ${accessibilityLevel}`);
	}
	
	$(document).ready(function() {
		$("#iconColorSelector, #bgColorSelector").change(function() {
			const isCustom = $(this).val() === "custom";
			$(this).next('input[type="color"]').toggle(isCustom);
	
			if (!isCustom) {
				$(this).next('input[type="color"]').val($(this).val());
			}
	
			updateContrastRatio();
		});
	
		$("input[type='color']").on("input", updateContrastRatio);
	});



	let debounceTimeout; // Variable to hold the timeout

	// Function to get the current size value, including custom
	function getCurrentSize() {
		const sizeValue = $("#sizeSelector").val(); // Correctly get value from sizeSelector
		if (sizeValue === "custom") {
			// If "Custom" is selected, use the input value
			console.log(sizeValue);
			return $("#customSizeInput").val(); // Fetch the custom input value if "Custom" is selected
			
		}
		console.log("DNO" + sizeValue);
		return sizeValue; // Return the selected size
		
	}
	
	// Function to get the current color value, including custom for both color pickers
	function getIconColorValue() {
		const iconColorValue = $("#iconColorSelector").val();
		return iconColorValue === "custom" ? $("#iconColorInput").val() : iconColorValue;
	}

	function getBackgroundColorValue() {
		const backgroundColorValue = $("#bgColorSelector").val();
		return backgroundColorValue === "custom" ? $("#bgColorInput").val() : backgroundColorValue;
	}
	// Combined change event handler for all relevant select elements
	$("#iconSelector, #iconColorSelector, #bgColorSelector, #sizeSelector").change(function() {
		clearTimeout(debounceTimeout); // Clear the previous timeout to avoid immediate drawIcon call
	
		debounceTimeout = setTimeout(function() {
			const iconID = icon.find(":selected").val();
			const iconColorValue = getIconColorValue(); // Get current icon color
			const backgroundColorValue = getBackgroundColorValue(); // Get current background color
			const sizeValue = getCurrentSize(); // Get current size, including custom
			
			// Draw the icon with the gathered values
			drawIcon(iconID, iconColorValue, backgroundColorValue, sizeValue);
	
			// Show/hide custom size input and label based on size selection
			if ($("#sizeSelector").val() === "custom") {
				$("#customSizeInput").show().focus(); // Show the input and focus on it
				$("#customSizeLabel").remove(); // Remove any existing label
		
				// Create a new label element next to the input
				const label = $(`<span id="customSizeLabel" style="margin-left: 10px;"> x ` + sizeValue + `</span>`);
				$("#customSizeInput").after(label);
			} else {
				$("#customSizeInput").hide(); // Hide the input if not custom
				$("#customSizeLabel").remove(); // Remove the label when not custom
			}
		}, 20); // Change this value to adjust the debounce timing (200 milliseconds in this example)
	});
	
	// Handle changes for icon color and show/hide color picker
	$("#iconColorSelector").change(function() {
		const selectedValue = $(this).val();
		$("#iconColorInput").toggle(selectedValue === "custom");
	});
	
	// Handle changes for background color and show/hide color picker
	$("#bgColorSelector").change(function() {
		const selectedValue = $(this).val();
		$("#bgColorInput").toggle(selectedValue === "custom");
	});
	
	// Handle the color input change for icon color picker
	$("#iconColorInput").on('input', function() {
		clearTimeout(debounceTimeout); // Clear the previous timer for color picker input
		debounceTimeout = setTimeout(function() {
			const iconID = icon.find(":selected").val();
			drawIcon(iconID, getIconColorValue(), getBackgroundColorValue(), getCurrentSize());
		}, 20); // Debounce timer for input
	});
	
	// Handle the color input change for background color picker
	$("#bgColorInput").on('input', function() {
		clearTimeout(debounceTimeout); // Clear the previous timer for color picker input
		debounceTimeout = setTimeout(function() {
			const iconID = icon.find(":selected").val();
			drawIcon(iconID, getIconColorValue(), getBackgroundColorValue(), getCurrentSize());
		}, 20); // Debounce timer for input
	});

	// Event listener for the custom size input change with debounce
	$("#customSizeInput").on('input', function() {
		clearTimeout(debounceTimeout); // Clear the previous timer
		const customSize = $(this).val();
		
		// Set a new timeout to update after 10 milliseconds
		debounceTimeout = setTimeout(function() {
			if ($.isNumeric(customSize) && customSize > 0) {
				const iconID = icon.find(":selected").val();
				drawIcon(iconID, getIconColorValue(), getBackgroundColorValue(), getCurrentSize());
				$("#customSizeLabel").text(` x ${customSize}`); // Update the label
			}
		}, 20); // Wait for 10 milliseconds
	});

	// Initial call to drawIcon
	const initialSizeValue = getCurrentSize();
	drawIcon(icon.find(":selected").val(), iconColor.find(":selected").val(), backgroundColor.find(":selected").val(), initialSizeValue);

	// Hide custom size input and label when not needed
	$("#sizeSelector").change(function() {
		if ($(this).val() !== "custom") {
			$("#customSizeInput").hide();
			$("#customSizeLabel").remove(); // Remove the label when not custom
		}
	});
	
	
	function drawIcon(iconID, iconColor, bgColor, size)
	{
		const canvas = document.getElementById('canvas');
		const context = canvas.getContext('2d');
		const gridBackground = document.getElementById('gridBackground');
		
		//set the size of the canvas (square)
		canvas.width = 680;
		canvas.height = 680;
		
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		context.beginPath();
		
		//https://stackoverflow.com/questions/59631446/how-to-position-path2d-svg-element-in-canvas
		//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isPointInPath
				
		

		let p = icons[iconID];
				
		var xmax = 0;
		var ymax = 0;
		
		var width = canvas.width;
		var height = canvas.height;
		
		// Center the image
		for(let i = 0; i < width; i++){
			for(let j = 0; j < height; j++){
				if(context.isPointInPath(p, i, j)){
					if(xmax < i){
						xmax = i;
					}
					if(ymax < j){
						ymax = j;
					}
				}
			}
		}
		
		var scaling = size / 680;

		var startingX = scaling * (width - xmax) / 2;
		var startingY = scaling * (height - ymax) / 2;
				
		canvas.width = size;
		canvas.height = size;

		gridBackground.style.width = size + 'px';
		gridBackground.style.height = size + 'px';
		
		context.fillStyle = bgColor;
		context.setTransform(1, 0, 0, 1, 0, 0);
		context.rect(0, 0, size, size);
		context.fill();
		
		context.fillStyle = iconColor;
		context.setTransform(scaling, 0, 0, scaling, startingX, startingY);
		context.fill(p);	
	}


	var button = document.getElementById('savebtn');
	button.addEventListener('click', function (e){
		
		var canvas = $('#canvas').get(0);
		console.log(canvas);
		var dataUrl = canvas.toDataURL('image/png');
		
		var a  = document.createElement('a');
		a.href = dataUrl;

		var icon_name;
		var icon_bgcolor;
		var icon_color;
		var icon_size

		var lang = $('#en').css("display");

    // Get icon name based on selected language
    if (lang == "block") {
        icon_name = $('#iconSelector option:selected').attr("valueFR");
    } else {
        icon_name = $('#iconSelector option:selected').attr("valueEN");
    }

    // Get the background color, accounting for the custom option
    icon_bgcolor = getBackgroundColorValue(); // This function already handles custom
    // Get the icon color, accounting for the custom option
    icon_color = getIconColorValue(); // This function already handles custom

    // Get size value, including handling for custom size
    icon_size = getCurrentSize(); // This function already handles custom size

		a.download = icon_name + '_' + icon_bgcolor + '_' + icon_color + '_' + icon_size + '.png';
		a.click();           
		a.remove();
	});