const domUpdates =  {
  addFinalCategory(string) {
    document.querySelector('.final-category-text').innerText = `CATEGORY: ${string}`;
  },

  addFinalWagerNames(textElements, players) {
    textElements.forEach((element, index) => {
      element.innerText = players[index].name;
    });
  },

  changeDisplayedScreen(section) {
    section.classList.toggle('hidden');
  },

  changeDomPointValues(clueBox, round) {
    let points = round.clues[clueBox.dataset.id].pointValue;
    clueBox.innerText = points;
  },

  changeScoreboard(playerScoreboard, currentPlayer) {
    playerScoreboard[game.playerTurn].innerHTML = currentPlayer.score;
  },

  disableClue(index) {
    let clueBox = document.querySelector(`[data-id="${index}"]`);
    clueBox.classList.add('disabled');
    clueBox.removeEventListener('click', creatNewClue);
  },

  displayFinalTurnName(textElement, name) {
    textElement.innerText = `${name}, PLEASE ENTER YOUR ANSWER`;
  },

  displayMessage(textElement) {
    textElement.classList.remove('hidden');
  },

  displayPlayerNames(playerNameInputs, domPlayers) {
    playerNameInputs.forEach((name, index) => {
      domPlayers[index].innerText = name.value;
    });
  },

  displayWinnerName(winner) {
    document.querySelector('.winner-name').innerText = winner;
  },

  editClueHTML(clueObj, textElement) {
    textElement.innerHTML = clueObj.question;
  },

  enableClues(clueBox) {
    clueBox.classList.remove('disabled');
  },

  hideMessage(textElement) {
    textElement.classList.add('hidden');
  },

  highlightPlayerTurn(index = 0) {
    playerAvatars.forEach((currentAvatar, i) => {
      if (i === index) {
        (currentAvatar.classList.add('highlight-player-avatar')) 
      } else {
        currentAvatar.classList.remove('highlight-player-avatar');
      }
    });
  },

  resetPlayerInput(inputBox) {
    inputBox.value = '';
  },

  setCategoryNames(names, domCategories) {
    domCategories.forEach((catDiv, index) => {
      catDiv.innerText = names[index];
    });
  },

  updateAnswerMessage(checkAnswer, answerResponseMessage) {
    if (checkAnswer) {
      answerResponseMessage.innerText = 'CORRECT!';
    } else {
      answerResponseMessage.innerText = 'SORRY THAT IS INCORRECT';
    }
    setTimeout(function() {
      domUpdates.changeDisplayedScreen(overlay);
      domUpdates.changeDisplayedScreen(cluePopUp);
      answerResponseMessage.innerText = 'PLEASE ENTER AN ANSWER';
    }, 1000);
  },

  updateRoundText(textElement, newText) {
    textElement.innerText = newText;
  },

  updateWagerMessage(validWager, highRange, element) {
    if (validWager) {
      domUpdates.changeDisplayedScreen(document.querySelector('.daily-double-pop-up'));
      domUpdates.changeDisplayedScreen(cluePopUp);
      element.innerText = 'PLEASE ENTER A WAGER';
    } else {
      element.innerText = `Wager not valid. Please enter a wager between 5 and ${highRange}`;
    }
  },
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}