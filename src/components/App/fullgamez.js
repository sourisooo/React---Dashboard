/**
 * 
 * Code fourni
 */
const app = {

  test:  function (){

    let test = document.querySelector('#go');
    console.log(test);
    
  },

    // just a utility var to remember all the colors
    colors: ['red','green','blue','yellow'],
  
    // this var will contain the sequence said by Simon
    sequence: [],
    playerchoice: [],
  
    indice: 0,
    score: 0,
    difficulty: 3,
    timer:0, 
  
    drawCells: function () {
      const playground = document.getElementById('playground');
      for (const color of app.colors) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = color;
        cell.style.backgroundColor = color;
        playground.appendChild(cell);
      }
    },
  
    bumpCell: function (color) {
      // let's modify the syle directly
      document.getElementById(color).style.borderWidth = '45px';
      // and reset the same style, after a small pause (150 ms)
      setTimeout( () => {
        document.getElementById(color).style.borderWidth = '0';
      }, 150);
  
    },
  
    newGame: function (difficulty) {
      // start by reseting the sequence 
      app.sequence = [];
      // make it 3 times :
      for (let index = 0; index < app.difficulty; index++) {
        // get a random number between 0 and 3
        let random = Math.floor(Math.random()*4);
        // add the corresponding color to the sequence
        app.sequence.push( app.colors[random] );
      }
      console.log(app.sequence);
      // start the "Simon Says" sequence
      app.simonSays(app.sequence);
    
    },
  
    simonSays: function (sequence) {
      if (sequence && sequence.length) {
  
        app.showMessage("Mémorisez la séquence");
        // after 500ms, bump the first cell
        setTimeout( app.bumpCell, 500, sequence[0] );
        // plays the rest of the sequence after a longer pause
        setTimeout( app.simonSays, 850, sequence.slice(1));
  
        
      } else {app.showMessage("Reproduisez la séquence");   app.starttimer();app.addEventListeners();}
    },
  
    init: function () {
      console.log('init');
      app.drawCells();
    
      // listen click on the "go" button
      document.getElementById('go').addEventListener('click', app.newGame );
    },
  
    /** Fin du code fourni. Après, c'est à toi de jouer! */
  
    showMessage: function (message) {
    document.getElementById('message').innerHTML = message;
      app.hidebutton();
      
    },
  
    hidebutton: function (){
  
      document.querySelector('#go').style.display='none';
      document.querySelector('#message').style.display='';
  
    },
  
  
    revealbutton: function (){
  
      document.querySelector('#go').style.display='block';
      document.querySelector('#message').style.display='none';
  
    },
  
    gameover: function(){
  
      alert("Partie terminée. Votre score : "+app.score);
      app.revealbutton();
      document.querySelector('#message').innerHTML = '';
      app.difficulty=3;
      app.playerchoice=[]; 
      app.sequence=[];
      clearTimeout(app.timer), app.timer = 0;
      window.location.reload();
  
  
    },
  
    clickcell: function(event){
  
      app.bumpCell(event.target.id);
  
      // console.log(event.target.id);
  
      app.playerchoice.push(event.target.id);
  
      // console.log(app.playerchoice);
  
    
      if ((app.indice!=app.difficulty-1)){ console.log(app.difficulty,app.indice, );
  
      if (app.playerchoice[app.indice]==app.sequence[app.indice]) {app.score++;app.indice++,clearTimeout(app.timer), app.timer = 0,app.starttimer();}   else {app.gameover();}}
  
      else {
  
        if (app.playerchoice[app.indice]==app.sequence[app.indice]) {app.score++;app.indice++,app.nextmove();}   else {app.gameover()}
        
      
      }      
  
    },
  
  
    nextmove(){
  
      clearTimeout(app.timer), 
      
      app.timer = 0,
      
      app.difficulty++;
  
      console.log(app.playerchoice);
      
      app.playerchoice=[];
  
      app.sequence=[];
  
      app.indice = 0;
  
      app.newGame(app.difficulty);
  
      console.log(app.sequence);
  
      document.querySelector('#playground').removeEventListener('click',app.clickcell);
  
    },
  
  
    addEventListeners(){
  
     document.querySelector('#playground').addEventListener('click',app.clickcell);
  
  
    },
  
  
    starttimer(){
  
    
  
      app.timer = setTimeout(() => {app.gameover()}, 5000)
  
  
    }
  
  
  };
  
  

  
  
export default app;
  
  