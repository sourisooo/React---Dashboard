import './fullgame.scss';
import './fullgamez.js'


import app from './fullgamez.js';
import { useEffect } from 'react';


 function Fullgame(){

   useEffect(app.init);


    return(

        <>

        <button type="button" id="go">Démarrer</button>
         <div id="message"></div>

        <main id="playground"></main>



        <script type="module" src="./fullgamez.js"> </script>



        </>


    )





}




export default Fullgame;