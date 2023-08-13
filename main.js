
let UserTurn = ''

let Rock = document.getElementById('rock')
Rock.addEventListener('click', () => {
    UserTurn = 'Rock'; Play();
})

let Paper = document.getElementById('paper')
Paper.addEventListener('click', () => {
    UserTurn = 'Paper'; Play(); 
})

let Scissor = document.getElementById('scissor')
Scissor.addEventListener('click', () => {
    UserTurn = 'Scissor'; Play();
})
console.log(UserTurn)


function Play() {
    let choice = ['Rock', 'Paper', 'Scissor']
    let ComputerTurn = choice[Math.floor(Math.random() * 3)]
    let Score = document.getElementById("ScoreBoard");
    let UserScore = document.getElementById('UserScore')
    let ComputerScore = document.getElementById('ComputerScore')
    if (ComputerTurn == UserTurn) { Score.textContent = ('Draw!  ') }
    if (UserTurn == 'Scissor' && ComputerTurn == 'Paper') { UserScore.textContent += '|'; }
    if (UserTurn == 'Scissor' && ComputerTurn == 'Rock') { ComputerScore.textContent += '|'; }
    if (UserTurn == 'Paper' && ComputerTurn == 'Rock') { UserScore.textContent += '|'; }

    if (UserTurn == 'Paper' && ComputerTurn == 'Scissor') { ComputerScore.textContent += '|'; }
    if (UserTurn == 'Rock' && ComputerTurn == 'Scissor') { UserScore.textContent += '|'; }
    if (UserTurn == 'Rock' && ComputerTurn == 'Paper') { ComputerScore.textContent += '|'; }
    UserTurn = ''
    let UScore = document.getElementById('UserScore').textContent.length
    let CScore = document.getElementById('ComputerScore').textContent.length
    console.log(UScore)
    console.log(CScore)

    if (UScore == 5) { alert('You Won!'); Score.textContent = ''; UserScore.textContent = ''; ComputerScore.textContent = ''; }
    else if (CScore == 5) { alert('You Lose!'); Score.textContent = ''; UserScore.textContent = ''; ComputerScore.textContent = '' }

    function lightUp() {
        let choiceElements = document.getElementsByClassName('img2');
        for (let i = 0; i < choiceElements.length; i++) {
            choiceElements[i].style.border = 'none';
        }
           if (ComputerTurn == 'Scissor') {
            document.getElementById('scissor1').style.border = '1px dashed pink';
            document.getElementById('scissor1').style.borderRadius = '50%';
        }
        else if (ComputerTurn == 'Rock') {
            document.getElementById('rock1').style.border = '1px dashed pink';
            document.getElementById('rock1').style.borderRadius = '50%';
        }
        else if (ComputerTurn == 'Paper') {
            document.getElementById('paper1').style.border = '1px dashed pink';
            document.getElementById('paper1').style.borderRadius = '50%';
        }
      if (UScore == 5) {  let choiceElements = document.getElementsByClassName('img2');
      for (let i = 0; i < choiceElements.length; i++) {
          choiceElements[i].style.border = 'none';
      } }
    else if (CScore == 5) {  let choiceElements = document.getElementsByClassName('img2');
    for (let i = 0; i < choiceElements.length; i++) {
        choiceElements[i].style.border = 'none';
    } }   
    }
    lightUp()
}
