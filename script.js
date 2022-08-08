// when you press answer button, container will change 
//to green or red depending on whether or not you select the correct answer.

// first get the button press to trigger the color change of container.
// assign green color to correct answer and red color to wrong answers.

// reset or reload the game with button to start over. 


const buttonPress = document.querySelector(".button-grid");
const containerChange = document.querySelector(".question-container");
const rightAnswerButton = document.querySelectorAll(".right-answer");
const wrongAnswerButton = document.querySelectorAll(".wrong-answer");

const handleCorrectAnswerPress = (event) => {
    containerChange.style.backgroundColor = "green";
    buttonPress.style.backgroundColor = "green";
  
  // event.target.style.backgroundColor = "green"
  // document.body.style.backgroundColor = "green"
};

for (let i = 0; i < rightAnswerButton.length; i++) {
  rightAnswerButton[i].addEventListener("click", handleCorrectAnswerPress);
};

const handleWrongAnswerPress = (event) => {
  containerChange.style.backgroundColor = "red";
  buttonPress.style.backgroundColor = "red";

// event.target.style.backgroundColor = "green"
// document.body.style.backgroundColor = "green"

};

for (let i = 0; i < wrongAnswerButton.length; i++) {
wrongAnswerButton[i].addEventListener("click", handleWrongAnswerPress);
};
