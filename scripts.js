
// function to get the users name 

let myName;

function getName(){
    myName = prompt("What is your name","Sam");
}

// function to get the users time and say hello

function getTime(){
    let time = prompt("What is the time?","11");

    let message;

    if(time <= 11){
        message = "Good morning, " + myName
    } else if(time <= 18){
        message = "It isn't morning! Boo! Afternoon, " + myName
    } else if(time < 24){
        message = "It's kind late, " + myName
    } else {
        message = "That's not a real time! Goodbye"
    }

    document.write(message)
}

// Function to make a user guess a number

function guessNumber(){
    let answer;
    
    while(answer != 3){
        answer = prompt("Guess a number between 0 and 10","3");
        if (answer != 3){
            alert("No! Wrong! Try again, idiot");
        } else {
            document.write("Wow! How did you know? Stop reading the source code! >:(");
        }
    }
}


// function to let the user rate a website

function getRating() {
    
    let rating = prompt("Do you like my website. Say yes or else. Except its on a scale of 1-5, not yes or no.","5");
    let output = "";

    while (!(rating > 0 && rating <= 5)) {
        alert("Don't be clever");
        rating = prompt("Do you like my website. Say yes or else. Except its on a scale of 1-5, not yes or no.","5");
    }
        
    output = output + "<marquee><img src='imgs/star.png' class='star' /></marquee>"
    document.write(output.repeat(rating));
}



function getRating() {

    let rating = prompt("Do you like my website. Say yes or else. Except its on a scale of 1-5, not yes or no.","5");
    let output = "";

    // validate rating is correct by checking that the rating is NOT between 1 and 5. If the rating is 'correct' it wont run at all. 
    while (!(rating > 0 && rating <= 5)) {
        alert("Don't be clever");
        rating = prompt("Do you like my website. Say yes or else. Except its on a scale of 1-5, not yes or no.","5");
    }

    // now, we have a valid rating and we want to build up our output string 
    for (let i = 0; i < rating; i++) {
        output = output + "<marquee><img src='imgs/star.png' class='star' /></marquee>"
    }

    // print itself
    document.write(output)
}














/*

Ok, the getRating function was super tough for me to get right, but I got there eventually. I started with pretty much a copy of Tims code from the morning lecture, then tried to add 
to the conditional to check if the number was between 5 and 0. 
Some interesting things I learned doing this. 
    - You can't multiply a string and a number like you can in python. I used the .repeat function and passed it the rating variable to get my stars to show again. For a while, I had
    a nicely styled NaN error there instead. 
    - 

*/



// --------------------------------------------------------- how to make a while loop with a for loop

// for (;!(ratomg > 0 && rating <= 5);) {
    // so on

// -------------------------------------------------------

// use for loops for n number times, or iterating over list. 
// while for everything else 



// <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Freepik - Flaticon</a>



// variable names have to one word.
// This code above is very wet - we're repeating ourselves. Let's assign a message to it
// could use multiple files for multiple calls if you want to write multiple times. 
// trying to use a selector :(

/*
function letsShop()
    let yourShop = prompt("Have you ordered something?");

    if (yourShop = "yes"){
        document.querySelector(#shop).insertAdjacentHTML("beforeend", '<h4>See your shopping basket</h4>');
    }else{
    console.log("is this working??")
    }
return 
*/
// Ctrl + H to replace. Ctrl + D to highlight repeats
