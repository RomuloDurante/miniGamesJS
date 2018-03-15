/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice one time. Each result get added to his ROUND score with 'Hold'
- BUT, if the player1 rolls a 1 or the player 2 rolls a 2, all his ROUND score gets lost. After that, it's the next player's turn
- The first player to reach 25 points on GLOBAL score wins the game

*/
(function(global){
  var Pig = function() {
    return new Pig.init();
  }

  Pig.init  = function() {
    that = this;
  
    that.player1 = id$('name-0');
    that.player2= id$('name-1');
  
    that.btnNew = qu$('.btn-new'); 
    that.btnRoll = id$('btn-roll');
    that.btnHold = qu$('.btn-hold');
    that.dice = id$('dice');
  
    that.scoreP0 = id$('score-0');
    that.p0 = 0;
    that.scoreP1 = id$('score-1');
    that.p1 = 0;
    
    that.currentScore0 = qu$('#current-0');
    that.currentScore1 = qu$('#current-1');
    that.currentPlayer = 1; 
  
    that.panel0 = qu$('.player-0-panel');//find the active class
    that.panel1 = qu$('.player-1-panel');//find the active class
    
    that.diceNumber = 0;
  }

  // safe by closures
  
  var qu$ = function(x){return document.querySelector(x)};
  var id$ = function(x){return document.getElementById(x)};

  /****************************************** */

  Pig.init.prototype = {
    /******************************************************** */
    // general
    newGame: function() {
      that.btnNew.addEventListener('click', function() {
        window.location.reload();
      });

      return this;
    },
  
    rollDice: function() { // roll the dice and select a number
      that.btnRoll.addEventListener('click', function() {
        //1- random number
        that.diceNumber = that.random();
        //2- select the image and show it in the display
        that.pushDice(that.dice, '<img src="'+that.selecDice(that.diceNumber)+'" alt="Dice" class="dice"> ');
        //3- update the diceNumber
        that.currentScore(that.diceNumber);
        
      }); 

      return this;
    },
  
    holdPoint: function(player, score, num) { // chance the player and push the full points to the main placar
      that.btnHold.addEventListener('click', function() {
        //1- if the number of the dice is 1 or 2, and the number of the player is 1 or 2 respectively then your score gets 0
        if(that.diceNumber === 1 && that.currentPlayer === 1 || that.diceNumber === 2 && that.currentPlayer === 2  ){
          that.zeroPoint(); //2-call the method to get 0 to the current player score
        } else {
          that.scoreTotal(); //3- if the number dice is whatever number unlike 1 or 2 call the scoreTotal method
        }
        
        that.winGame(); //4- call the method to see if there are a winner
        that.atualPlayer(); //5- call the method to change the current player
      });

      return this;
    },
  
     atualPlayer: function(){                  
      if(that.panel0.classList.length > 1){     // select the current player through the 'active' class
        that.panel0.classList.remove('active'); // you can do that using 'toggle'
        that.panel1.className += ' ' + 'active';
        that.currentPlayer = 2; 
  
      } else {
        that.panel1.classList.remove('active');
        that.panel0.className += ' ' + 'active';
        that.currentPlayer = 1;
      }
    },
  
    random: function() {  // generates a number between 1 and 6
      return num = Math.floor(Math.random() * 6) + 1; 
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
  
    winGame: function() { // The first player to reach 25 points on GLOBAL score wins the game
      if(pig.scoreP0.textContent >= 25){
        that.pushDice(that.player1, '<strong>Winner !</strong>');
      } else 
            if(pig.scoreP1.textContent >= 25){
                that.pushDice(that.player2, '<strong>Winner !</strong>');
                }
    } 
  }

 global.Pig = Pig; //exposes the object to the global context
 global.pig = Pig(); // create the object without need the keyword 'new'

 pig.rollDice().holdPoint().newGame(); // call the chainable methods

}(window));







