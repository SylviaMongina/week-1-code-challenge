const message = document.querySelector("li")
const gradeForm = document.getElementById("gradeForm")
const input =document.getElementById("marks")
let gradeInput=document.querySelector('button')

//Adding an event listener that submits the form when clicked
gradeForm.addEventListener("submit", (event) =>{
    //This prevents the relaoding of a page
 event.preventDefault();
 validateInput(input)
});


function validateInput(input){
    console.log(input)
    console.log(input.value)
//The value property sets or returns the value of the value attribute of a text field.
//Grades guide A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.

    const checkInput = input.value;
    if (checkInput > 79 && checkInput < 100) {
    console.log("A");
    message.textContent = `Your grade is: A`;
    } else if (checkInput >= 60 && checkInput <= 79) {
    console.log("B");
    message.textContent = `Your grade is: B`;
    } else if (checkInput > 49 && checkInput <= 59) {
    console.log("C");
    message.textContent = `Your grade is: C`;
    } else if (checkInput > 40 && checkInput <= 49) {
    console.log("D");
    message.textContent = `Your grade is: D`;
    } else if (checkInput >= 0 && checkInput <= 40) {
    console.log("E");
    message.textContent = `Your grade is: E`;
    } else {
    console.log("error, marks should be between 0 and 100");
    message.textContent = `Error Detected`;
    }
} 