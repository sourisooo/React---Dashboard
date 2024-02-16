
import { useEffect } from 'react';
import './fullgame2.scss';
import app from './fullgame2z.js';



function Fullgame2 (){

    useEffect(app.init);


    return(

            <>
   
        <canvas id="canvas1" ></canvas>
        <img id="player" src="Images\\player.png" style={{display: "none"}} />
        <img id="layer4" src="Images\\layer4.png" style={{display: "none"}}/>
        <img id="layer3" src="Images\\layer3.png" style={{display: "none"}}/>
        <img id="layer2" src="Images\\layer2.png" style={{display: "none"}}/>
        <img id="layer1" src="Images\\layer1.png" style={{display: "none"}}/>
        <img id="angler1" src="Images\\angler1.png" style={{display: "none"}}/>
        <img id="angler2" src="Images\\angler2.png" style={{display: "none"}}/>
        <img id="angler3" src="Images\\lucky.png" style={{display: "none"}}/>
        <img id="hive" src="Images\\hivewhale.png" style={{display: "none"}}/>
        <img id="drone" src="Images\\drone.png" style={{display: "none"}}/>
        <img id="fire" src="Images\\fireExplosion.png" style={{display: "none"}}/>
        <img id="smoke" src="Images\\smokeExplosion.png" style={{display: "none"}}/>
        <img id="gears" src="Images\\gears.png" style={{display: "none"}}/>
        <img id="heart" src="Images\\heart.png" style={{display: "none"}}/>

        <img id="projectile" src="Images\\projectile.png" style={{display: "none"}}/>

        <h1 id="loading" ></h1>
""



        </>

    )

}


export default Fullgame2;