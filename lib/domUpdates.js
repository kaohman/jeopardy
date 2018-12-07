const domUpdates =  {

changeDisplayedScreen(section) {
  section.classList.toggle('hidden');
},

displayPlayerNames(playerNameInputs, domPlayerDivs) {
  playerNameInputs.forEach((name, index) => {
    domPlayerDivs[index].innerText = name.value;
  });
},

changeScoreboard() {
//need to build out Game class first
},








}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}