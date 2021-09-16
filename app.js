const p1={
    score:0,
    button:document.querySelector(".btn-pl1"),
    display:document.querySelector(".player1-score"),
}

const p2={
  score:0,
  button: document.querySelector(".btn-pl2"),
  display:document.querySelector(".player2-score")
}



const resetBtn = document.querySelector(".btn-reset");
const playToSelect = document.querySelector("#play-to");


let winnerScore = 3;
let isGameOver = false;

function updateScore(player,oponnent){
  if(!isGameOver){
    player.score++;
    if(player.score===winnerScore){
      isGameOver=true;
      player.display.classList.add('has-text-success')
      oponnent.display.classList.add('has-text-danger')
      setDisabled();
    }
    player.display.textContent=player.score
  }
}

p1.button.addEventListener("click", function () {
  updateScore(p1,p2)
 
});

p2.button.addEventListener("click", function () {
 updateScore(p2,p1)
});

playToSelect.addEventListener("change", function () {
  winnerScore = parseInt(this.value);
  resetGame();
});

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.textContent = 0;
  p2.display.textContent = 0;
  p1.display.classList.remove('has-text-success','has-text-danger')
  p2.display.classList.remove('has-text-success','has-text-danger')
  removeDisabled();
}

function setDisabled() {
    p1.button.setAttribute("disabled", true);
    p2.button.setAttribute("disabled", true);
}
function removeDisabled(){
    p1.button.removeAttribute("disabled");
    p2.button.removeAttribute("disabled");
}


