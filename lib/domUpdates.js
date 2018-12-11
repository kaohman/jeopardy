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

  displayPlayerNames(playerNameInputs, domPlayerDivs) {
    playerNameInputs.forEach((name, index) => {
      domPlayerDivs[index].innerText = name.value;
    });
  },

  displayWinnerName(winner) {
    document.querySelector('.winner-name').innerText = winner;
  },

  updateWagerMessage(validWager, highRange, element) {
    if (validWager) {
      domUpdates.changeDisplayedScreen(document.querySelector('.daily-double-pop-up'));
      domUpdates.changeDisplayedScreen(document.querySelector('.clue-pop-up'));
      element.innerText = 'PLEASE ENTER A WAGER';
    } else {
      element.innerText = `WAGER NOT VALID. PLEASE ENTER A WAGER BETWEEN 5 AND ${highRange}`;
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
    }, 1000);
  },

  disableClue(index) {
    let clueBox = document.querySelector(`[data-id="${index}"]`);
    clueBox.classList.add('disabled');
    clueBox.removeEventListener('click', displayClue);
  },

  enableClues(clueBox) {
    clueBox.classList.remove('disabled');
  },

  changeScoreboard(playerScoreboard, currentPlayer) {
    playerScoreboard[game.playerTurn].innerHTML = currentPlayer.score;
  },

  changeDomPointValues(clueBox, round) {
    let pointValue = round.clues[parseInt(clueBox.dataset.id)].pointValue;
    clueBox.innerText = pointValue;
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
  },

  updateRoundText(textElement, newText) {
    textElement.innerText = newText;
  },


  highlightPlayerTurn(index = 0) {
    playerAvatar.forEach((currentAvatar, i) => {
      if (i === index) {
        (playerAvatar[i].classList.add('highlight-player-avatar')) 
      } else {
        playerAvatar[i].classList.remove('highlight-player-avatar');
      }
    })
  },

  displayFinalTurnName(textElement, name) {
    textElement.innerText = `${name}, PLEASE ENTER YOUR ANSWER`;
  }

}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}