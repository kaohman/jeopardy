const domUpdates =  {

changeDisplayedScreen(section) {
  section.classList.toggle('hidden');
},

displayPlayerNames(playerNameInputs, domPlayerDivs) {
  playerNameInputs.forEach((name, index) => {
    domPlayerDivs[index].innerText = name.value;
  });
},

updateWagerMessage(validWager) {
  if (validWager) {
    domUpdates.changeDisplayedScreen(document.querySelector('.daily-double-pop-up'));
    wagerErrorText.innerText = 'PLEASE ENTER A WAGER';
  } else {
    wagerErrorText.innerText = `WAGER NOT VALID. PLEASE ENTER A WAGER BETWEEN 5 AND ${dailyDouble.highRange}`;
  }
},

updateAnswerMessage(checkAnswer) {
  if(checkAnswer) {
    answerResponseText.innerText = 'CORRECT!' ;
  } else {
    answerResponseText.innerText = 'SORRY THAT IS INCORRECT';
  }
  setTimeout(function() {
    domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
  }, 2000);
},

disableClue(index) {
  let clue = document.querySelector(`[data-id="${index}"]`);
  clue.innerText = '';
  clue.classList.add('.disabled');
  clue.removeEventListener('click', displayClue);
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
}






}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}