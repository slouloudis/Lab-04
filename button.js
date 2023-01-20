// function to change a buttons text
// binding the button change function to the click event on myBtn element.

let button = document.getElementById('myBtn');
button.addEventListener("click", btnChange);

function btnChange(){
    if (button.value === "Don't click me!"){
        button.value = "This button doesn't work yet!";
    } else {
        button.value = "Don't click me!";
    }
}

// <---------------------------- Challenge to loop through list of nav bar children  ---------------------------->

// get element id navUl.
//children use an anon function. 
// 1 print inner HTML element of each child 
// then try the event binding shit


// let navUlnumb = document.getElementById('navUl').childElementCount;
// let hmmHTML = document.querySelector("#navUl > li").innerHTML;


// function childNum(){
//     for (let i = 0; i < navUlnumb; i++){
//         console.log(hmmHTML[i])
//     }
// }



// console.log(document.getElementById('navUl')[0].childNodes[1].innerHTML);

let children = document.getElementById('navUl').childNodes;

for (let i = 0; i < children.length; i++) {
    console.log(children[i].innerHTML)
}