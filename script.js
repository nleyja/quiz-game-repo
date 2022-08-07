// when you press answer button, container will change 
//to green or red depending on whether or not you select the correct answer.

// first get the button press to trigger the color change of container.
// assign green color to correct answer and red color to wrong answers.

// reset or reload the game with button to start over. 


const buttonPress = document.querySelectorAll(".button");
const containerChange = document.querySelector(".question-container");

const handleButtonPress = (event) => {
  if(buttonPress.innerHTML = "Earth"){
    containerChange.style.backgroundColor = "green";
  } else {
    containerChange.style.backgroundColor = "red";
  }
  
  // event.target.style.backgroundColor = "green"
  // document.body.style.backgroundColor = "green"

   
};

for (let i = 0; i < buttonPress.length; i++) {
  buttonPress[i].addEventListener("click", handleButtonPress);
};