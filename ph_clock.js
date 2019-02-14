"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Paige Mabbitt
   Date: 2.14.19 

   Filename:   ph_clock.js     

*/
//countdown will run every second and be stored in clockID
var clockID = setInterval("countdown()", 1000);
//Set minsLeft to 30, secsLeft to 0, and timeLeft to minutes * 60 plus seconds
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = (minsLeft * 60) + secsLeft;

//round the minutes down, count the seconds, run those values through addLeadingZero to put a zero in front if it is a single digit, insert them into the HTML, make sure the clock isn't at zero, and remove one value from timeLeft 
function countdown() {
    minsLeft = Math.floor(timeLeft / 60);
    secsLeft = timeLeft - (minsLeft * 60);
    var minsString = addLeadingZero(minsLeft); // √
    var secString = addLeadingZero(secsLeft); // √
    document.getElementById("minutes").innerHTML = minsString; // √
    document.getElementById("seconds").innerHTML = secString; // √
    checkTimer();
    timeLeft--;
}

// Tell the user time is up and clear the clock
function stopClock() {
    document.getElementById("TimeHead").insertAdjacentHTML("beforeend", "<br />(Order Expired)");
    clearInterval(clockID);
}


/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}