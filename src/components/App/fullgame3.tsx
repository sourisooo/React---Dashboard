
import { useEffect } from 'react';
import './fullgame3.scss';
import app from './fullgame3z.js';


function Fullgame3(){

    useEffect(app.start);

    return (
        <>

        <canvas id="canvas1" ></canvas>
        <img id="player" src="Images\\player2.png" style={{display: "none"}}/>
        <img id="layer5" src="Images\\layer-5.png" style={{display: "none"}}/>
        <img id="layer4" src="Images\\layer-4.png" style={{display: "none"}}/>
        <img id="layer3" src="Images\\layer-3.png" style={{display: "none"}}/>
        <img id="layer2" src="Images\\layer-2.png" style={{display: "none"}}/>
        <img id="layer1" src="Images\\layer-1.png" style={{display: "none"}}/>
        <img id="enemy_fly" src="Images\\enemy_ghost.png" style={{display: "none"}}/>
        <img id="enemy_plant" src="Images\\enemy_worm.png" style={{display: "none"}}/>
        <img id="enemy_spider" src="Images\\enemy_spider.png" style={{display: "none"}}/>
        <img id="fire" src="Images\\fire.png" style={{display: "none"}}/>
        <img id="boom" src="Images\\boom.png" style={{display: "none"}}/>
        <img id="lives" src="Images\\lives.png" style={{display: "none"}}/>
        <img id="heart" src="Images\\heart.png" style={{display: "none"}}/>

        <h1 id="loading"></h1>

        </>



    )



}


export default Fullgame3;