


/*===============================Stopwatch==========================*/


//Define vars to hold time values
let seconds = 0;
let minutes = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)

function stopWatch(){

    seconds++;

//Logic to determine when to increment next value

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
    }

//If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    
//Display updated time values to user
document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds;

}



function startStop(){

    if(status == "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}

//Function to reset the stopwatch and table
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    p=1;
    document.getElementById("display").innerHTML = "00:00";
    document.getElementById("startStop").innerHTML = "Start";
    for(var i=1;i<41;i++)
    {var t = document.getElementById(i);
     t.innerHTML=i;
     }
}

/*==========================Click Action============================*/

var p=1;
var box;
function next(box)
{var v = box.innerHTML; 
 k=Number(v);
 if(k==p)
   { if(k==1)
      {if(status=="stopped")
         {startStop();
          box.innerHTML = k + 25;
          }   
       }
     else if(k <= 15)
      box.innerHTML = k + 25;
     else if(k < 40)
      box.innerHTML = "&nbsp &nbsp";
     else if(k == 40)
      {box.innerHTML = "&nbsp &nbsp";
       startStop();
       compare();
       }
    p++;    
   } 
}

/*============================Best Time=============================*/

//Comparing which time is smaller 

var bestT=Number(3600);
var bestArray=[00,00];
function compare()
{var timex= Number(displaySeconds)+Number(60*Number(displayMinutes));
 if (timex<bestT)
     {Number(bestT)=Number(timex);
      bestArray=[(Number(bestT)/60),(Number(bestT)%60)];
     }
 bestTime();
}



//Displaying Best Time

function bestTime()
{
 var best = document.getElementById("display2");
 best.innerHTML = bestArray[0]+ ":" + bestArray[1];

 //best.innerHTML = displayMinutes + ":" + displaySeconds;
}






















