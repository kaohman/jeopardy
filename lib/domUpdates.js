const domUpdates =  {

changeDisplayedScreen(section) {
  section.classList.toggle('hidden');
},

displayPlayerNames(playerNameInputs, domPlayerDivs) {
  playerNameInputs.forEach((name, index) => {
    domPlayerDivs[index].innerText = name.value;
  });
},








}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}