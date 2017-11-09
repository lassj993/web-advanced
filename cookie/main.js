 // line drawing
 function setup() {
    createCanvas(1450, 4080);
    }

  function draw() {
    //checks if cookie exists

    //if cookie exsits:
    // pull array of prexisting lines and iterate through: 
    //for loop that draws all of the lines with the preexisting mouseY and mouseX

  if (mouseIsPressed) {
    fill(0, 255, 0);
  } else {
    fill(255, 255, 255);
  }
  line(1500, mouseY, -70, mouseX);

  // mouseY and mouseX coordinates update the array in the cookie
  }
// end of line drawing

// auto scroll
var currentpos=0,alt=1,curpos1=0,curpos2=-1

function initialize(){
  startit()
  }
function scrollwindow(){
  if (document.all)
  temp=document.body.scrollTop
  else
  temp=window.pageYOffset
  if (alt==0)
  alt=1
  else
  alt=0
  if (alt==0)
  curpos1=temp
  else
  curpos2=temp
  if (curpos1!=curpos2){
  if (document.all)
  currentpos=document.body.scrollTop+1
  else
  currentpos=window.pageYOffset+1
  window.scroll(0,currentpos)
  }
  else{
  currentpos=0
  window.scroll(0,currentpos)
  }
  }
  function startit(){
  setInterval("scrollwindow()",20)
  }
  window.onload=initialize



// color gradient
var colors = new Array([62,35,255],[60,255,60],[255,35,98],[45,175,230],[255,0,255],[255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3,4];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
  var c0_0 = colors[colorIndices[4]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";

   $('body').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[4];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[4] = ( colorIndices[4] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }

    
    // set var thisColor equal to last gradient,
    // then set cookie 'color' to thisColor

    if (Cookies.getJSON('colors')){ // if the cookie already exists
      var thisColor;

      var update = Cookies.getJSON('colors');

      if (thisColor = colorIndices[0,3]) {

        step %= 1;
        colorIndices[2] = colorIndices[4];
        colorIndices[1] = colorIndices[3];
        
        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[2] = ( colorIndices[2] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[4] = ( colorIndices[4] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
                      console.log("heieie");


          }

          Cookies.set('colors', thisColor, { expires: 1});
          console.log("bye");


    } else { // if the cookie doesn't already exist
    
    Cookies.set('colors', thisColor, {expires: 1}); // set the cookie 'circles', define its value, and its expiration date
    
}

   
}

setInterval(updateGradient,20);
// end of gradient 

// cookies

// use color that they leave from and use that as new gradient?

// 1. checks if cookie exists


// end of cookies


