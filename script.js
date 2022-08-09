const bgButtonColor1 = document.querySelector(".button-grid");
const bgButtonColor2 = document.querySelector(".button-grid-two");
const bgButtonColor3 = document.querySelector(".button-grid-three");
const bgButtonColor4 = document.querySelector(".button-grid-four");
const bgButtonColor5 = document.querySelector(".button-grid-five");
const containerChange = document.querySelector(".question-container");
const containerChangeTwo = document.querySelector(".question-container-two");
const containerChangeThree = document.querySelector(".question-container-three");
const containerChangeFour = document.querySelector(".question-container-four");
const containerChangeFive = document.querySelector(".question-container-five");
const rightAnswerButtonOne = document.querySelector(".right-answer-one");
const wrongAnswerButtonOne = document.querySelectorAll(".wrong-answer-one");
const rightAnswerButtonTwo = document.querySelector(".right-answer-two");
const wrongAnswerButtonTwo = document.querySelectorAll(".wrong-answer-two");
const rightAnswerButtonThree = document.querySelector(".right-answer-three");
const wrongAnswerButtonThree = document.querySelectorAll(".wrong-answer-three");
const rightAnswerButtonFour = document.querySelector(".right-answer-four");
const wrongAnswerButtonFour = document.querySelectorAll(".wrong-answer-four");
const rightAnswerButtonFive = document.querySelector(".right-answer-five");
const wrongAnswerButtonFive = document.querySelectorAll(".wrong-answer-five");

const handleCorrectAnswerPress = (event) => {

  // const element = event.target
    containerChange.style.backgroundColor = "green";
    bgButtonColor1.style.backgroundColor = "green";

  
  // event.target.style.backgroundColor = "green"
  // document.body.style.backgroundColor = "green"
};

rightAnswerButtonOne.addEventListener("click", handleCorrectAnswerPress);
  

// const handleWrongAnswerPress2 = (event) => {
//     const element = event.target;
//     parent = element.parentElement;
//     parent.classList.remove("correct");
//     parent.classList.add("incorrect");

  
  

  

// //event.target.style.backgroundColor = "green"
// // document.body.style.backgroundColor = "green"

// };
const handleWrongAnswerPress = (event) => {
  containerChange.style.backgroundColor = "red";
  bgButtonColor1.style.backgroundColor = "red";
  
  

  

//event.target.style.backgroundColor = "green"
// document.body.style.backgroundColor = "green"

};

for (let i = 0; i < wrongAnswerButtonOne.length; i++) {
wrongAnswerButtonOne[i].addEventListener("click", handleWrongAnswerPress);
};



const handleCorrectAnswerPressTwo = (event) => {
  containerChangeTwo.style.backgroundColor = "green";
  bgButtonColor2.style.backgroundColor = "green";

// event.target.style.backgroundColor = "green"
// document.body.style.backgroundColor = "green"
};

rightAnswerButtonTwo.addEventListener("click", handleCorrectAnswerPressTwo);


const handleWrongAnswerPressTwo = (event) => {
containerChangeTwo.style.backgroundColor = "red";
bgButtonColor2.style.backgroundColor = "red";

//  event.target.style.backgroundColor = "green"
// document.body.style.backgroundColor = "green"

};

for (let i = 0; i < wrongAnswerButtonTwo.length; i++) {
wrongAnswerButtonTwo[i].addEventListener("click", handleWrongAnswerPressTwo);
};

const handleCorrectAnswerPressThree = (event) => {
  containerChangeThree.style.backgroundColor = "green";
  bgButtonColor3.style.backgroundColor = "green";

// event.target.style.backgroundColor = "green"
// document.body.style.backgroundColor = "green"
};

rightAnswerButtonThree.addEventListener("click", handleCorrectAnswerPressThree);


const handleWrongAnswerPressThree = (event) => {
containerChangeThree.style.backgroundColor = "red";
bgButtonColor3.style.backgroundColor = "red";

//  event.target.style.backgroundColor = "green"
// document.body.style.backgroundColor = "green"

};

for (let i = 0; i < wrongAnswerButtonThree.length; i++) {
wrongAnswerButtonThree[i].addEventListener("click", handleWrongAnswerPressThree);
};




const handleCorrectAnswerPressFour = (event) => {
  containerChangeFour.style.backgroundColor = "green";
  bgButtonColor4.style.backgroundColor = "green";

// event.target.style.backgroundColor = "green"
// document.body.style.backgroundColor = "green"
};

rightAnswerButtonFour.addEventListener("click", handleCorrectAnswerPressFour);


const handleWrongAnswerPressFour = (event) => {
containerChangeFour.style.backgroundColor = "red";
bgButtonColor4.style.backgroundColor = "red";

//  event.target.style.backgroundColor = "green"
// document.body.style.backgroundColor = "green"

};

for (let i = 0; i < wrongAnswerButtonFour.length; i++) {
wrongAnswerButtonFour[i].addEventListener("click", handleWrongAnswerPressFour);
};




const handleCorrectAnswerPressFive = (event) => {
  containerChangeFive.style.backgroundColor = "green";
  bgButtonColor5.style.backgroundColor = "green";

// event.target.style.backgroundColor = "green"
// document.body.style.backgroundColor = "green"
};

rightAnswerButtonFive.addEventListener("click", handleCorrectAnswerPressFive);


const handleWrongAnswerPressFive = (event) => {
containerChangeFive.style.backgroundColor = "red";
bgButtonColor5.style.backgroundColor = "red";

//  event.target.style.backgroundColor = "green"
// document.body.style.backgroundColor = "green"

};

for (let i = 0; i < wrongAnswerButtonThree.length; i++) {
wrongAnswerButtonFive[i].addEventListener("click", handleWrongAnswerPressFive);
};
