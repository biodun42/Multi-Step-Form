const buttonOne = document.getElementById("one");
const buttonTwo = document.getElementById("two");
const buttonThree = document.getElementById("three");
const buttonFour = document.getElementById("four");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");
const errorMessages = document.querySelectorAll("span");
const nextPage = document.querySelector(".right");
const thirdPage = document.querySelector(".third");
const clickOne = document.getElementById("onee");
const clickTwo = document.getElementById("twoo");
const textOne = document.getElementById("textone");
const textTwo = document.getElementById("texttwo");
const textThree = document.getElementById("textthree");
const none = document.querySelectorAll(".none");
const allCards = document.querySelectorAll(".card");
// This is the second page of the form
let cardOne = document.getElementById("cardone");
let cardTwo = document.getElementById("cardtwo");
let cardThree = document.getElementById("cardthree");
const nextPlan = document.querySelector(".add-ons");
const boxOne = document.getElementById("box-one");
const boxTwo = document.getElementById("box-two");
const boxThree = document.getElementById("box-three");
const tickOne = document.getElementById("tickone");
const tickTwo = document.getElementById("ticktwo");
const tickThree = document.getElementById("tickthree");
const monthOne = document.getElementById("textone-mo");
const monthTwo = document.getElementById("texttwo-mo");
const monthThree = document.getElementById("textthree-mo");
const arcade = document.getElementById("arcade");
const advance = document.getElementById("advance");
const pro = document.getElementById("pro");
const answer = document.getElementById("answer");
const price = document.getElementById("answerOne");
const totalOne = document.getElementById("clickedanswerone");
const totalTwo = document.getElementById("clickedanswertwo");
const online = document.getElementById("online");
const store = document.getElementById("store");
const custom = document.getElementById("custom");
const onlineAnswer = document.getElementById("online-answer");
const largerAnswer = document.getElementById("larger-answer");
const finalPrice = document.getElementById("final-result");
const finalText = document.getElementById("total-text");
const summary = document.querySelector(".summary");
const change = document.getElementById("change");
const lastLast = document.querySelector(".thank-you");

// This is the first page of the form

function theError() {
  let error = false;

  if (nameInput.value === "") {
    nameInput.style.border = "2px solid red";
    errorMessages[0].style.display = "block";
    error = true;
  } else if (/\d/.test(nameInput.value)) {
    nameInput.style.border = "2px solid red";
    errorMessages[0].innerText = "Name should not contain numbers";
    errorMessages[0].style.display = "block";
    error = true;
  } else {
    nameInput.style.border = "2px solid hsl(231, 11%, 63%)";
    errorMessages[0].style.display = "none";
  }

  if (emailInput.value === "") {
    emailInput.style.border = "2px solid red";
    errorMessages[1].style.display = "block";
    error = true;
  } else if (!emailInput.value.includes("@gmail.com")) {
    emailInput.style.border = "2px solid red";
    errorMessages[1].innerText = "Please enter a valid Gmail address";
    errorMessages[1].style.display = "block";
    error = true;
  } else {
    emailInput.style.border = "2px solid hsl(231, 11%, 63%)";
    errorMessages[1].style.display = "none";
  }
  if (numberInput.value === "") {
    numberInput.style.border = "2px solid red";
    errorMessages[2].style.display = "block";
    error = true;
  } else {
    numberInput.style.border = "2px solid hsl(231, 11%, 63%)";
    errorMessages[2].style.display = "none";
  }
  return error;
}
function nextLevel() {
  if (!theError()) {
    nextPage.classList.add("active");
    thirdPage.style.display = "block";
    buttonTwo.style.backgroundColor = "hsl(206, 94%, 87%)";
    buttonTwo.style.color = "hsl(213, 96%, 18%)";
    buttonOne.style.backgroundColor = "transparent";
    buttonOne.style.color = "white";
  }
}
if ((thirdPage.style.display = "none")) {
  buttonOne.style.backgroundColor = "hsl(206, 94%, 87%)";
  buttonOne.style.color = "hsl(213, 96%, 18%)";
} else {
  buttonOne.style.backgroundColor = "transparent";
  buttonOne.style.color = "white";
}

nextPlan.classList.add("active");

let changeToMonth = false;
function changeOne() {
  clickOne.style.display = "none";
  clickTwo.style.display = "block";
  textOne.innerText = "$9/mo";
  textTwo.innerText = "$12/mo";
  textThree.innerText = "$15/mo";
  cardOne.style.border = "2px solid hsl(217, 100%, 97%)";
  cardTwo.style.border = "2px solid hsl(217, 100%, 97%)";
  cardThree.style.border = "2px solid hsl(217, 100%, 97%)";
  none.forEach((none) => {
    none.innerText = "No free gift";
  });
  changeToMonth = true;
}

function changeTwo() {
  clickTwo.style.display = "none";
  clickOne.style.display = "block";
  textOne.innerText = "$90/yr";
  textTwo.innerText = "$120/yr";
  textThree.innerText = "$150/yr";
  cardOne.style.border = "2px solid hsl(217, 100%, 97%)";
  cardTwo.style.border = "2px solid hsl(217, 100%, 97%)";
  cardThree.style.border = "2px solid hsl(217, 100%, 97%)";
  none.forEach((none) => {
    none.innerText = "get one free";
  });
  changeToMonth = false;
}
function previousLevel() {
  thirdPage.style.display = "none";
  nextPage.classList.remove("active");
  buttonOne.style.backgroundColor = "hsl(206, 94%, 87%)";
  buttonOne.style.color = "hsl(213, 96%, 18%)";
  buttonTwo.style.backgroundColor = "transparent";
  buttonTwo.style.color = "white";
  clicked = false;
  changeToMonth = false;
}
let clicked = false;
let cardClickedOne = false;
function clickedCardOne() {
  cardOne.style.border = "2px solid hsl(243, 100%, 62%)";
  cardTwo.style.border = "2px solid hsl(217, 100%, 97%)";
  cardThree.style.border = "2px solid hsl(217, 100%, 97%)";
  clicked = true;
  cardClickedOne = !cardClickedOne;
  if (cardClickedThree === true || cardClickedTwo === true) {
    cardClickedTwo = false;
    cardClickedThree = false;
  }
  cardClickedTwo = false;
  cardClickedThree = false;
}

let cardClickedTwo = false;
function clickedCardTwo() {
  cardTwo.style.border = "2px solid hsl(243, 100%, 62%)";
  cardOne.style.border = "2px solid hsl(217, 100%, 97%)";
  cardThree.style.border = "2px solid hsl(217, 100%, 97%)";
  clicked = true;
  cardClickedTwo = !cardClickedTwo;

  if (cardClickedThree === true || cardClickedOne === true) {
    cardClickedOne = false;
    cardClickedThree = false;
  }
  cardClickedOne = false;
  cardClickedThree = false;
}

let cardClickedThree = false;
function clickedCardThree() {
  cardThree.style.border = "2px solid hsl(243, 100%, 62%)";
  cardOne.style.border = "2px solid hsl(217, 100%, 97%)";
  cardTwo.style.border = "2px solid hsl(217, 100%, 97%)";
  clicked = true;
  cardClickedThree = !cardClickedThree;

  if (cardClickedOne === true || cardClickedTwo === true) {
    cardClickedOne === false;
    cardClickedTwo === false;
  }
  cardClickedOne = false;
  cardClickedTwo = false;
}

function previousPlan() {
  thirdPage.style.display = "block";
  nextPlan.classList.add("active");
  buttonThree.style.backgroundColor = "transparent";
  buttonThree.style.color = "white";
  buttonTwo.style.backgroundColor = "hsl(206, 94%, 87%)";
  buttonTwo.style.color = "hsl(213, 96%, 18%)";
  cardOne.style.border = "2px solid hsl(217, 100%, 97%)";
  cardTwo.style.border = "2px solid hsl(217, 100%, 97%)";
  cardThree.style.border = "2px solid hsl(217, 100%, 97%)";
  clickTwo.style.display = "none";
  clickOne.style.display = "block";
  clicked = false;
  changeToMonth = false;
}

function nextLevelTwo() {
  thirdPage.style.display = "none";
  nextPlan.classList.remove("active");
  buttonThree.style.backgroundColor = "hsl(206, 94%, 87%)";
  buttonThree.style.color = "hsl(213, 96%, 18%)";
  buttonTwo.style.backgroundColor = "transparent";
  buttonTwo.style.color = "white";
  if (changeToMonth === true && clicked === true) {
    monthOne.innerText = "+$1/mo";
    monthTwo.innerText = "+$2/mo";
    monthThree.innerText = "+$2/mo";
  } else if (changeToMonth === false && clicked === true) {
    monthOne.innerText = "+$10/yr";
    monthTwo.innerText = "+$20/yr";
    monthThree.innerText = "+$20/yr";
  } else {
    alert("Please select a plan to continue");
    thirdPage.style.display = "block";
    nextPlan.classList.add("active");
    buttonThree.style.backgroundColor = "transparent";
    buttonThree.style.color = "white";
    buttonTwo.style.backgroundColor = "hsl(206, 94%, 87%)";
    buttonTwo.style.color = "hsl(213, 96%, 18%)";
  }
}

// This is the add-ons section

let clickedBoxOne = false;
function boxPressedOne() {
  if (tickOne.checked) {
    boxOne.style.border = "2px solid hsl(243, 100%, 62%)";
  } else {
    boxOne.style.border = "2px solid hsl(217, 100%, 97%)";
  }
  clickedBoxOne = !clickedBoxOne;
}
let clickedBoxTwo = false;
function boxPressedTwo() {
  if (tickTwo.checked) {
    boxTwo.style.border = "2px solid hsl(243, 100%, 62%)";
  } else {
    boxTwo.style.border = "2px solid hsl(217, 100%, 97%)";
  }
  clickedBoxTwo = !clickedBoxTwo;
}

let clickedBoxThree = false;
function boxPressedThree() {
  if (tickThree.checked) {
    boxThree.style.border = "2px solid hsl(243, 100%, 62%)";
  } else {
    boxThree.style.border = "2px solid hsl(217, 100%, 97%)";
  }
  clickedBoxThree = !clickedBoxThree;
}

tickOne.addEventListener("change", boxPressedOne);
tickTwo.addEventListener("change", boxPressedTwo);
tickThree.addEventListener("change", boxPressedThree);

// This is the third page of the form
function previousLevelTwo() {
  summary.classList.add("active");
  nextPlan.classList.remove("active");
  buttonThree.style.backgroundColor = "hsl(206, 94%, 87%)";
  buttonThree.style.color = "hsl(213, 96%, 18%)";
  buttonFour.style.backgroundColor = "transparent";
  buttonFour.style.color = "white";
}

function changePlan() {
  thirdPage.style.display = "block";
  summary.classList.add("active");
  buttonTwo.style.backgroundColor = "hsl(206, 94%, 87%)";
  buttonTwo.style.color = "hsl(213, 96%, 18%)";
  buttonFour.style.backgroundColor = "transparent";
  buttonFour.style.color = "white";
  clicked = false;
  changeToMonth = false;
  cardClickedOne = false;
  cardClickedTwo = false;
  cardClickedThree = false;
}

function lastPage() {
  summary.classList.add("active");
  lastLast.style.display = "block";
  buttonFour.style.backgroundColor = "transparent";
  buttonFour.style.color = "white";
}

summary.classList.add("active");
function nextLevelThree() {
  summary.classList.remove("active");
  nextPlan.classList.add("active");
  buttonFour.style.backgroundColor = "hsl(206, 94%, 87%)";
  buttonFour.style.color = "hsl(213, 96%, 18%)";
  buttonThree.style.backgroundColor = "transparent";
  buttonThree.style.color = "white";

  // Check how many add-ons are selected
  const addOns = [tickOne.checked, tickTwo.checked, tickThree.checked];
  const countSelected = addOns.filter((checked) => checked).length;

  if (countSelected !== 2) {
    alert(
      countSelected < 2
        ? "Please select at least two add-ons"
        : "You can only select up to two add-ons"
    );
    revertChanges();
  }

  function revertChanges() {
    summary.classList.add("active");
    nextPlan.classList.remove("active");
    buttonFour.style.backgroundColor = "transparent";
    buttonFour.style.color = "white";
    buttonThree.style.backgroundColor = "hsl(206, 94%, 87%)";
    buttonThree.style.color = "hsl(213, 96%, 18%)";
  }

  if (
    clickedBoxOne === true &&
    clickedBoxTwo === true &&
    changeToMonth === false &&
    cardClickedOne === true
  ) {
    onlineAnswer.innerText = "Online service";
    largerAnswer.innerText = "Larger storage";
    answer.innerText = "Arcade (Yearly)";
    price.innerText = "$90/yr";
    totalOne.innerText = "+$10/yr";
    totalTwo.innerText = "+$20/yr";
    finalText.innerText = "Total (per year)";
    finalPrice.innerText = "$120/yr";
  } else if (
    clickedBoxOne === true &&
    clickedBoxThree === true &&
    changeToMonth === false &&
    cardClickedOne === true
  ) {
    onlineAnswer.innerText = "Online service";
    largerAnswer.innerText = "Customizable profile";
    answer.innerText = "Arcade (Yearly)";
    price.innerText = "$90/yr";
    totalOne.innerText = "+$10/yr";
    totalTwo.innerText = "+$20/yr";
    finalText.innerText = "Total (per year)";
    finalPrice.innerText = "$120/yr";
  } else if (
    clickedBoxThree === true &&
    clickedBoxTwo === true &&
    changeToMonth === false &&
    cardClickedOne === true
  ) {
    onlineAnswer.innerText = "Larger storage";
    largerAnswer.innerText = "Customizable profile";
    answer.innerText = "Arcade (Yearly)";
    price.innerText = "$90/yr";
    totalOne.innerText = "+$20/yr";
    totalTwo.innerText = "+$20/yr";
    finalText.innerText = "Total (per year)";
    finalPrice.innerText = "$130/yr";
  } else if (
    clickedBoxOne === true &&
    clickedBoxTwo === true &&
    changeToMonth === false &&
    cardClickedTwo === true
  ) {
    onlineAnswer.innerText = "Online service";
    largerAnswer.innerText = "Larger storage";
    answer.innerText = "Advance (Yearly)";
    price.innerText = "$120/yr";
    totalOne.innerText = "+$10/yr";
    totalTwo.innerText = "+$20/yr";
    finalText.innerText = "Total (per year)";
    finalPrice.innerText = "$150/yr";
  } else if (
    clickedBoxOne === true &&
    clickedBoxThree === true &&
    changeToMonth === false &&
    cardClickedTwo === true
  ) {
    onlineAnswer.innerText = "Online service";
    largerAnswer.innerText = "Customizable profile";
    answer.innerText = "Advance (Yearly)";
    price.innerText = "$120/yr";
    totalOne.innerText = "+$10/yr";
    totalTwo.innerText = "+$20/yr";
    finalText.innerText = "Total (per year)";
    finalPrice.innerText = "$150/yr";
  } else if (
    clickedBoxThree === true &&
    clickedBoxTwo === true &&
    changeToMonth === false &&
    cardClickedTwo === true
  ) {
    onlineAnswer.innerText = "Larger storage";
    largerAnswer.innerText = "Customizable profile";
    answer.innerText = "Advance (Yearly)";
    price.innerText = "$120/yr";
    totalOne.innerText = "+$20/yr";
    totalTwo.innerText = "+$20/yr";
    finalText.innerText = "Total (per year)";
    finalPrice.innerText = "$160/yr";
  } else if (
    clickedBoxOne === true &&
    clickedBoxTwo === true &&
    changeToMonth === false &&
    cardClickedThree === true
  ) {
    onlineAnswer.innerText = "Online service";
    largerAnswer.innerText = "Larger storage";
    answer.innerText = "Pro (Yearly)";
    price.innerText = "$150/yr";
    totalOne.innerText = "+$10/yr";
    totalTwo.innerText = "+$20/yr";
    finalText.innerText = "Total (per year)";
    finalPrice.innerText = "$180/yr";
  } else if (
    clickedBoxOne === true &&
    clickedBoxThree === true &&
    changeToMonth === false &&
    cardClickedThree === true
  ) {
    onlineAnswer.innerText = "Online service";
    largerAnswer.innerText = "Customizable profile";
    answer.innerText = "Pro (Yearly)";
    price.innerText = "$150/yr";
    totalOne.innerText = "+$10/yr";
    totalTwo.innerText = "+$20/yr";
    finalText.innerText = "Total (per year)";
    finalPrice.innerText = "$180/yr";
  } else if (
    clickedBoxThree === true &&
    clickedBoxTwo === true &&
    changeToMonth === false &&
    cardClickedThree === true
  ) {
    onlineAnswer.innerText = "Larger storage";
    largerAnswer.innerText = "Customizable profile";
    answer.innerText = "Pro (Yearly)";
    price.innerText = "$150/yr";
    totalOne.innerText = "+$20/yr";
    totalTwo.innerText = "+$20/yr";
    finalText.innerText = "Total (per year)";
    finalPrice.innerText = "$190/yr";
  } else if (
    clickedBoxOne === true &&
    clickedBoxTwo === true &&
    changeToMonth === true &&
    cardClickedOne === true
  ) {
    onlineAnswer.innerText = "Online service";
    largerAnswer.innerText = "Larger storage";
    answer.innerText = "Arcade (monthly)";
    price.innerText = "$9/mo";
    totalOne.innerText = "+$1/mo";
    totalTwo.innerText = "+$2/mo";
    finalText.innerText = "Total (per month)";
    finalPrice.innerText = "$12/mo";
  } else if (
    clickedBoxOne === true &&
    clickedBoxThree === true &&
    changeToMonth === true &&
    cardClickedOne === true
  ) {
    onlineAnswer.innerText = "Online service";
    largerAnswer.innerText = "Customizable profile";
    answer.innerText = "Arcade (monthly)";
    price.innerText = "$9/mo";
    totalOne.innerText = "+$1/mo";
    totalTwo.innerText = "+$2/mo";
    finalText.innerText = "Total (per month)";
    finalPrice.innerText = "$12/mo";
  } else if (
    clickedBoxThree === true &&
    clickedBoxTwo === true &&
    changeToMonth === true &&
    cardClickedOne === true
  ) {
    onlineAnswer.innerText = "Larger storage";
    largerAnswer.innerText = "Customizable profile";
    answer.innerText = "Arcade (monthly)";
    price.innerText = "$9/mo";
    totalOne.innerText = "+$2/mo";
    totalTwo.innerText = "+$2/mo";
    finalText.innerText = "Total (per month)";
    finalPrice.innerText = "$13/mo";
  } else if (
    clickedBoxOne === true &&
    clickedBoxTwo === true &&
    changeToMonth === true &&
    cardClickedTwo === true
  ) {
    onlineAnswer.innerText = "Online service";
    largerAnswer.innerText = "Larger storage";
    answer.innerText = "Advance (monthly)";
    price.innerText = "$12/mo";
    totalOne.innerText = "+$1/mo";
    totalTwo.innerText = "+$2/mo";
    finalText.innerText = "Total (per month)";
    finalPrice.innerText = "$15/mo";
  } else if (
    clickedBoxOne === true &&
    clickedBoxThree === true &&
    changeToMonth === true &&
    cardClickedTwo === true
  ) {
    onlineAnswer.innerText = "Online service";
    largerAnswer.innerText = "Customizable profile";
    answer.innerText = "Advance (monthly)";
    price.innerText = "$12/mo";
    totalOne.innerText = "+$1/mo";
    totalTwo.innerText = "+$2/mo";
    finalText.innerText = "Total (per month)";
    finalPrice.innerText = "$15/mo";
  } else if (
    clickedBoxThree === true &&
    clickedBoxTwo === true &&
    changeToMonth === true &&
    cardClickedTwo === true
  ) {
    onlineAnswer.innerText = "Larger storage";
    largerAnswer.innerText = "Customizable profile";
    answer.innerText = "Advance (monthly)";
    price.innerText = "$12/mo";
    totalOne.innerText = "+$2/mo";
    totalTwo.innerText = "+$2/mo";
    finalText.innerText = "Total (per month)";
    finalPrice.innerText = "$16/mo";
  } else if (
    clickedBoxOne === true &&
    clickedBoxTwo === true &&
    changeToMonth === true &&
    cardClickedThree === true
  ) {
    onlineAnswer.innerText = "Online service";
    largerAnswer.innerText = "Larger storage";
    answer.innerText = "Pro (monthly)";
    price.innerText = "$15/mo";
    totalOne.innerText = "+$1/mo";
    totalTwo.innerText = "+$2/mo";
    finalText.innerText = "Total (per month)";
    finalPrice.innerText = "$18/mo";
  } else if (
    clickedBoxOne === true &&
    clickedBoxThree === true &&
    changeToMonth === true &&
    cardClickedThree === true
  ) {
    onlineAnswer.innerText = "Online service";
    largerAnswer.innerText = "Customizable profile";
    answer.innerText = "Pro (monthly)";
    price.innerText = "$15/mo";
    totalOne.innerText = "+$1/mo";
    totalTwo.innerText = "+$2/mo";
    finalText.innerText = "Total (per month)";
    finalPrice.innerText = "$18/mo";
  } else if (
    clickedBoxThree === true &&
    clickedBoxTwo === true &&
    changeToMonth === true &&
    cardClickedThree === true
  ) {
    onlineAnswer.innerText = "Larger storage";
    largerAnswer.innerText = "Customizable profile";
    answer.innerText = "Pro (monthly)";
    price.innerText = "$15/mo";
    totalOne.innerText = "+$2/mo";
    totalTwo.innerText = "+$2/mo";
    finalText.innerText = "Total (per month)";
    finalPrice.innerText = "$19/mo";
  }
}
