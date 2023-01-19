// function to change a buttons text

let button = document.getElementById('myBtn');
button.addEventListener("click", btnChange);

function btnChange(){
    if (button.value === "Don't click me!"){
        button.value = "This button doesn't work yet!";
        console.log("this happened")
    } else {
        button.value = "Don't click me!";
    }
}




// if ('#myBtn')
//     console.log("yes");

// function btnChange(){
//     document.getElementById('#myBtn').value = "This button doesn't work yet!";
//     console.log("is this working?");
// }

// if ('#myBtn')
//     console.log("yes")