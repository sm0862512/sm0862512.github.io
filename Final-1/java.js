var timerID
var timerID2
function startit()
{
  light()
timerID = setInterval(car1, 50)
timerID2 = setInterval(car2, 50 )
}


var elem = document.getElementById('car1') 
var pos = 0 
var leftpos = 0 


var elem2 = document.getElementById('car2') 
var pos2 = 0 
var leftpos2 = 0 
var elem3 = document.getElementById('green')
var elem4 = document.getElementById('red')



//*** ALGORITHM ****/
var y=1;

//functions
function car2()
{
  
  leftpos2 += (Math.ceil(Math.random()*50)) * y
  
  elem2.style.left = leftpos2 + "px" 



  if (leftpos2 > 1175) 
  {
    elem2.style.display = "none"
    elem.style.display = "none"
    console.log(1)
    clearInterval(timerID)
    clearInterval(timerID2)
    document.write("car 1 wins")
    elem1.style.display = "flex"
  }
}

//*** ALGORITHM ****/
var y2=1;


function car1()
{
  
  



  leftpos += (Math.ceil(Math.random()*50)) * y2
 
  elem.style.top = pos + "px" 
  elem.style.left = leftpos + "px" 


  if (leftpos > 1175) 
  {
    elem2.style.display = "none"
    elem.style.display = "none"
    console.log(2)
    clearInterval(timerID)
    clearInterval(timerID2)
    document.write("car 2 wins")
    elem2.style.display = "flex"
    car3()
  }
}


function light()
{
  elem3.style.display = "flex"
  elem3.src = "green.jpg"
  elem4.style.display = "none"
}
window.onload = function(){
  elem4.src = "red.jpg"
  elem3.style.display = "none"
}
