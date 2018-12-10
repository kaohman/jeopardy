const domUpdates =  {

changeDisplayedScreen(section) {
  section.classList.toggle('hidden');
},

displayPlayerNames(playerNameInputs, domPlayerDivs) {
  playerNameInputs.forEach((name, index) => {
    domPlayerDivs[index].innerText = name.value;
  });
},


changeScoreboard(score) {
  playerScore[0].innerHTML = score;
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