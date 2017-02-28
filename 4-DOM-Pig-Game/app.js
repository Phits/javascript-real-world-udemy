/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, diceTwo, bothDice, gamePlaying, previousDice, winningScore;

inti();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
            // 1. Random number
		    dice = Math.floor(Math.random() * 6) + 1;
		    diceTwo = Math.floor(Math.random() * 6) + 1;
            //dice = 6;

		    // 2. Display the result
		    var bothDice;

		    var diceDom = document.querySelector('.dice');
		    diceDom.style.display = 'block';
		    diceDom.src = 'dice-' + dice + '.png';

		    var diceTwoDom = document.querySelector('.dice-two');
		    diceTwoDom.style.display = 'block';
		    diceTwoDom.src = 'dice-' + diceTwo + '.png';

      //       console.log('dice is ' + dice);
		    // console.log('previousDice is ' + previousDice);

		    // 3. Update the round score IF the roller number was NOT a 1
		    if (!(dice == 1 || diceTwo == 1)) {
		    	// Add score
		    	// previousDice = dice;

               // console.log('dice is ' + dice);
               // console.log('diceTwo is ' + diceTwo);

		    	bothDice = dice + diceTwo;
		    	roundScore += bothDice;
		    	// console.log('roundScore is ' + roundScore)

		    	// console.log('activePlayer on roll is ' + activePlayer)
		    	document.querySelector('#current-' + activePlayer).textContent = roundScore;
		    } else {
                // previousDice = 0;
		    	// Next player
		    	nextPlayer();

		    }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
       // Add CUURENT score to GLOBAL score
        // console.log('activePlayer on hold is ' + activePlayer)
	    scores[activePlayer] += roundScore;

	     // Update the UI 
	    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	    // Check if player won game
	    if (scores[activePlayer] >= winningScore) {
	    	// console.log('Player Won')
	    	document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
	    	document.querySelector('.dice').style.display = 'none';
	    	document.querySelector('.dice-two').style.display = 'none';
	    	document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
	    	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	    	gamePlaying = false;
	    } else {
	    	// Next Player
	        nextPlayer();
	        // console.log('Next Player')
	    }

    }
});

document.querySelector('.submit').addEventListener('click', function(evt) {
	evt.preventDefault(); 
    winningScore = document.querySelector('.high-score-input').value;
    // console.log('winningScore is ' + winningScore);
});

function nextPlayer() {
	// Next player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = "none";
    document.querySelector('.dice-two').style.display = "none";
}

document.querySelector('.btn-new').addEventListener('click', inti);

function inti() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    // previousDice = 0;
    winningScore = 100;

    document.querySelector('.dice').style.display = "none";
    document.querySelector('.dice-two').style.display = "none";

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player-1';
	document.getElementById('name-1').textContent = 'Player-2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
