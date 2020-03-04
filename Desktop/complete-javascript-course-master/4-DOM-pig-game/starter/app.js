/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Variable score, rounsScore and activePlayer
var score= [0,0];
var roundScore= 0;
var activePlayer= 0;
// create a random Number for dice using math Object
// It will return random number between 1 to 6
// var dice = Math.floor(Math.random()*6) + 1;

//console.log(dice);

//Using DOM manupulation 
//The querySelector() method only returns the first element that matches the specified selectors
//or first element that it finds
//textContent method will change the text content
// of the variable dice we defined before
// document.querySelector('#current-0').textContent= dice;
//This we set a value

//var dice =  Math.floor(Math.random()*6) + 1;
//document.querySelector('#current-' + activePlayer).textContent= dice;

//document.querySelector('#current-' + activePlayer).innerHTML= '<em>' + dice + '</em>'

// read in console only this will display show content of id score-0 =43
// this is getter we get a value
var x = document.querySelector('#score-0').textContent;

console.log(x);


// CSS hide the Dice initially with display property none

document.querySelector('.dice').style.display = 'none';


// Events Handler
// Button to role a dice
//querySelector is a selector of the first element and addEventListener is a listner

document.querySelector('.btn-roll').addEventListener('click', function(){
        // When we click the button we need the random number to be genetared
        var dice = Math.floor(Math.random()*6) + 1;

        // display the results 
        var diceDom= document.querySelector('.dice');
       
            diceDom.style.display = 'block';

            // dice image will change based on var dice which is random number and add .png extension 
            diceDom.src= 'dice-' + dice + '.png';

        // Update the round score if the rolled number was not a 1 
        if(dice !== 1){
            //Add Score
        // dice is a random number
    
        roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent= roundScore;

        }
        else{
            // next player
            if (activePlayer === 0){
                activePlayer = 1;
            }else{
                activePlayer = 0;
                roundScore = 0;

                // now in the HTML we set value to O 

                document.getElementById('current-0').textContent = '0';
                document.getElementById('current-1').textContent = '0';

                // now add and remove the active class which is graded in the active css
                // by using quarySelector in the class player-0-panel

                document.querySelector('.player-0-panel').classList.toggle('active');
                document.querySelector('.player-1-panel').classList.toggle('active');
                // document.querySelector('.player-0-panel').classList.remove('active');
                // document.querySelector('.player-1-panel').classList.add('active');
                // dice do not show
                document.querySelector('.dice').style.display = 'none';
            }
            
        }

});

// Set or now make scores and current player to zero 
// we user getElementById for HTML and we dont use any # in getElementById
// Text content will change html text content
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Update score and change active player
// Turnary Operaor
//Add Remove toggle HTML classes



























