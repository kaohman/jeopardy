const domUpdates =  {
  addFinalWagerNames(textElements, players) {
    textElements.forEach((element, index) => {
      element.innerText = players[index].name;
    });
  },

  displayMessage(textElement) {
    textElement.classList.remove('hidden');
  },

  hideMessage(textElement) {
    textElement.classList.add('hidden');
  },

  addFinalCategory(string) {
    document.querySelector('.final-category-text').innerText = `CATEGORY: ${string}`;
  },

  changeDisplayedScreen(section) {
    section.classList.toggle('hidden');
  },

  displayPlayerNames(playerNameInputs, domPlayers) {
    playerNameInputs.forEach((name, index) => {
      domPlayers[index].innerText = name.value;
    });
  },

  displayWinnerName(winner) {
    document.querySelector('.winner-name').innerText = winner;
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

  updateAnswerMessage(checkAnswer, answerResponseMessage) {
    if(checkAnswer) {
      answerResponseMessage.innerText = 'CORRECT!' ;
    } else {
      answerResponseMessage.innerText = 'SORRY THAT IS INCORRECT';
    }
    setTimeout(function() {
      domUpdates.changeDisplayedScreen(overlay);
      domUpdates.changeDisplayedScreen(cluePopUp);
      answerResponseMessage.innerText = 'PLEASE ENTER AN ANSWER';
    }, 1000);
  },

  disableClue(index) {
    let clueBox = document.querySelector(`[data-id="${index}"]`);
    clueBox.classList.add('disabled');
    clueBox.removeEventListener('click', creatNewClue);
  },

  enableClues(clueBox) {
    clueBox.classList.remove('disabled');
  },

  changeScoreboard(playerScoreboard, currentPlayer) {
    playerScoreboard[game.playerTurn].innerHTML = currentPlayer.score;
  },

  changeDomPointValues(clueBox, round) {
    let points = round.clues[clueBox.dataset.id].pointValue;
    clueBox.innerText = points;
  },


  setCategoryNames(names, domCategories) {
    domCategories.forEach((catDiv, index) => {
      catDiv.innerText = names[index];
    });
  },


  editClueHTML(clueObj, textElement) {
    textElement.innerHTML = clueObj.question;
  },

  resetPlayerInput(inputBox) {
    inputBox.value = '';
  },

  updateRoundText(textElement, newText) {
    textElement.innerText = newText;
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

  displayFinalTurnName(textElement, name) {
    textElement.innerText = `${name}, PLEASE ENTER YOUR ANSWER`;
  }

}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}