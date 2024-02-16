import './fullgame.scss';
import app from './fullgamez.js';
import { useEffect } from 'react';


 function Fullgame(){

   useEffect(app.init);


    return(

        <>

        <h2> Memory game</h2>

        <button type="button" id="go">Démarrer</button>   <a id="message"></a>

        <main id="playground"></main>


        </>


    )



}


export default Fullgame;