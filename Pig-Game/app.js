/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var Pig  = function() {
  that = this;

  that.player1 = document.getElementById('name-0');
  that.player2= document.getElementById('name-1');

  that.btnNew = document.querySelector('.btn-new'); 
  that.btn = document.getElementById('btn-roll');
  that.d = document.getElementById('dice');
  that.btnHold = document.querySelector('.btn-hold');

  that.scoreP0 = document.getElementById('score-0');
  that.p0 = 0;
  that.scoreP1 = document.getElementById('score-1');
  that.p1 = 0;
  
  that.currentScore0 = document.querySelector('#current-0');
  that.currentScore1 = document.querySelector('#current-1');
  that.currentPlayer = 1; 

  that.panel0 = document.querySelector('.player-0-panel');//find the active class
  that.panel1 = document.querySelector('.player-1-panel');//find the active class
  
  that.diceNumber = 0;



}

Pig.prototype = {
  /******************************************************** */
  // general
  newGame: function() {
    that.btnNew.addEventListener('click', function() {
      window.location.reload();
    });
  },

  rollDice: function() { // roll the dice and select a number
    that.btn.addEventListener('click', function() {
      that.diceNumber = that.random();
      that.pushDice(that.d, '<img src="'+that.selecDice(that.diceNumber)+'" alt="Dice" class="dice"> ');
    
      that.currentScore(that.diceNumber);
      
    }); 
  },

  holdPoint: function(player, score, num) { // chance the player and push the full points to the main placar
    that.btnHold.addEventListener('click', function() {
   
      if(that.diceNumber === 1 && that.currentPlayer === 1 || that.diceNumber === 2 && that.currentPlayer === 2  ){
        that.zeroPoint();
      } else {
        that.scoreTotal();
      }
      
      that.winGame();
      that.atualPlayer();
    });
  },

   atualPlayer: function(){
    if(that.panel0.classList.length > 1){     // select the atual player
      that.panel0.classList.remove('active');
      that.panel1.className += ' ' + 'active';
      that.currentPlayer = 2;

    } else {
      that.panel1.classList.remove('active');
      that.panel0.className += ' ' + 'active';
      that.currentPlayer = 1;
    }
  },

  random: function() {  // generates a number between 1 and 6
    var random = Math.random();
    var num = random.toFixed(1) * 10; 
    if (num > 6) {
      num = num - 4;  
    } else if (num === 0) {
      num = 3;
    }
    return num;
  },



  currentScore: function(num) { //the provisory score in the red square
    if(that.currentPlayer === 1) {
       that.pushDice(that.currentScore0, num);

    } else
          if(that.currentPlayer === 2) {
          that.pushDice(that.currentScore1, num);
          
    }
  },

  selecDice:function(num) { // select the dice img
    var img = 'dice-'+num+'.png';
    return img;
  },

  pushDice: function(el, inner) { // push the dice to html
    el.innerHTML = ' ';  
    el.innerHTML=  inner;
  },

  scoreTotal: function() { // sum the total points to each player
    
   if(that.currentPlayer === 2) {
    that.p0 += that.diceNumber;
    that.pushDice(that.scoreP1, that.p0);
  
   } else 
        if(that.currentPlayer === 1) {
        that.p1 += that.diceNumber;
        that.pushDice(that.scoreP0, that.p1);

   }
  },

  zeroPoint: function() { // if the dice number is the same number of the player the total point get lost
      if(that.currentPlayer === 2 && that.diceNumber === 2) {
        that.p0 = 0;
        that.pushDice(that.scoreP1, that.p0);
      
       } else 
            if(that.currentPlayer === 1 && that.diceNumber === 1) {
              that.p1 = 0;
            that.pushDice(that.scoreP0,  that.p1);
    
       }
    
  },

  winGame: function() { // The first player to reach 100 points on GLOBAL score wins the game
    if(pig.scoreP0.textContent >= 100){
      that.pushDice(that.player1, 'Winner !');
    } else 
          if(pig.scoreP1.textContent >= 100){
                that.pushDice(that.player2, 'Winner !');
              }
         
    
  }
  /******************************************************************* */


}

var pig = new Pig();
pig.rollDice();
pig.holdPoint();
pig.newGame();










