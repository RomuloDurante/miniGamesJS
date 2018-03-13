
;( function(global, $) {

    var TicTacToe = function() {
      return new TicTacToe.init();
    }


    TicTacToe.init = function() {
      that = this;

      that.placar = 0;
      that.el = '';
    }

    // properties hide by closures
    var choice = document.getElementById('choice');

    var uso = document.getElementById('emUso');

    var tb = document.getElementById('game');

    var vit = document.getElementsByTagName('th');

    /*************************** */

    //Methods
    TicTacToe.init.prototype = {

      choiseXorY: function() {
        that = this;

         choice.addEventListener('click', function(e){
          var target = e.target;
          that.el = target.textContent;
          uso.innerHTML = that.el;
        });      
      },

      pushTable: function() {
        that = this;

        tb.addEventListener('click', function(e) {
          var target = e.target;
          if(!target.textContent){
            target.innerHTML = that.el;
          }
            that.lookWinner(); 
        }); 
      },

      vit: function(x,y,z) {
        return  vit[x].textContent + vit[y].textContent + vit[z].textContent;
      },

      whoWin: function(winner) {
        console.log('Fim de Jogo');
        $(winner).addClass('victory');  //here i'm use jquery for inject class
      },

      
      lookWinner: function() {
        
        var v1 = this.vit(0,1,2);
        var v2 = this.vit(3,4,5);
        var v3 = this.vit(6,7,8);
        var v4 = this.vit(0,3,6);
        var v5 = this.vit(1,4,7);
        var v6 = this.vit(2,5,8);
        var v7 = this.vit(0,4,8);
        var v8 = this.vit(2,4,6);
        
        
        if(v1 === 'XXX' || v1 === 'OOO') {
          this.whoWin('.v1');
          }
           else if (v2 === 'XXX' || v2 === 'OOO') {
            this.whoWin('.v2'); 
              } 
               else if (v3 === 'XXX' || v3 === 'OOO') {
                this.whoWin('.v3'); 
                }
                 else if (v4 === 'XXX' || v4 === 'OOO') {
                  this.whoWin('.v4'); 
                    } 
                     else if (v5 === 'XXX' || v5 === 'OOO') {
                      this.whoWin('.v5'); 
                        }
                         else if (v6 === 'XXX' || v6 === 'OOO') {
                          this.whoWin('.v6'); 
                          }
                           else if (v7 === 'XXX' || v7 === 'OOO') {
                            this.whoWin('.v7'); 
                              }
                               else if (v8 === 'XXX' || v8 === 'OOO') {
                                this.whoWin('.v8'); 
                                  }
       }


    }

    global.TicTacToe = global.T$ = TicTacToe;

}(window, jQuery));

/************************************************* */

var T$ = T$();

T$.choiseXorY();
T$.pushTable();


var test = document.querySelectorAll('.v4');

test[1].classList.add('test');










