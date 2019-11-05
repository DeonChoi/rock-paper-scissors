window.onload = () => {
    let opponentMove;

    const randomOpponentMove = () => {
        switch (Math.floor(Math.random() *3)) {
            case 0:
                opponentMove = 'rock';
                break;
            case 1:
                opponentMove = 'paper';
                break;
            case 2:
                opponentMove = 'scissors';
                break;
        }
    }
    
    const runGame = e => {
        randomOpponentMove();
        console.log('opponent move is ' + opponentMove);
        let playerMove = e.target.id;
        console.log('your move is ' + playerMove);
        switch (playerMove) {
            case 'rock':
                if (opponentMove==='rock'){
                    document.getElementById('result').innerHTML = 'Tie! You both chose rock!';
                } else if (opponentMove==='paper'){
                    document.getElementById('result').innerHTML = 'You Lose! Paper beats rock!';
                } else if (opponentMove==='scissors'){
                    document.getElementById('result').innerHTML = 'You Win! Rock beats scissors!';
                }
            break;
            case 'paper':
                if (opponentMove==='paper'){
                    document.getElementById('result').innerHTML = 'Tie! You both chose paper!';
                } else if (opponentMove==='scissors'){
                    document.getElementById('result').innerHTML = 'You Lose! Scissors beats paper!';
                } else if (opponentMove==='rock'){
                    document.getElementById('result').innerHTML = 'You Win! Paper beats rock!';
                }
            break;
            case 'scissors':
                if (opponentMove==='scissors'){
                    document.getElementById('result').innerHTML = 'Tie! You both chose scissors!';
                } else if (opponentMove==='rock'){
                    document.getElementById('result').innerHTML = 'You Lose! Rock beats scissors!';
                } else if (opponentMove==='paper'){
                    document.getElementById('result').innerHTML = 'You Win! Scissors beats paper!';
                }
            break;
        }
    }
    
    document.getElementById('rock').addEventListener('click', runGame);
    document.getElementById('paper').addEventListener('click', runGame);
    document.getElementById('scissors').addEventListener('click', runGame);

}