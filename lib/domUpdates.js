const domUpdates =  {

changeDisplayedScreen(section) {
  section.classList.toggle('hidden');
},

displayPlayerNames(playerNameInputs, domPlayerDivs) {
  playerNameInputs.forEach((name, index) => {
    domPlayerDivs[index].innerText = name.value;
  });
},

updateWagerMessage(validWager, highRange) {
  if (validWager) {
    domUpdates.changeDisplayedScreen(document.querySelector('.daily-double-pop-up'));
    domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
    wagerErrorText.innerText = 'PLEASE ENTER A WAGER';
  } else {
    wagerErrorText.innerText = `WAGER NOT VALID. PLEASE ENTER A WAGER BETWEEN 5 AND ${highRange}`;
  }
},

updateAnswerMessage(checkAnswer) {
  if(checkAnswer) {
    answerResponseText.innerText = 'CORRECT!' ;
  } else {
    answerResponseText.innerText = 'SORRY THAT IS INCORRECT';
  }
  setTimeout(function() {
    domUpdates.changeDisplayedScreen(overlayDiv);
    domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
    answerResponseText.innerText = 'PLEASE ENTER AN ANSWER';
  }, 500);
},

disableClue(index) {
  let clueBox = document.querySelector(`[data-id="${index}"]`);
  clueBox.classList.add('disabled');
  clueBox.removeEventListener('click', displayClue);
},

enableClues(clueBox) {
  clueBox.classList.remove('disabled');
},


changeScoreboard() {
//need to build out Game class first
},


setCategoryNames(names, domCategoryDivs) {
  domCategoryDivs.forEach((catDiv, index) => {
    catDiv.innerText = names[index];
  });
},


editClueHTML(clueObj, textElement) {
  textElement.innerHTML = clueObj.question;
},

resetPlayerInput(inputBox) {
  inputBox.value = '';
}




}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}