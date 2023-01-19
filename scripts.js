
// function to get the users name 

let myName;

function getName(){
    myName = prompt("What is your name","please?");
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




















// let myName = "Sam";

// console.log(myName);

// variable names have to one word. 

// let yourCookies = prompt("Accept cookies? They're fresh out the oven","");

// let yourName = prompt("What is your name?", "Please enter a name");

// console.log(yourName);

// this is about if statements. 

// if(10  8){
//     console.log("That true!");
// }else{
//     console.log("Actually, thats not true!");
// }


// function getName(){
//     let myName = prompt("What is your name","please?");
//     return myName
// }

// let theTime = prompt("What time is it? In 24 hrs pls","10");

// let message;

// if (theTime <= 11){
//     // console.log("Good morning "+ myName + "!");
//     message = "Good morning, "+ myName + "!"
// }else if(theTime <= 18){
//     message = "it isn't morning! boo! It's afternoon, " + myName
// }else if(theTime < 24){
//     message = "Good evening " + myName + "! It's nearly morning!"
// }else{
//     message = myName + ", that isn't a valid time! >:("
// }

// This code above is very wet - we're repeating ourselves. Let's assign a message to it

// document.write(message);

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

// A function is a block of reusable code that we can call multiple times. 

// Ctrl + H to replace. Ctrl + D to highlight repeats
