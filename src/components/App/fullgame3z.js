const app = {


start: function(){
    

        const canvas = document.getElementById('canvas1');
        const ctx = canvas.getContext('2d');
        canvas.width= window.innerWidth;
        canvas.height =window.innerHeight;


class Layer {

    constructor(game, width, height,speedModifier, image){

        this.game=game;
        this.width=window.innerWidth;
        this.height=window.innerHeight;
        this.speedModifier=speedModifier;
        this.image=image;
        this.x=0;
        this.y=0;
        this.input = new InputHandler(this);
       


    }


        update(){

            // this.x--*this.speedModifier;

            if(this.input.keys.includes('ArrowRight'))

            {
                  if(this.x< -this.width)
                 
                  {

                    // this.game.player.x=0;
                    this.x=0;

                    if(this.game.player.x> (this.width-155))


                    {
                        this.game.player.x=0;
                        this.game.enemies=0;
                        this.game.enemies=[];
                        this.game.particles=0
                        this.game.particles=[];
                        this.game.score=this.game.score+15;

                        if(this.game.energy<100)
                       {this.game.energy=this.game.energy+25;};
                    
                    }


                  }
                 
                  else this.x -= this.game.speed*this.speedModifier;
            
            }

            if(this.input.keys.includes('ArrowLeft'))

            {
                  if(-this.x< -this.width)this.x=0;
                  else this.x += this.game.speed*this.speedModifier;

            }

            // console.log(this.x);
            // console.log(-this.width);


        }


        draw(context){

            context.drawImage(this.image,this.x-this.width-20,this.y,this.width,this.height);
            context.drawImage(this.image,this.x,this.y,this.width,this.height);
            context.drawImage(this.image,this.x+this.width+20,this.y,this.width,this.height);



        }}



         class Background {

            constructor(game){

                this.game=game;
                this.width=1667;
                this.height=500;
                this.layer5image = layer5;
                this.layer4image = layer4;
                this.layer3image = layer3;
                this.layer2image = layer2;
                this.layer1image = layer1;
                this.layer1 = new Layer(this.game,this.width,this.height,0.5,this.layer1image);
                this.layer2 = new Layer(this.game,this.width,this.height,1,this.layer2image);
                this.layer3 = new Layer(this.game,this.width,this.height,2,this.layer3image);
                this.layer4 = new Layer(this.game,this.width,this.height,4,this.layer4image);
                this.layer5 = new Layer(this.game,this.width,this.height,5,this.layer5image);

                this.backgroundLayers= [this.layer1,this.layer2,this.layer3,this.layer4,this.layer5];


            }

            update(){

                this.backgroundLayers.forEach(l =>
                    
                    
                        {l.update();}
                    
                    
                    )};


            draw(context){


                this.backgroundLayers.forEach(l =>
                    
                    
                    {l.draw(context);}
                
                
                )};




            }



        

            class CollisionAnimation {

                constructor(game,x,y){
            
                    this.game=game;
                    this.image=boom;
                    this.spriteWidth=100;
                    this.spriteHeight=90;
                    this.sizeModifier=Math.random()+0.5;
                    this.width = this.spriteWidth*this.sizeModifier;
                    this.height=this.spriteHeight*this.sizeModifier;
                    this.x=x-this.width*0.5;
                    this.y=y-this.height*0.5;
                    this.frameX=0;
                    this.maxFrame=4;
                    this.markedForDeletion=false;
                    this.fps=Math.random()*10+15;
                    this.frameInterval=1000/this.fps;
                    this.frameTimer=0;
            
            
                }
            
            
                    draw(context){
            
                        context.drawImage(this.image,this.frameX*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
            
                        
                    }
            
            
                    update(deltaTime){
            
                        this.x -= this.game.speed;
            
                        if(this.frameTimer>this.frameInterval)
                        {    this.frameX++;
                            this.frameTimer=0;
                        }
            
                        else {this.frameTimer+=deltaTime;}
                    
                        if(this.frameX>this.maxFrame)this.markedForDeletion=true;
            
            
                    }
            
            
            }


            class Enemy {

                constructor(){
            
                    this.frameX=0;
                    this.frameY=0;
                    this.fps =20;
                    this.frameInterval =1000/this.fps;
                    this.frameTimer=0;
                    this.markedForDeletion=false;
                
            
            
                }
            
            
            
                update(deltaTime){
            
                    this.x-=this.speedX+this.game.speed;
                    this.y+=this.speedY;
                    if(this.frameTimer>this.frameInterval)
                   
                    {
                        this.frameTimer=0;
                        if(this.frameX<this.maxFrame)this.frameX++;
                        else this.frameX=0;
                    } else {this.frameTimer+=deltaTime;}
            
            
                    if(this.x+this.width<0)this.markedForDeletion=true;
            
            
            
                }
            
            
                draw(context){
            
                    if(this.game.debug)context.strokeRect(this.x,this.y,this.width,this.height);
                    context.drawImage(this.image,this.frameX*this.width,0,this.width,this.height,this.x,this.y,this.width,this.height);
            
            
                }
            
            }
            
            
                class FlyingEnemy extends Enemy {
            
                    constructor(game){
            
                        super(game);
                        this.game=game;
                        this.width=261;
                        this.height=209;
                        // this.x=this.game.width;
                        // this.y=Math.random()*this.game.height*0.8;
                        this.speedX=Math.random()+30;
                        this.speedY=0;
                        this.maxFrame=5;
                        this.image=enemy_fly;
                        this.angle=0;
                        this.va=Math.random()*1+3;
            
                          this.x=this.game.width;
                         this.y=Math.random()*this.game.height*0.8;
                       this.vx=Math.random()*0.2+0.1;
                       this.angle=0;
                       this.curve=Math.random()*30;
            
                    }
            
                    update(deltaTime){
            
                        super.update(deltaTime);
                        // this.angle+=this.va;
                        // this.y+=Math.sin(this.angle);
            
                        this.y += Math.sin(this.angle)*this.curve;
                        this.angle+=0.02;
            
                    }
            
                    draw(context){
            
                        super.draw(context);
            
                    }
            
                }
            
            
                 class GroundEnemy extends Enemy {
            
                    constructor(game){
            
                        super(game);
                        this.game=game;
                        this.width=229;
                        this.height=171;
                        // this.x=this.game.width;
                        // this.y=this.groundMargin+100;
                        this.image=enemy_plant;
                        this.speedX=Math.random()+30;
                        this.speedY=0;
                        this.maxFrame=6;
            
            
                        this.x=this.game.width;
                        this.y=this.game.height-this.height-this.game.groundMargin;
                
                        this.vx=Math.random()*0.1+0.1;
            
                    //     this.angle=0;
                    //     this.va=Math.random()*1+3;
                    //     this.x=this.game.width;
                    //     this.y=Math.random()*this.game.height*0.8;
                    //   this.vx=Math.random()*0.2+0.1;
                    //   this.angle=0;
                    //   this.curve=Math.random()*30;
            
            
            
                    }
                    
            
                    draw(context){
            
                        super.draw(context);
            
            
                    }
            
            
                    update(deltaTime){
            
                        super.update(deltaTime);
                        // this.y += Math.sin(this.angle)*this.curve;
                        // this.angle+=0.02;
            
                    }
            
            
                }
            
                 class ClimbingEnemy extends Enemy {
            
                    constructor(game){
            
                        super(game);
                        this.game=game;
                        this.width=310;
                        this.height=175;
                        this.x=this.game.width;
                        this.y=Math.random()*this.game.height;
                        this.image=enemy_spider;
                        this.speedX=0;
                        this.speedY=Math.random()> 0.5? 1:-1;
                        this.maxFrame=6;
            
            
                    }
            
            
                        update(deltaTime){
            
                            super.update(deltaTime);
                            if(this.y>this.game.height-this.height-this.game.groundMargin)this.speedY*=-8;
                            if(this.y<-this.height)this.markedForDeletion=true;
            
            
            
                        }
            
            
                        draw(context){
            
                            super.draw(context);
                            context.beginPath();
                            context.moveTo(this.x+this.width,0)
                            context.lineTo(this.x+this.width+50,this.y+50);
                            context.stroke();
            
                        }
            
                }

                
                class FloatingMessage {

                    constructor(value,x,y,targetX,targetY)
                
                    {
                
                        this.value=value;
                        this.x=x;
                        this.y=y;
                        this.targetX=targetX;
                        this.targetY=targetY;
                        this.markedForDeletion=false;
                        this.timer=0;
                
                    }
                
                    update(){
                
                        this.x+= (this.targetX-this.x)*0.03;
                        this.y+=(this.targetY-this.y)*0.03;
                        this.timer++;
                        if(this.timer>100)this.markedForDeletion=true;
                
                
                    }
                
                
                    draw(context){
                
                        context.fnt='20 px Helvetica';
                        context.fillStyle = 'white';
                        context.fillText(this.value,this.x,this.y)
                
                
                    }
                
                
                
                
                }


                class InputHandler {

                    constructor(game) {
                      
                        this.game=game;
                        this.keys = [];

                        console.log(canvas);

                       window.addEventListener('keydown', (e) =>
                        
                        {
                
                          if((      e.key==='ArrowDown'|| 
                                      e.key==='ArrowUp'|| 
                                      e.key==='ArrowLeft'|| 
                                      e.key==='ArrowRight'|| 
                                      e.key==='Enter'
                            ) && this.keys.indexOf(e.key) ===-1 )
        
                            {this.keys.push(e.key);};
        
                            
        
                           if(e.key === 'd') this.game.debug = !this.game.debug;
        
        
                           if(e.key === 'Enter' && this.game.energy<10) {this.game.message=true} ;
        
        
                           if(e.key === 'r' && this.game.gameOver==true)
        
                          {
                            this.game.gameOver=false;
                            this.game.energy=100;
                            this.game.score=0;
                            this.game.lives=12;
                            this.game.player.x=0;
        
        
                          };
        
        
                     
        
                          // console.log(e.key, this.keys);
                        
                        });
                        
                
         
                
                        window.addEventListener('keyup', (e) =>
                        
                        {
                
                          if(      e.key==='ArrowDown'|| 
                                      e.key==='ArrowUp'|| 
                                      e.key==='ArrowLeft'|| 
                                      e.key==='ArrowRight'|| 
                                      e.key==='Enter'
                            ) 
        
                            {this.keys.splice(this.keys.indexOf(e.key),1);}
        
                            // console.log(e.key, this.keys);
                        
                        });
                        
                
                
                
                
                
                
                    }}
                
                
                
        
                    class Particle {

                        constructor(game){
                    
                            this.game=game;
                            this.markedForDeletion=false;
                    
                        }
                    
                        update(){
                    
                            this.x -= this.speedX+this.game.speed;
                            this.y -= this.speedY;
                            this.size *=0.95;
                            if(this.size<0.5)this.markedForDeletion=true;
                    
                        }
                    
                        draw(){
                    
                    
                    
                        }
                    
                    
                    }
                    
                     class Dust extends Particle {
                    
                        constructor(game,x,y){
                    
                            super(game);
                            this.size=Math.random()*10+10;
                            this.x=x;
                            this.y=y;
                            this.speedX=Math.random();
                            this.speedY=Math.random();
                            this.color='rgba(0,0,0,0.2)';
                    
                        }
                    
                        draw(context){
                    
                            context.beginPath();
                            context.arc(this.x,this.y,this.size,0,Math.PI*2);
                            context.fillStyle=this.color;
                            context.fill();
                    
                    
                        }
                    
                    
                    }
                    
                    
                     class Splash extends Particle {
                    
                            constructor(game,x,y){
                    
                                super(game);
                                this.size=Math.random()*1000+1000;
                                this.x=x-this.size*0.4;
                                this.y=y-this.size*0.5;
                                this.speedX=Math.random()*6-3;
                                this.speedY=Math.random()*2+2;
                                this.gravity=1000;
                                this.image=fire;
                    
                    
                            }
                        
                            update(){
                    
                                super.update();
                                this.gravity+=0.1;
                                this.y+=this.gravity;
                    
                    
                            }
                    
                            drawn(context){
                    
                                context.drawImage(this.image, this.x,this.y,this.size,this.size)
                    
                    
                    
                            }
                    
                    
                    }
                    
                    
                     class Fire extends Particle {
                    
                        constructor(game,x,y){
                    
                            super(game);
                            this.image=document.getElementById('fire');
                            this.size=Math.random()*100+50;
                            this.x=x;
                            this.y=y;
                            this.speedX=1;
                            this.speedY=1;
                            this.angle=0;
                            this.va=Math.random()*0.5-0.1;
                    
                        }
                    
                        update(){
                    
                            super.update();
                            this.angle+=this.va;
                            this.x+=Math.sin(this.angle*5);
                    
                        }
                    
                    
                        draw(context){
                    
                            context.save();
                            context.translate(this.x,this.y);
                            context.rotate(this.angle);
                            context.drawImage(this.image,-this.size*0.5,-this.size*0.5,this.size,this.size);
                            context.restore();
                    
                        }
                    
                    
                    
                    
                    
                    
                    }


                    class Player{

                        constructor(game){
                    
                            this.game=game;
                            this.width=100;
                            this.height=91.3;
                            this.x=0;
                            this.y=this.game.height-this.height-this.game.groundMargin;
                            this.image=document.getElementById('player');
                            this.speed=1;
                            this.maxSpeed=30;
                            this.frameX=0;
                            this.frameY=0;
                            this.vy=1;
                            this.weight=1;
                            this.state = [new Sitting(this.game), new Running(this.game), new Jumping(this.game), new Falling(this.game),new Rolling(this.game),new Diving(this.game), new HIT(this.game)];
                       
                            this.maxFrame=5;
                            this.fps=20;
                            this.frameInterval=1000/this.fps;
                            this.frameTimer=0;
                    
                        
                            // this.currentState=this.state[0];
                            // this.currentState.enter();
                    
                    
                        }
                    
                    
                            update(input, deltaTime){
                    
                    
                              
                    
                    
                                this.checkCollision();
                                this.currentState.handleInput(input);
                    
                                // this.x++;
                                this.x += this.speed;
                                if(input.includes('ArrowRight') && this.currentState !== this.state[6])this.speed=this.maxSpeed;
                                else if(input.includes('ArrowLeft') && this.currentState !== this.state[6])this.speed=-this.maxSpeed;
                                else 
                                        {
                                            this.speed=this.speed/2;
                    
                                        
                                        }
                    
                                if (this.x<0)this.x=0;
                                if (this.x>this.game.width-this.width) this.x = this.game.width-this.width;
                    
                                this.y += this.vy;
                                if(input.includes('ArrowUp') && this.onGround())this.vy-=30;
                                if(!this.onGround())this.vy+=this.weight;
                                else this.vy=0;
                    
                                // if (this.frameX<this.maxFrame)this.frameX++;
                                // else this.frameX=0;
                    
                                if(this.y>this.game.height-this.height-this.game.groundMargin)
                                {this.y=this.game.height-this.height-this.game.groundMargin;}
                    
                    
                                if(this.frameTimer>this.frameInterval)
                                {   
                                    this.frameTimer=0;
                                    if(this.frameX<this.maxFrame)this.frameX++;
                                    else this.frameX=0;
                                
                                } else {this.frameTimer+=deltaTime};
                    
                                // console.log(this.speed);
                            }
                    
                    
                            draw(context){
                    
                    
                                if (this.game.debug) context.strokeRect(this.x,this.y,this.width,this.height);
                                // context.fillStyle ='red';
                                // context.fillRect(this.x,this.y,this.width,this.height);
                                context.drawImage(this.image,this.frameX*this.width,this.frameY*this.height,this.width,this.height,this.x-50,this.y-70,this.width*2,this.height*2);
                    
                    
                            }
                    
                           
                    
                    
                            onGround(){
                    
                                return this.y >= this.game.height-this.height-this.game.groundMargin;
                    
                    
                            }
                    
                            setState(state, speed){
                    
                                this.currentState=this.state[state];
                                this.game.speed=this.game.maxSpeed*speed;
                                this.currentState.enter();
                    
                            }
                    
                    
                            checkCollision(){
                    
                                this.game.enemies.forEach(e =>
                                    
                                    {
                    
                                        if(
                                            
                                            e.x < this.x + this.width &&
                                            e.x + e.width > this.x &&
                                            e.y < this.y + this.height &&
                                            e.y + e.height > this.y
                                            
                                            
                                            ){
                                                  
                                                e.markedForDeletion = true;
                                                this.game.collisions.push(new CollisionAnimation(this.game, e.x + e.width*0.5, e.y+e.height*0.5));
                                              
                                          
                    
                                        if(this.currentState === this.state[4] || this.currentState === this.state[5])
                                        
                                        {
                    
                                            this.game.score=this.game.score+5;
                                            this.game.floatingMessages.push(new FloatingMessage('+1',e.x,e.y,150,50));
                                            this.game.energy=this.game.energy-20;
                                            if(this.game.energy<0)this.setState(6,0);
                    
                                        }
                    
                    
                            
                                        else{this.setState(6,0);
                                        this.game.score=this.game.score-2;
                                        this.game.lives--;}
                                        if(this.game.lives<=0) this.game.gameOver = true;
                    
                                    }
                                    
                                    
                                    
                                    
                                    
                            });
                    
                    
                    
                            }
                    
                    
                    }


                    const states={

                        SITTING:0,
                        RUNNING:1,
                        JUMPING:2,
                        FALLING:3,
                        ROLLING:4,
                        DIVING:5,
                        HIT:6,
                    
                    
                    
                    }
                    
                    
                    class State{
                    
                        constructor(state,game){
                    
                            this.state=state;
                            this.game=game;
                    
                            
                        }
                    
                    
                    
                    }
                    
                     class Sitting extends State {
                    
                        constructor(game){
                    
                            super('SITTING',game);
                      
                    
                    
                        }
                    
                            enter(){
                    
                                this.game.player.frameX=0;
                                this.game.player.frameY=5;
                                this.game.player.maxFrame=4;
                    
                    
                            }
                    
                    
                            handleInput(input){
                    
                                if(input.includes('ArrowLeft') || input.includes('ArrowRight'))
                    
                                {   
                                    this.game.player.setState(states.RUNNING,1)
                                    
                                }
                    
                                else if(input.includes('Enter')){this.game.player.setState(states.RUNNING,2)};
                    
                    
                            }
                    }
                    
                    
                     class Running extends State {
                    
                        constructor(game){
                    
                            super('RUNNING',game);
                    
                    
                    
                        }
                    
                            enter(){
                    
                                this.game.player.frameX=0;
                                this.game.player.frameY=3;
                                this.game.player.maxFrame=8;
                    
                            }
                    
                    
                            handleInput(input){
                    
                    
                                this.game.particles.unshift(new Dust(this.game,this.game.player.x+this.game.player.width*0.5,this.game.player.y+this.game.player.height));
                    
                    
                                if(input.includes('ArrowDown'))
                    
                                {this.game.player.setState(states.SITTING,0)}
                    
                                else if (input.includes('ArrowUp')) 
                                
                                {
                                        this.game.player.setState(states.JUMPING,1);
                    
                                } else if(input.includes('Enter')&& this.game.energy>=10){this.game.player.setState(states.ROLLING,2)};
                    
                    
                            }
                    }
                    
                    
                     class Jumping extends State {
                    
                        constructor(game){
                    
                            super('JUMPING',game);
                    
                    
                    
                        }
                    
                            enter(){
                    
                                this.game.player.frameX=0;
                                if(this.game.player.onGround())this.game.player.vy-=30;
                                this.game.player.frameY=1;
                                this.game.player.maxFrame=6;
                    
                            }
                    
                    
                            handleInput(input){
                    
                                if(this.game.player.vy>this.game.player.weight)
                    
                                {this.game.player.setState(states.FALLING,1)}
                    
                                else if(input.includes('Enter')&& this.game.energy>=10){this.game.player.setState(states.ROLLING,2)}
                    
                                else if(input.includes('ArrowDown')&& this.game.energy>=10){this.game.player.setState(states.DIVING,0)};
                    
                    
                            }
                    }
                    
                    
                     class Falling extends State {
                    
                        constructor(game){
                    
                            super('FALLING',game);
                    
                    
                    
                        }
                    
                            enter(){
                    
                                this.game.player.frameX=0;
                                this.game.player.frameY=2;
                                this.game.player.maxFrame=6;
                    
                            }
                    
                    
                            handleInput(input){
                    
                                if(this.game.player.onGround())
                    
                                {this.game.player.setState(states.RUNNING,1)}
                                
                                else if(input.includes('Enter') && this.game.energy>=10){this.game.player.setState(states.ROLLING,2)} 
                    
                                 else if(input.includes('ArrowDown')&& this.game.energy>=10){this.game.player.setState(states.DIVING,0)};
                    
                            }
                    }
                    
                    
                    
                     class Rolling extends State {
                    
                        constructor(game){
                    
                            super('ROLLING',game);
                    
                    
                        }
                    
                            enter(){
                    
                                this.game.player.frameX=0;
                                this.game.player.frameY=6;
                                this.game.player.maxFrame=6;
                                this.game.energy=this.game.energy-10;
                    
                            }
                    
                    
                            handleInput(input){
                    
                                this.game.particles.unshift(new Fire(this.game,this.game.player.x + this.game.player.width*0.6,this.game.player.y+this.game.player.height*0.5));
                         
                                
                                if(!input.includes('Enter')&& this.game.player.onGround())
                                {this.game.player.setState(states.RUNNING,1)}
                    
                                else if(!input.includes('Enter')&& !this.game.player.onGround())
                                {this.game.player.setState(states.FALLING,1)}
                    
                                else if(input.includes('Enter') && input.includes('ArrowUp') && this.game.player.onGround())
                                {this.game.player.vy -=27}
                    
                                else if(input.includes('ArrowDown')&& !this.game.player.onGround()&& this.game.energy>=10)
                                {this.game.player.setState(states.DIVING,0)};
                    
                            }}
                    
                    
                             class Diving extends State {
                    
                                constructor(game){
                            
                                    super('DIVING',game);
                            
                            
                                }
                            
                                    enter(){
                            
                                        this.game.player.frameX=0;
                                        this.game.player.frameY=6;
                                        this.game.player.maxFrame=6;
                                        this.game.player.vy=15;
                            
                                    }
                            
                            
                                    handleInput(input){
                            
                                        this.game.particles.unshift(new Fire(this.game,this.game.player.x + this.game.player.width*0.6,this.game.player.y+this.game.player.height*0.5));
                            
                                        if(this.game.player.onGround())
                    
                                        {
                    
                                            
                                            for(let i=0; i<30;i++)
                                            {  this.game.particles.unshift(new Splash(this.game,this.game.player.x+this.game.player.width*0.5,this.game.player.y+this.game.player.height))}
                                            this.game.player.setState(states.RUNNING,1);
                                        
                                        }
                    
                    
                    
                            
                                        else if(!input.includes('Enter')&& this.game.player.onGround()&& this.game.energy>=10)
                                        {this.game.player.setState(states.ROLLING,2)}
                            
                            
                                    }}
                            
                    
                                     class HIT extends State {
                    
                                        constructor(game){
                                    
                                            super('HIT',game);
                                    
                                    
                                        }
                                    
                                            enter(){
                                    
                                                this.game.player.frameX=0;
                                                this.game.player.frameY=9;
                                                this.game.player.maxFrame=3;
                                                
                    
                                    
                                            }
                                    
                                    
                                            handleInput(input){
                                    
                    
                                                if(this.game.player.frameX>=2 && this.game.player.onGround())
                            
                                                {
                            
                                                    this.game.player.setState(states.RUNNING,1)
                                       
                                                
                                                }
                            
                            
                            
                                    
                                                else if(this.game.player.frameX>2 && !this.game.player.onGround())
                                                {this.game.player.setState(states.FALLING,1)}
                                                
                                              
                                                
                                            }}
                
                                            

                                            class UI {

                                                constructor(game){
                                            
                                                    this.game=game;
                                                    this.fontSize=50;
                                                    this.fontFamily='Helvetica';
                                                    this.livesImage=lives;
                                            
                                                }
                                            
                                                draw(context){
                                            
                                                    context.save;
                                                    context.shadowOffsetX=2;
                                                    context.shadowOffsetY=2;
                                                    context.shadowColor ='white';
                                                    context.shadowBlur=0;
                                            
                                                    context.font=this.fontSize+'px '+this.fontFamily;
                                                    context.textAlign='left';
                                                    context.fillStyle=this.game.fontColor;
                                            
                                                    context.fillText('Score:'+this.game.score,100,150);
                                            
                                                    context.font=this.fontSize*0.8+'px '+this.fontFamily;
                                                    context.fillText(('PRESS Enter to use your Energy: '+this.game.energy),100,220);
                                            
                                                    for(let i=0;i<this.game.lives;i++)
                                                    {  context.drawImage(this.livesImage, 30*i,30,30,30)}
                                                  
                                                    if(this.game.message==true){context.fillText('Dont have enought Energy(cost 10)', this.game.width*0.5-300,this.game.height*0.5-50);};
                                                    // if(this.game.message=false){context.fillText('', this.game.width*0.5,this.game.height*0.5+20);};
                                                    // console.log(this.game.message);
                                            
                                            
                                                    if (this.game.gameOver) 
                                                    {
                                            
                                                        context.textAlign='center'
                                                        context.font=this.fontSize*2+' px '+this.fontFamily;
                                            
                                                    //     if (this.game.score>this.game.winningScore)
                                                    //     {
                                                    //     context.fillText('Boo-yA', this.game.width*0.5,this.game.height*0.5-20);
                                            
                                                    //     context.fillText('Boo-yA', this.game.width*0.5,this.game.height*0.5+20);
                                                    //     } else {  context.fillText('Boo-yA', this.game.width*0.5,this.game.height*0.5-20);
                                            
                                                    //     context.fillText('Boo-yA', this.game.width*0.5,this.game.height*0.5+20);}
                                                    // }
                                            
                                                    context.fillText('Boo-yA, press R to remake a game', this.game.width*0.5,this.game.height*0.5+20);
                                                        
                                                    }
                                            
                                                    context.restore();
                                            
                                                }
                                            
                                            
                                            
                                            }


                              
                                              
                                            
                                            
                                            
                                                class Game {
                                            
                                                    constructor(width,height){
                                            
                                                        this.width=width;
                                                        this.height=height;
                                                        this.groundMargin=190;
                                                        this.speed=3;
                                                        this.maxSpeed=5;
                                                        this.background= new Background(this);
                                                        this.player=new Player(this);
                                                        this.input = new InputHandler(this);
                                                        this.enemies=[];
                                                        this.particles=[];
                                                        this.collisions=[];
                                                        this.maxParticles=50;
                                                        this.enemyTimer= 0;
                                                        this.enemyInterval=500;
                                                        this.debug=false;
                                                        this.score=0;
                                                        this.fontColor='black';
                                                        this.UI =new UI(this);
                                            
                                                        this.player.currentState=this.player.state[0];
                                                        this.player.currentState.enter();
                                                
                                                   
                                                        this.time=0;
                                                        this.maxTime=30000;
                                                        this.gameOver=false;
                                                        this.lives=12;
                                                        this.floatingMessages = [];
                                                        this.winningScore=40;
                                                        this.enemyTypes=['enemy_fly','enemy_plant','enemy_spider'];
                                                        this.energy=100;
                                                        this.message=false;
                                                    
                                            
                                            
                                                    }
                                            
                                                    update(deltaTime){
                                            
                                                        // this.time +=deltaTime;
                                                        // if(this.time>this.maxTime)this.gameOver=true;
                                            
                                                        if((this.input.keys.includes('ArrowRight')) || (this.input.keys.includes('ArrowLeft')))
                                                        {!this.background.update();};
                                            
                                                        // console.log(this.input.keys.length);
                                            
                                                        if(!game.gameOver)this.player.update(this.input.keys, deltaTime);
                                                   
                                                        if(this.enemyTimer>this.enemyInterval)
                                            
                                                              {
                                            
                                                                if(this.player.speed<29){this.enemyInterval=500};
                                                                if(this.player.speed<20){this.enemyInterval=400};
                                                                if(this.player.speed<10){this.enemyInterval=300};
                                                                
                                                                if(!game.gameOver)this.addEnemy();
                                                              this.enemyTimer=0;
                                            
                                                            }
                                            
                                                            else {this.enemyTimer+=deltaTime;}
                                            
                                            
                                                            this.enemies.forEach(e=>
                                                                
                                                                {
                                            
                                                                    e.update(deltaTime);
                                                                    // if(e.markedForDeletion)this.enemies.splice(this.enemies.indexOf(e),1)
                                            
                                                                });
                                            
                                                                this.particles.forEach( (p,index)=>
                                                                    
                                                                    {
                                                                        p.update();
                                                                        // if (this.particles.markedForDeletion) this.particles.splice(index,1);
                                                                    
                                                                   });
                                            
                                                                   if(this.particles.length>50)
                                            
                                                                   {this.particles.length=this.maxParticles};
                                            
                                                            
                                            
                                                                   this.collisions.forEach((c,index) =>
                                            
                                            
                                                                   {
                                            
                                                                        c.update(deltaTime);
                                                                        // if(c.markedForDeletion) this.collisions.splice(index,1);
                                            
                                                                   });
                                                                   
                                            
                                                                   this.floatingMessages.forEach((f,index) =>
                                            
                                            
                                                                   {
                                            
                                                                        f.update();
                                                    
                                            
                                                                   });
                                            
                                                                   this.enemies = this.enemies.filter(e=> !e.markedForDeletion);
                                                                   this.particles = this.particles.filter(p=> !p.markedForDeletion);
                                                                   this.collisions = this.collisions.filter(c=> !c.markedForDeletion);
                                                                   this.floatingMessages=this.floatingMessages.filter (m => !m.markedForDeletion);
                                                                   if(this.energy>10) {this.message=false};
                                            
                                                                //    console.log(this.player.x, this.player.y);
                                                                //    console.log(canvas.width);
                                            
                                                    }
                                            
                                            
                                                    draw(context){
                                            
                                                        this.background.draw(context);
                                                        this.player.draw(context);
                                            
                                                        this.enemies.forEach(e=>
                                                                
                                                            {
                                            
                                                                e.draw(context);
                                            
                                                            });
                                            
                                                            this.particles.forEach(p=>
                                                                
                                                                {
                                                
                                                                    p.draw(context);
                                                
                                                                });
                                            
                                                                this.collisions.forEach(c=>
                                                                
                                                                    {
                                                    
                                                                        c.draw(context);
                                                    
                                                                    });
                                                
                                            
                                                                    this.floatingMessages.forEach((f,index) =>
                                            
                                            
                                                                    {
                                             
                                                                         f.draw(context);
                                                     
                                             
                                                                    });
                                                                    
                                            
                                            
                                            
                                                            this.UI.draw(context);
                                            
                                                    }
                                            
                                            
                                            
                                                    addEnemy(){
                                            
                                                        // if(this.speed>0 && Math.random()<0.5) this.enemies.push(new GroundEnemy(this));
                                            
                                                        // else if(this.speed>0)this.enemies.push(new ClimbingEnemy(this));
                                            
                                                        // this.enemies.push(new FlyingEnemy(this));
                                            
                                            
                                                        const randomEnemy = this.enemyTypes[Math.floor(Math.random()*this.enemyTypes.length)];
                                                        if(randomEnemy=='enemy_plant') this.enemies.push(new GroundEnemy(this));
                                                        else if (randomEnemy=='enemy_spider') this.enemies.push(new ClimbingEnemy(this));
                                                        else if (randomEnemy=='enemy_fly') this.enemies.push(new FlyingEnemy(this));
                                            
                                                        // console.log(this.enemies,this.particles,this.collisions,this.floatingMessages);
                                                        // console.log(this.enemies)
                                                     
                                            
                                                    }
                                            
                                                    
                                                }
                                            
                                            
                                                
                                            
                                                const game=new Game(canvas.width, canvas.height);
                                                let lastTime=0;
                                                
                                                function animate(timeStamp){
                                            
                                            
                                                    ctx.clearRect(0,0,canvas.width,canvas.height);
                                            
                                                    const deltaTime=timeStamp-lastTime;
                                                    lastTime=timeStamp;
                                            
                                                  
                                                   game.update(deltaTime);
                                                   game.draw(ctx);
                                                    
                                                    // drawStatusText(ctx,input,player);
                                                    // console.log(this.player);
                                                //   if(!game.gameOver) 
                                                
                                                   requestAnimationFrame(animate);
                                                };
                                            
                                                animate(0);
                                            
                        
                                        
            }}


            export default app;